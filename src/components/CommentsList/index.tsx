import React from 'react'
import { observer } from 'mobx-react-lite'

import CommentsListItem from '@/components/CommentsList/CommentsListItem'

import commentsStore, { ICommentsItem } from '@/stores/comments.store'

import '@/components/CommentsList/comments-list.scss'

interface CommentsListProps {
  onEdit: (comment: ICommentsItem) => void
  onRemove: (uuid: string) => void
}

const CommentsList: React.FC<CommentsListProps> = observer(({ onEdit, onRemove }) => {
  if (!commentsStore.filteredList.length) return null

  return (
    <div className="comments-list">
      <h3 className="comments-list__title">Комментарии</h3>
      <div className="comments-list__list">
        {commentsStore.filteredList.map((comment) => (
          <CommentsListItem onRemove={onRemove} onEdit={onEdit} key={comment.uuid} data={comment} />
        ))}
      </div>
    </div>
  )
})

export default CommentsList
