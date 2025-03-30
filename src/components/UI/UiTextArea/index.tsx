import React, { TextareaHTMLAttributes } from 'react'
import '@/components/UI/UiTextArea/ui-textarea.scss'
import UiFieldWrapper from '@/components/UI/UiFieldWrapper'

interface UiTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const UiTextArea: React.FC<UiTextAreaProps> = ({ label, error, className = '', name, id, ...props }) => {
  return (
    <UiFieldWrapper labelFor={name ?? id} label={label} error={error}>
      <textarea
        id={name ?? id}
        name={name}
        className={`ui-textarea ${error ? 'ui-textarea--error' : ''} ${className}`}
        {...props}
      />
    </UiFieldWrapper>
  )
}

export default UiTextArea
