import React, { useActionState, useState } from 'react'

import UiInput from '@/components/UI/UiInput'
import UiTextArea from '@/components/UI/UiTextArea'
import UiButton from '@/components/UI/UiButton'

import { INewsItem } from '@/stores/news.store'

import '@/components/ArticleForm/article-form.scss'
import ImgPreview from '@/components/ImgPreview'

interface ArticleFormProps {
  initialData?: INewsItem
  onSubmit: (state: INewsItem, payload: INewsItem) => INewsItem
  onCancel?: () => void
}

const ArticleForm: React.FC<ArticleFormProps> = ({ initialData = getInitialData(), onSubmit, onCancel }) => {
  const [data, action] = useActionState<INewsItem, FormData>(
    (state, payload) => onSubmit(state, Object.fromEntries(payload) as Record<keyof INewsItem, string>),
    initialData
  )
  const [srcImg, setSrcImg] = useState<string>(initialData.imageUrl)

  return (
    <form action={action} className="article-form">
      <ImgPreview srcImg={srcImg} />
      <div className="article-form__fields">
        <UiInput
          defaultValue={data.title}
          label="Заголовок"
          name="title"
          placeholder="Введите заголовок статьи"
          required
        />

        <UiTextArea
          defaultValue={data.excerpt}
          label="Краткое описание"
          name="excerpt"
          placeholder="Введите краткое описание статьи"
          required
        />

        <UiInput
          defaultValue={data.imageUrl}
          onChange={(event) => setSrcImg(event.target.value)}
          label="URL изображения"
          name="imageUrl"
          placeholder="Введите URL изображения"
          required
        />

        <div className="article-form__row">
          <UiInput defaultValue={data.date} label="Дата" type="date" name="date" required />

          <UiInput
            defaultValue={data.category}
            label="Категория"
            name="category"
            placeholder="Например: Technology"
            required
          />
        </div>

        <div className="article-form__actions">
          <UiButton type="button" variant="secondary" onClick={onCancel}>
            Отмена
          </UiButton>
          <UiButton type="submit">{initialData ? 'Сохранить' : 'Создать'}</UiButton>
        </div>
      </div>
    </form>
  )
}

const getInitialData = () => ({
  uuid: '',
  title: '',
  excerpt: '',
  imageUrl: '',
  date: '',
  category: ''
})

export default ArticleForm
