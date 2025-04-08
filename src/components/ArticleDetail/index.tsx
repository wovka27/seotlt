import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate, useParams } from 'react-router'
import { Navigate } from 'react-router-dom'

import Icon from '@/components/Icon'
import IconInfo from '@/components/Icon/IconInfo'
import UpdateArticleHOC from '@/components/HOC/UpdateArticleHOC'
import DeleteArticleHOC from '@/components/HOC/DeleteArticleHOC'
import CommentsList from '@/components/CommentsList'
import CommentForm from '@/components/CommentForm'
import UiButton from '@/components/UI/UiButton'
import UiImage from '@/components/UI/UiImage'

import newsStore from '@/stores/news.store'
import commentFormStore from '@/stores/commentForm.store'

import { isValidUUID } from '@/helpers/isValidUUID'

import '@/components/ArticleDetail/article-detail.scss'

const ArticleDetail: React.FC = observer(() => {
  const { uuid } = useParams<{ uuid: string }>()
  const navigate = useNavigate()

  const { resetFormData, setActionType } = commentFormStore

  const articleData = newsStore.readItem(uuid!)

  const onBack = () => {
    resetFormData()
    setActionType('create')
    navigate(-1)
  }

  if (!uuid || !isValidUUID(uuid) || !articleData) return <Navigate to="/404" replace />

  return (
    <div className="article-detail-wrapper">
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
            <UpdateArticleHOC item={articleData}>
              {(open) => (
                <UiButton onClick={open} size="small" variant="secondary">
                  Редактировать
                </UiButton>
              )}
            </UpdateArticleHOC>
          </div>

          <div className="article-detail__meta">
            <IconInfo iconName="tag" value={articleData.category} size={24} />
            <IconInfo iconName="calendar" value={articleData.created_at} size={24} />
          </div>
        </div>

        <div className="article-detail__image-container">
          <UiImage src={articleData.imageUrl} alt={articleData.title} className="article-detail__image" />
        </div>

        <div className="article-detail__content">
          <h1 className="article-detail__title">{articleData.title}</h1>
          <h2 className="article-detail__subtitle">Описание</h2>
          <p className="article-detail__excerpt">{articleData.excerpt}</p>
        </div>
      </article>
      <CommentForm />
      <CommentsList />
    </div>
  )
})

export default ArticleDetail
