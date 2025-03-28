import React from 'react'
import Icon from '@/components/Icon'

import '@/components/Header/header.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Icon name="newspaper" />
          <span>News</span>
        </div>
      </div>
    </header>
  )
}

export default Header
