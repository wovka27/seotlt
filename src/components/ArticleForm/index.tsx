import React, { useState } from 'react'

import UiInput from '@/components/UI/UiInput'
import UiTextArea from '@/components/UI/UiTextArea'
import UiButton from '@/components/UI/UiButton'
import UiImage from '@/components/UI/UiImage'

import { INewsItem } from '@/stores/news.store'

import { generateUUID } from '@/helpers/generateUUID'
import { getLocationDate } from '@/helpers/getLocationDate'

import '@/components/ArticleForm/article-form.scss'

interface ArticleFormProps {
  initialData?: INewsItem
  onSubmit: (data: INewsItem) => void
  onCancel?: () => void
}

const ArticleForm: React.FC<ArticleFormProps> = ({ initialData = getInitialData(), onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<INewsItem>(initialData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ ...formData, date: getLocationDate(new Date(formData.date)) })
    setFormData(getInitialData())
  }

  const handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="article-form">
      <div className="article-form__preview">
        {formData.imageUrl && <UiImage src={formData.imageUrl} alt="Preview" className="article-form__image" />}
      </div>

      <div className="article-form__fields">
        <UiInput
          label="Заголовок"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Введите заголовок статьи"
          required
        />

        <UiTextArea
          label="Краткое описание"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          placeholder="Введите краткое описание статьи"
          required
        />

        <UiInput
          label="URL изображения"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Введите URL изображения"
          required
        />

        <div className="article-form__row">
          <UiInput label="Дата" type="date" name="date" value={formData.date} onChange={handleChange} required />

          <UiInput
            label="Категория"
            name="category"
            value={formData.category}
            onChange={handleChange}
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
  uuid: generateUUID(),
  title: '',
  excerpt: '',
  imageUrl: '',
  date: '',
  category: ''
})

export default ArticleForm
