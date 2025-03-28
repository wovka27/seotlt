import React, { TextareaHTMLAttributes } from 'react'
import '@/components/UI/UiTextArea/ui-textarea.scss'

interface UiTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const UiTextArea: React.FC<UiTextAreaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="ui-textarea-wrapper">
      {label && <label className="ui-textarea-label">{label}</label>}
      <textarea className={`ui-textarea ${error ? 'ui-textarea--error' : ''} ${className}`} {...props} />
      {error && <span className="ui-textarea-error">{error}</span>}
    </div>
  )
}

export default UiTextArea
