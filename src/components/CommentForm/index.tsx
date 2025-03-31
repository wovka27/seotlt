import React from 'react'
import { observer } from 'mobx-react-lite'

import UiButton from '@/components/UI/UiButton'
import UiInput from '@/components/UI/UiInput'
import UiTextArea from '@/components/UI/UiTextArea'

import commentFormStore from '@/stores/commentForm.store'

import '@/components/CommentForm/comment-form.scss'
import { useParams } from 'react-router'

const CommentForm: React.FC = observer(() => {
  const { uuid } = useParams<{ uuid: string }>()
  const onChange: React.ChangeEventHandler<HTMLInputElement> & React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { name, value }
  }) => {
    commentFormStore.setFormData({ ...commentFormStore.formData, [name]: value })
  }

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    commentFormStore.submit(uuid!)
  }

  return (
    <div className="comment-form">
      <h3 className="comment-form__title">Добавить комментарий</h3>
      <form onSubmit={submit} className="comment-form-form">
        <UiInput
          onChange={onChange}
          required
          value={commentFormStore.formData.user_name}
          name="user_name"
          placeholder="Введите Имя"
          label="Имя"
        />
        <UiInput
          onChange={onChange}
          required
          value={commentFormStore.formData.avatar_url}
          name="avatar_url"
          placeholder="Введите Url"
          label="Url аватарки"
        />
        <UiTextArea
          onChange={onChange}
          required
          value={commentFormStore.formData.comment}
          name="comment"
          placeholder="..."
          label="Комментарий"
          rows={3}
        />
        <div className="comment-form-form__actions">
          <UiButton size="small" type="submit">
            Опубликовать
          </UiButton>
          <UiButton size="small" variant="secondary" onClick={commentFormStore.resetFormData}>
            Отмена
          </UiButton>
        </div>
      </form>
    </div>
  )
})

export default CommentForm
