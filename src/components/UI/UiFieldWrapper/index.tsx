import React, { PropsWithChildren } from 'react'

import '@/components/UI/UiFieldWrapper/ui-field-wrapper.scss'

interface UiFieldWrapperProps {
  label?: string
  error?: string
  labelFor?: string
}

const UiFieldWrapper: React.FC<PropsWithChildren<UiFieldWrapperProps>> = ({ label, error, children, labelFor }) => {
  return (
    <div className="ui-field-wrapper">
      {label && (
        <label htmlFor={labelFor} className="ui-field-wrapper__label">
          {label}
        </label>
      )}
      {children}
      {error && <span className="ui-field-wrapper__error">{error}</span>}
    </div>
  )
}

export default UiFieldWrapper
