import React, { ButtonHTMLAttributes } from 'react'
import '@/components/UI/UiButton/ui-button.scss'

interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
}

const UiButton: React.FC<UiButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  return (
    <button className={`ui-button ui-button--${variant} ui-button--${size} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default UiButton
