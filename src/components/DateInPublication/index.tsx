import React from 'react'

import Icon from '@/components/Icon'

import '@/components/DateInPublication/date-in-publication.scss'

interface Props {
  date: string
  size?: number
}

const DateInPublication: React.FC<Props> = ({ date, size = 16 }) => {
  const convertedDate = date.replace(/(\d+)-(\d+)-(\d+)/g, '$3-$2-$1')

  return (
    <div className="date-in-publication">
      <Icon name="calendar" size={size} />
      <span>{convertedDate}</span>
    </div>
  )
}

export default DateInPublication
