import React from 'react'

import Icon, { IconNameType } from '@/components/Icon'

import '@/components/Icon/IconInfo/date-in-publication.scss'
import { isDateString } from '@/helpers/isDateString'

interface IconInfoProps {
  value?: string
  size?: number
  iconName: IconNameType
  className?: string
}

const IconInfo: React.FC<IconInfoProps> = ({ value, size = 16, iconName, className, ...rest }) => {
  if (!value) return null

  const val = isDateString(value)
    ? new Date(value).toLocaleDateString('default', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })
    : value

  return (
    <div className={`date-in-publication ${className}`} {...rest}>
      <Icon name={iconName} size={size} />
      <span>{val}</span>
    </div>
  )
}

export default IconInfo
