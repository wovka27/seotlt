import React from 'react'

import '@/pages/NotFound/not-found.scss'
import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__icon">
          <Icon name="sad_smile" size="100%" />
        </div>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Упс! Кажется, страница, которую вы ищете, потерялась в цифровом пространстве.</p>
        <Link to="/" className="not-found__button">
          <Icon name="arrowLeft" />
          на главную
        </Link>
      </div>
    </div>
  )
}

export default NotFound
