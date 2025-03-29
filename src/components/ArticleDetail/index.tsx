import React, { useEffect, useMemo, useState } from 'react'
import '@/components/ArticleDetail/article-detail.scss'
import Icon from '@/components/Icon'
import UiButton from '@/components/UI/UiButton'
import { observer } from 'mobx-react-lite'
import { useNavigate, useParams } from 'react-router'
import newsStore, { INewsItem } from '@/stores/news.store'
import UpdateNew from '@/components/UpdateNew'
import UiImage from '@/components/UI/UiImage'

export const ArticleDetail: React.FC = observer(() => {
  const { uuid } = useParams<{ uuid: string }>()
  const navigate = useNavigate()
  const [data, setData] = useState<INewsItem | null>(null)

  const formattedDate = useMemo(
    () =>
      data
        ? new Date(data.date).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })
        : '',
    [data]
  )

  const onBack = () => navigate(-1)

  const remove = () => {
    newsStore.deleteItem(uuid!)
    onBack()
  }

  useEffect(() => {
    const res = newsStore.readItem(uuid!)
    if (res) setData(res)
  }, [uuid])

  if (!data) return null

  return (
    <article className="article-detail">
      <div className="article-detail__header">
        <div className="article-detail__btns">
          <UiButton variant="secondary" size="small" className="article-detail__back" onClick={onBack}>
            <Icon name="arrowLeft" size={18} />
          </UiButton>
          <UiButton variant="secondary" size="small" onClick={remove}>
            <Icon name="x" size={18} />
          </UiButton>
          <UpdateNew item={data} size="small" />
        </div>

        <div className="article-detail__meta">
          <div className="article-detail__meta-item">
            <Icon name="calendar" size={24} />
            <span>{formattedDate}</span>
          </div>
          <div className="article-detail__meta-item">
            <Icon name="tag" size={18} />
            <span>{data.category}</span>
          </div>
        </div>
      </div>

      <div className="article-detail__image-container">
        <UiImage src={data.imageUrl} alt={data.title} className="article-detail__image" />
      </div>

      <div className="article-detail__content">
        <h1 className="article-detail__title">{data.title}</h1>
        <h2 className="article-detail__subtitle">Описание</h2>
        <p className="article-detail__excerpt">{data.excerpt}</p>
      </div>
    </article>
  )
})
