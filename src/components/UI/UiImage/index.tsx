import React, { useState } from 'react'
import '@/components/UI/UiImage/ui-image.scss'
import Icon from '@/components/Icon'

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
          onChange={(e) => console.log(e)}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}

      {isLoading && (
        <div className="ui-image__loader" style={{ width: fallbackSize, height: fallbackSize }}>
          <Icon name="image_loading" />
        </div>
      )}

      {hasError && (
        <div className="ui-image__error" style={{ width: '100%', height: '100%', background: '#f3f4f6' }}>
          <Icon name="image_error" />
        </div>
      )}
    </div>
  )
}

export default UiImage
