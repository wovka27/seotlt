import React, { InputHTMLAttributes } from 'react'
import '@/components/UI/UiInput/ui-input.scss'
import UiFieldWrapper from '@/components/UI/UiFieldWrapper'

interface UiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const UiInput: React.FC<UiInputProps> = ({ label, error, className = '', name, id, ...props }) => {
  return (
    <UiFieldWrapper label={label} error={error} labelFor={name ?? id}>
      <input
        id={name ?? id}
        name={name}
        className={`ui-input ${error ? 'ui-input--error' : ''} ${className}`}
        {...props}
      />
    </UiFieldWrapper>
  )
}

export default UiInput
