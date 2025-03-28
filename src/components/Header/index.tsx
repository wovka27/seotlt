import React from 'react'
import Icon from '@/components/Icon'
import CreateNew from '@/components/CreateNew'

import '@/components/Header/header.scss'
import { useParams } from 'react-router'

const Header: React.FC = () => {
  const { uuid } = useParams()
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Icon name="newspaper" />
          <span>News</span>
        </div>
        {!uuid && <CreateNew />}
      </div>
    </header>
  )
}

export default Header
