import React, { InputHTMLAttributes } from 'react'
import '@/components/UI/UiInput/ui-input.scss'

interface UiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const UiInput: React.FC<UiInputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="ui-input-wrapper">
      {label && <label className="ui-input-label">{label}</label>}
      <input className={`ui-input ${error ? 'ui-input--error' : ''} ${className}`} {...props} />
      {error && <span className="ui-input-error">{error}</span>}
    </div>
  )
}

export default UiInput
