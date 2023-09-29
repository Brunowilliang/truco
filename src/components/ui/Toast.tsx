import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

type ToastType = 'info' | 'success' | 'error'

interface ShowToastOptions {
  message: string
  type?: ToastType
}

export const useToast = () => {
  const { top } = useSafeAreaInsets()
  const showToast = ({ message, type = 'info' }: ShowToastOptions) => {
    Toast.show({
      type,
      text1: message,
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: top + 10,
    })
  }

  return { showToast }
}
