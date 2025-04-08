import { useToast } from 'vue-toast-notification'
import { format } from 'date-fns'

export function formatDate(date, formatString) {
  if (!date) return ''

  try {
    return format(new Date(date), formatString)
  } catch (error) {
    console.error('Invalid date or format:', error)
    return ''
  }
}
export function toastrMsg(message, type) {
  const $toast = useToast()
  $toast.open({
    message: message,
    type: type,
    position: 'top-right',
  })
}
export const appGuards = {
  'admin' : 'user' ,
  'manager' : 'user' ,
  'employee' : 'employee',
}
