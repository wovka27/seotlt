import React from 'react'

import newsStore from '@/stores/news.store'
import { observer } from 'mobx-react-lite'

interface IDeleteNewHOCProps {
  uuid: string
  callback?: () => void
  children: (click: React.MouseEventHandler<HTMLButtonElement>) => React.ReactNode
}

const DeleteNewHOC: React.FC<IDeleteNewHOCProps> = observer(({ uuid, callback, children }) => {
  const click: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    newsStore.deleteItem(uuid)
    callback?.()
  }

  return children(click)
})

export default DeleteNewHOC
