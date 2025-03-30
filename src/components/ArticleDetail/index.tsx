import React from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate, useParams } from 'react-router'
import { Navigate } from 'react-router-dom'

import Icon from '@/components/Icon'
import IconInfo from '@/components/Icon/IconInfo'
import UpdateArticleHOC from '@/components/HOC/UpdateArticleHOC'
import DeleteArticleHOC from '@/components/HOC/DeleteArticleHOC'
import UiButton from '@/components/UI/UiButton'
import UiImage from '@/components/UI/UiImage'

import newsStore, { INewsItem } from '@/stores/news.store'

import '@/components/ArticleDetail/article-detail.scss'

const ArticleDetail: React.FC = observer(() => {
  const { uuid } = useParams<{ uuid: string }>()
  const navigate = useNavigate()
  const [data] = React.useState<INewsItem | undefined>(newsStore.readItem(uuid!))

  const onBack = () => navigate(-1)

  if (!uuid || !isValidUUID(uuid)) return <Navigate to="/404" replace />

  if (!data) return null

  return (
    <article className="article-detail">
      <div className="article-detail__header">
        <div className="article-detail__btns">
          <UiButton variant="secondary" size="small" className="article-detail__back" onClick={onBack}>
            <Icon name="arrowLeft" size={18} />
          </UiButton>
          <DeleteArticleHOC uuid={uuid} callback={onBack}>
            {(click) => (
              <UiButton onClick={click} variant="secondary" size="small">
                <Icon size={18} name="x" />
              </UiButton>
            )}
          </DeleteArticleHOC>
          <UpdateArticleHOC item={data}>
            {(open) => (
              <UiButton onClick={open} size="small" variant="secondary">
                Редактировать
              </UiButton>
            )}
          </UpdateArticleHOC>
        </div>

        <div className="article-detail__meta">
          <IconInfo iconName="tag" value={data.category} size={24} />
          <IconInfo iconName="calendar" value={data.date} size={24} />
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

const isValidUUID = (uuid: string) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(uuid)
}

export default ArticleDetail
