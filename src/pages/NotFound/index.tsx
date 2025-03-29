import React from 'react'

import '@/pages/NotFound/not-found.scss'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Упс! Кажется, страница, которую вы ищете, потерялась в цифровом пространстве.</p>
        <Link to="/" className="not-found__button">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          на главную
        </Link>
      </div>
    </div>
  )
}

export default NotFound
