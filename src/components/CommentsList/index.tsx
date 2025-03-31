import React from 'react'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router'

import CommentsListItem from '@/components/CommentsList/CommentsListItem'

import commentsStore from '@/stores/comments.store'

import '@/components/CommentsList/comments-list.scss'

const CommentsList: React.FC = observer(() => {
  const { uuid } = useParams<{ uuid: string }>()

  if (!uuid) return null

  if (!commentsStore.commentsList[uuid]?.length) return null

  return (
    <div className="comments-list">
      <h3 className="comments-list__title">Комментарии</h3>
      <div className="comments-list__list">
        {commentsStore.commentsList[uuid].map((comment) => (
          <CommentsListItem key={comment.uuid} data={comment} />
        ))}
      </div>
    </div>
  )
})

export default CommentsList
