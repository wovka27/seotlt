import React from 'react'

import newsStore from '@/stores/news.store'
import { observer } from 'mobx-react-lite'

interface IDeleteArticleHOCProps {
  uuid: string
  callback?: () => void
  children: (click: React.MouseEventHandler<HTMLButtonElement>) => React.ReactNode
}

const DeleteArticleHOC: React.FC<IDeleteArticleHOCProps> = observer(({ uuid, callback, children }) => {
  return children((event) => {
    event.stopPropagation()
    newsStore.deleteItem(uuid)
    callback?.()
  })
})

export default DeleteArticleHOC
