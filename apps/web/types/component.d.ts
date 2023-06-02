export interface BaseButtonProps {
  class?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  link?: string
  size?: 'small' | 'medium' | 'large'
}

export interface BaseButtonEmits {
  (e: 'click'): void
}

export interface BaseInputProps {
  label?: string
  preIcon?: string
  sufIcon?: string
  name: string
  modelValue?: any
  placeholder?: string
}
