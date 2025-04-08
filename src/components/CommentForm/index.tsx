import React, { useEffect, useRef } from 'react'
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
  const formRef = useRef<HTMLDivElement | null>(null)

  const { actionType, setFormData, formData, resetFormData } = commentFormStore

  const onChange: React.ChangeEventHandler<HTMLInputElement> & React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { name, value }
  }) => {
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    if (actionType === 'update') formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [actionType])

  return (
    <div ref={formRef} className="comment-form">
      <h3 className="comment-form__title">{actionType === 'create' ? 'Добавить' : 'Редактировать'} комментарий</h3>
      <form className="comment-form-form">
        <UiInput
          onChange={onChange}
          required
          value={formData.user_name}
          name="user_name"
          placeholder="Введите Имя"
          label="Имя"
        />
        <UiInput
          onChange={onChange}
          required
          value={formData.avatar_url}
          name="avatar_url"
          placeholder="Введите Url"
          label="Url аватарки"
        />
        <UiTextArea
          onChange={onChange}
          required
          value={formData.comment}
          name="comment"
          placeholder="..."
          label="Комментарий"
          rows={3}
        />
        <div className="comment-form-form__actions">
          <CommentFormActionHOC uuid={uuid!} actionType={actionType}>
            {(action) => (
              <UiButton onClick={action} size="small" type="submit">
                {textActionTypeBtnMap[actionType]}
              </UiButton>
            )}
          </CommentFormActionHOC>
          <UiButton size="small" variant="secondary" onClick={resetFormData}>
            Отмена
          </UiButton>
        </div>
      </form>
    </div>
  )
})

const textActionTypeBtnMap = { create: 'Опубликовать', update: 'Сохранить' }

export default CommentForm
