import React, { useActionState, useDeferredValue, useState } from 'react'

import UiInput from '@/components/UI/UiInput'
import UiTextArea from '@/components/UI/UiTextArea'
import UiButton from '@/components/UI/UiButton'

import type { INewsItem } from '@/stores/news.store'

import '@/components/ArticleForm/article-form.scss'
import ImgPreview from '@/components/ImgPreview'

interface ArticleFormProps {
  initialData?: INewsItem
  onSubmit: (state: INewsItem, payload: INewsItem) => INewsItem
  onCancel?: () => void
}

const ArticleForm: React.FC<ArticleFormProps> = ({ initialData = getInitialData(), onSubmit, onCancel }) => {
  const [data, action] = useActionState<INewsItem, FormData>(
    (state, payload) => onSubmit(state, Object.fromEntries(payload) as unknown as INewsItem),
    initialData
  )
  const [srcImg, setSrcImg] = useState<string>(initialData.imageUrl)

  const src = useDeferredValue(srcImg)

  return (
    <form action={action} className="article-form">
      <ImgPreview srcImg={src} />
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

        <UiInput
          defaultValue={data.category}
          label="Категория"
          name="category"
          placeholder="Например: Technology"
          required
        />

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

const getInitialData = (): INewsItem => ({
  uuid: '',
  title: '',
  excerpt: '',
  imageUrl: '',
  category: ''
})

export default ArticleForm
