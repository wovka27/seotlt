import React from 'react'
import { observer } from 'mobx-react-lite'

import Icon from '@/components/Icon'
import CreateNew from '@/components/CreateNew'
import UiButton from '@/components/UI/UiButton'

import '@/components/NewsList/NewsEmptyList/news-empty-list.scss'

const NewsEmptyList: React.FC = observer(() => {
  return (
    <div className="news-empty-list">
      <div className="news-empty-list__container">
        <div className="news-empty-list__icon">
          <Icon name="smile" size="100%" />
        </div>
        <p className="news-empty-list__text">Список новостей пуст</p>
        <CreateNew>{(open) => <UiButton onClick={open}>Создать</UiButton>}</CreateNew>
      </div>
    </div>
  )
})

export default NewsEmptyList
