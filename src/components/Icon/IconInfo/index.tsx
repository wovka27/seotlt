import React from 'react'

import Icon, { IconNameType } from '@/components/Icon'

import '@/components/Icon/IconInfo/date-in-publication.scss'

interface Props {
  date: string
  size?: number
  iconName: IconNameType
}

const IconInfo: React.FC<Props> = ({ date, size = 16, iconName }) => {
  const convertedDate = date.replace(/(\d+)-(\d+)-(\d+)/g, '$3-$2-$1')

  return (
    <div className="date-in-publication">
      <Icon name={iconName} size={size} />
      <span>{convertedDate}</span>
    </div>
  )
}

export default IconInfo
