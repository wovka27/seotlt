import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import Icon from '@/components/Icon'

import modalStore from '@/stores/modal.store'

import '@/components/UI/UiModal/ui-modal.scss'

const UiModal: React.FC = observer(() => {
  const stop: React.MouseEventHandler<HTMLDivElement> & React.TouchEventHandler<HTMLDivElement> = (e) =>
    e.stopPropagation()

  useEffect(() => {
    if (modalStore.component) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modalStore.component])

  if (!modalStore.component) return null

  return (
    <div className="ui-modal-overlay" onMouseDown={modalStore.close} onTouchStart={modalStore.close}>
      <div className="ui-modal" onMouseDown={stop} onTouchStart={stop}>
        <div className="ui-modal__header">
          <h2 className="ui-modal-title">{modalStore.title}</h2>
          <button className="ui-modal-close" onClick={modalStore.close}>
            <Icon name="x" size={24} />
          </button>
        </div>
        <div className="ui-modal-content">{modalStore.component}</div>
      </div>
    </div>
  )
})

export default UiModal
