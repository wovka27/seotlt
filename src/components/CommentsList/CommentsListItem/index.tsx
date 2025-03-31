import React from 'react'

import UiImage from '@/components/UI/UiImage'
import Icon from '@/components/Icon'
import IconInfo from '@/components/Icon/IconInfo'

import { ICommentsItem } from '@/stores/comments.store'

import '@/components/CommentsList/CommentsListItem/comments-list-item.scss'

interface ICommentsListItemProps {
  data: ICommentsItem
  onEdit: (comment: ICommentsItem) => void
  onRemove: (uuid: string) => void
}

const CommentsListItem: React.FC<ICommentsListItemProps> = ({ data, onEdit, onRemove }) => {
  return (
    <div className="comments-list-item">
      <UiImage src={data.avatar_url} alt="avatar" className="comments-list-item__avatar" />
      <div className="comments-list-item-content">
        <div className="comments-list-item-content-header">
          <span className="comments-list-item-content-header__name">{data.user_name}</span>
          <div className="comments-list-item-content-header__actions">
            <IconInfo
              iconName="calendar"
              size={14}
              value={data.updated_at}
              className="comments-list-item-content-header__date"
            />
            <Icon
              name="pencil"
              size={16}
              className="comments-list-item-content-header__edit"
              onClick={() => onEdit(data)}
            />
            <p className="comments-list-item-content-header__edit" onClick={() => onRemove(data.uuid)}>
              Удалить
            </p>
          </div>
        </div>
        <p className="comments-list-item-content__text">{data.comment}</p>
      </div>
    </div>
  )
}

export default React.memo(CommentsListItem)
