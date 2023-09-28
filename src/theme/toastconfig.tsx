import {
  BaseToast,
  ErrorToast,
  BaseToastProps,
} from 'react-native-toast-message'
import { Stack } from 'tamagui'
import { Text } from '@/components/ui/Text'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
    />
  ),
  error: (props: BaseToastProps) => (
    <Stack
      h={60}
      w="80%"
      ai="center"
      jc="center"
      bg={'$danger'}
      borderRadius={10}
    >
      <Text color={'white'}>{props.text1}</Text>
    </Stack>
  ),
}
