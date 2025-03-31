import React from 'react'
import { observer } from 'mobx-react-lite'

import CommentsListItem from '@/components/CommentsList/CommentsListItem'

import commentsStore, { ICommentsItem } from '@/stores/comments.store'

import '@/components/CommentsList/comments-list.scss'
import { useParams } from 'react-router'

interface CommentsListProps {
  onEdit: (comment: ICommentsItem) => void
  onRemove: (uuid: string) => void
}

const CommentsList: React.FC<CommentsListProps> = observer(({ onEdit, onRemove }) => {
  const { uuid } = useParams<{ uuid: string }>()

  if (!uuid) return null

  if (!commentsStore.commentsList[uuid]?.length) return null

  return (
    <div className="comments-list">
      <h3 className="comments-list__title">Комментарии</h3>
      <div className="comments-list__list">
        {commentsStore.commentsList[uuid].map((comment) => (
          <CommentsListItem onRemove={onRemove} onEdit={onEdit} key={comment.uuid} data={comment} />
        ))}
      </div>
    </div>
  )
})

export default CommentsList
