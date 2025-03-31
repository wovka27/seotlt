import React, { useRef } from 'react'
import { observer } from 'mobx-react-lite'

import UiButton from '@/components/UI/UiButton'
import UiInput from '@/components/UI/UiInput'
import UiTextArea from '@/components/UI/UiTextArea'

import commentFormStore from '@/stores/commentForm.store'

import '@/components/CommentForm/comment-form.scss'
import { useParams } from 'react-router'
import CommentFormActionHOC from '@/components/HOC/CommentFormActionHOC'

const CommentForm: React.FC = observer(() => {
  const { uuid } = useParams<{ uuid: string }>()
  const formRef = useRef<HTMLFormElement | null>(null)

  const onChange: React.ChangeEventHandler<HTMLInputElement> & React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { name, value }
  }) => {
    commentFormStore.setFormData({ ...commentFormStore.formData, [name]: value })
  }

  return (
    <div className="comment-form">
      <h3 className="comment-form__title">
        {commentFormStore.actionType === 'create' ? 'Добавить' : 'Редактировать'} комментарий
      </h3>
      <form ref={formRef} className="comment-form-form">
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
          {commentFormStore.actionType === 'create' && (
            <CommentFormActionHOC uuid={uuid!} actionType="create">
              {(action) => (
                <UiButton onClick={action} size="small" type="submit">
                  Опубликовать
                </UiButton>
              )}
            </CommentFormActionHOC>
          )}
          {commentFormStore.actionType === 'update' && (
            <CommentFormActionHOC uuid={uuid!} actionType="update">
              {(action) => (
                <UiButton onClick={action} size="small" type="submit">
                  Сохранить
                </UiButton>
              )}
            </CommentFormActionHOC>
          )}
          <UiButton size="small" variant="secondary" onClick={commentFormStore.resetFormData}>
            Отмена
          </UiButton>
        </div>
      </form>
    </div>
  )
})

export default CommentForm
