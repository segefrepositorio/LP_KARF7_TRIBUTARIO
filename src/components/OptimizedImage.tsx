import React, { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useLazyAnimations';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(priority ? src : placeholder);
  const imgRef = useRef<HTMLImageElement>(null);
  const isVisible = useIntersectionObserver(imgRef, { threshold: 0.1 });

  useEffect(() => {
    if (!priority && isVisible && currentSrc === placeholder) {
      setCurrentSrc(src);
    }
  }, [isVisible, priority, src, currentSrc, placeholder]);

  const handleLoad = () => {
    setIsLoaded(true);
    setIsError(false);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(false);
  };

  // Gerar srcSet para diferentes resoluções
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc === placeholder) return '';
    
    // Para imagens do Pexels, gerar diferentes tamanhos
    if (baseSrc.includes('pexels.com')) {
      const baseUrl = baseSrc.split('?')[0];
      return [
        `${baseUrl}?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1 640w`,
        `${baseUrl}?auto=compress&cs=tinysrgb&w=1280&h=720&dpr=1 1280w`,
        `${baseUrl}?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1 1920w`,
        `${baseUrl}?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1 2560w`
      ].join(', ');
    }
    
    return '';
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={currentSrc}
        srcSet={generateSrcSet(currentSrc)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`
          transition-all duration-500 ease-in-out
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
          ${isError ? 'opacity-50' : ''}
          w-full h-full object-cover
        `}
        style={{
          filter: isLoaded ? 'none' : 'blur(5px)',
          transform: isLoaded ? 'scale(1)' : 'scale(1.05)'
        }}
      />
      
      {/* Loading placeholder */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Erro ao carregar imagem</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;