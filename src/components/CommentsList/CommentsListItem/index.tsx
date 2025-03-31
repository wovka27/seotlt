import React from 'react'
import { observer } from 'mobx-react-lite'

import UiImage from '@/components/UI/UiImage'
import Icon from '@/components/Icon'
import IconInfo from '@/components/Icon/IconInfo'

import commentsStore, { ICommentsItem } from '@/stores/comments.store'
import commentFormStore from '@/stores/commentForm.store'

import '@/components/CommentsList/CommentsListItem/comments-list-item.scss'

interface ICommentsListItemProps {
  data: ICommentsItem
}

const CommentsListItem: React.FC<ICommentsListItemProps> = observer(({ data }) => {
  const edit = () => {
    commentFormStore.setActionType('update')
    commentFormStore.setFormData(data)
  }

  const remove = () => {
    commentsStore.deleteItem(data.uuid)
    commentFormStore.resetFormData()
  }

  return (
    <div className="comments-list-item">
      <UiImage key={data.avatar_url} src={data.avatar_url} alt="avatar" className="comments-list-item__avatar" />
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
            <Icon name="pencil" size={16} className="comments-list-item-content-header__edit" onClick={edit} />
            <p className="comments-list-item-content-header__edit" onClick={remove}>
              Удалить
            </p>
          </div>
        </div>
        <p className="comments-list-item-content__text">{data.comment}</p>
      </div>
    </div>
  )
})

export default CommentsListItem
