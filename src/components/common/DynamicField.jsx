import styled from 'styled-components'

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.$fullWidth && 'grid-column: 1 / -1;'}
`

const FieldLabel = styled.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`

const RequiredMark = styled.span`
  color: #ef4444;
  margin-left: 2px;
`

const FieldInput = styled.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &[type='number'] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

const FieldTextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`

const FieldSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const ErrorMsg = styled.span`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
`

/**
 * DynamicField
 *
 * Renderiza un campo de formulario según la configuración del subtipo de negocio.
 * Se usa en formularios de clientes, citas u otros donde los campos varían por subtipo.
 *
 * @param {Object}   field      Configuración del campo desde businessConfig.js
 *                              { id, label, type, options, placeholder, required }
 * @param {Function} register   Función register de react-hook-form
 * @param {Object}   errors     Objeto de errores de react-hook-form
 */
const DynamicField = ({ field, register, errors }) => {
  const isFullWidth = field.type === 'textarea'
  const error = errors?.[field.id]

  const renderInput = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <FieldTextArea
            placeholder={field.placeholder || ''}
            {...register(field.id)}
          />
        )

      case 'select':
        return (
          <FieldSelect {...register(field.id)}>
            <option value="">-- Seleccionar --</option>
            {(field.options || []).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </FieldSelect>
        )

      case 'date':
        return (
          <FieldInput
            type="date"
            {...register(field.id)}
          />
        )

      case 'number':
        return (
          <FieldInput
            type="number"
            placeholder={field.placeholder || ''}
            min="0"
            {...register(field.id)}
          />
        )

      default:
        return (
          <FieldInput
            type="text"
            placeholder={field.placeholder || ''}
            {...register(field.id)}
          />
        )
    }
  }

  return (
    <FieldGroup $fullWidth={isFullWidth}>
      <FieldLabel>
        {field.label}
        {field.required && <RequiredMark>*</RequiredMark>}
      </FieldLabel>
      {renderInput()}
      {error && <ErrorMsg>{error.message}</ErrorMsg>}
    </FieldGroup>
  )
}

export default DynamicField
