import React from 'react'
import UiImage from '@/components/UI/UiImage'

import '@/components/ImgPreview/img-preview.scss'

interface IImgPreviewProps {
  srcImg?: string
}

const ImgPreview: React.FC<IImgPreviewProps> = ({ srcImg }) => {
  return (
    <div className="img-preview">
      {srcImg && <UiImage key={srcImg} src={srcImg} alt="Preview" className="img-preview__image" />}
    </div>
  )
}

export default ImgPreview
