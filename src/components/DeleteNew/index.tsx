import React from 'react'

import Icon from '@/components/Icon'
import UiButton from '@/components/UI/UiButton'

import newsStore from '@/stores/news.store'
import { observer } from 'mobx-react-lite'

interface IDeleteNewProps {
  uuid: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'outline'
  iconSize?: number
  callback?: () => void
  text?: string
}

const DeleteNew: React.FC<IDeleteNewProps> = observer(
  ({ uuid, size = 'small', variant = 'secondary', iconSize = 15, callback, text }) => {
    const click = () => {
      newsStore.deleteItem(uuid)
      callback?.()
    }

    return (
      <UiButton size={size} variant={variant} onClick={click}>
        <Icon name="x" size={iconSize} />
        {text}
      </UiButton>
    )
  }
)

export default DeleteNew
