import React from 'react'

import newsStore from '@/stores/news.store'
import { observer } from 'mobx-react-lite'
import commentsStore from '@/stores/comments.store'

interface IDeleteArticleHOCProps {
  uuid: string
  callback?: () => void
  children: (click: React.MouseEventHandler<HTMLButtonElement>) => React.ReactNode
}

const DeleteArticleHOC: React.FC<IDeleteArticleHOCProps> = observer(({ uuid, callback, children }) => {
  return children((event) => {
    event.stopPropagation()
    newsStore.deleteItem(uuid)
    commentsStore.deleteItem(uuid, 'article_uuid')
    callback?.()
  })
})

export default DeleteArticleHOC
