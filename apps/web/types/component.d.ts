export interface BaseButtonProps {
  class?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  link?: string
}

export interface BaseButtonEmits {
  (e: 'click'): void
}
