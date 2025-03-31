import React from 'react'

import UiButton from '@/components/UI/UiButton'
import UiInput from '@/components/UI/UiInput'
import UiTextArea from '@/components/UI/UiTextArea'

import { ICommentsItem } from '@/stores/comments.store'

import '@/components/CommentForm/comment-form.scss'

interface CommentFormProps {
  data: ICommentsItem
  setData: React.Dispatch<React.SetStateAction<ICommentsItem>>
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onCancel: () => void
}

const CommentForm: React.FC<CommentFormProps> = ({ data, onSubmit, onCancel, setData }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> & React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { name, value }
  }) => {
    setData((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div className="comment-form">
      <h3 className="comment-form__title">Добавить комментарий</h3>
      <form onSubmit={onSubmit} className="comment-form-form">
        <UiInput
          onChange={onChange}
          required
          value={data.user_name}
          name="user_name"
          placeholder="Введите Имя"
          label="Имя"
        />
        <UiInput
          onChange={onChange}
          required
          value={data.avatar_url}
          name="avatar_url"
          placeholder="Введите Url"
          label="Url аватарки"
        />
        <UiTextArea
          onChange={onChange}
          required
          value={data.comment}
          name="comment"
          placeholder="..."
          label="Комментарий"
          rows={3}
        />
        <div className="comment-form-form__actions">
          <UiButton size="small" type="submit">
            Опубликовать
          </UiButton>
          <UiButton size="small" variant="secondary" onClick={onCancel}>
            Отмена
          </UiButton>
        </div>
      </form>
    </div>
  )
}

export default CommentForm
