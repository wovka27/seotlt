import React, { useState } from 'react'
import '@/components/UI/UiImage/ui-image.scss'

interface UiImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSize?: number
}

const UiImage: React.FC<UiImageProps> = ({ src, alt = '', className = '', fallbackSize = 48, style, ...props }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`ui-image ${className}`} style={style}>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`ui-image__img ${isLoading ? 'ui-image__img--loading' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}

      {isLoading && (
        <div className="ui-image__loader" style={{ width: fallbackSize, height: fallbackSize }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
          </svg>
        </div>
      )}

      {hasError && (
        <div className="ui-image__error" style={{ width: '100%', height: '100%', background: '#f3f4f6' }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default UiImage
