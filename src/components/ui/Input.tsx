import React, {
  forwardRef,
  memo,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  createStyledContext,
  styled,
  withStaticProperties,
  GetProps,
  useTheme,
  Stack as TStack,
} from 'tamagui'
import {
  TextInput as RNInput,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from 'react-native'
import Icon, { IconProps } from '@/components/ui/Icon'
import { HStack, Stack } from '@/components/ui/Stacks'
import { Text } from '@/components/ui/Text'

export const TextInputContext = createStyledContext({
  isFocused: false,
  isErrored: false,
})

// @ts-ignore
export const InputFrame = styled(HStack, {
  name: 'InputFrame',
  context: TextInputContext,
  backgroundColor: '$accent',
  borderCurve: 'continuous',
  borderWidth: 1,
  borderRadius: '$lg',
  w: '$full',
  h: 56,
  px: '$xl',
  gap: '$md',
  ai: 'center',
  jc: 'space-between',
  borderColor: '$transparent',

  variants: {
    isFocused: {
      true: {
        backgroundColor: '$accent',
        borderColor: '$primary',
      },
    },
    isErrored: {
      true: {
        backgroundColor: '$accent',
        borderColor: '$danger',
      },
    },
  } as const,
})

// @ts-ignore
export const InputComponent = styled(RNInput, {
  name: 'InputComponent',
  context: TextInputContext,
  fontFamily: '$medium',
  fontSize: '$h4',
  h: '$full',
  color: '$textPrimary',
  placeholderTextColor: '$border',
  flex: 1,
  backgroundColor: '$transparent',
  borderWidth: 0,

  variants: {
    isFocused: {
      true: {
        color: '$primary',
      },
    },
    isErrored: {
      true: {
        color: '$danger',
      },
    },
  } as const,
})

const InputIcon = memo(({ name, size, weight, ...props }: IconProps) => {
  const { isFocused, isErrored } = useContext(TextInputContext.context)
  return (
    <Icon
      name={name}
      color={isErrored ? '$danger' : isFocused ? '$primary' : '$textPrimary'}
      size={size || 18}
      weight={weight || isFocused ? 'TwoTone' : 'Linear'}
      {...props}
    />
  )
})

const TextInput = withStaticProperties(InputFrame, {
  Props: TextInputContext.Provider,
  Input: InputComponent,
  Icon: InputIcon,
})

// Custom Hooks
const useInputFocus = (
  onFocusExternal?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
  onBlurExternal?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true)
      onFocusExternal?.(e)
    },
    [onFocusExternal],
  )

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false)
      onBlurExternal?.(e)
    },
    [onBlurExternal],
  )

  return { focused, handleFocus, handleBlur }
}

const useTogglePasswordVisibility = () => {
  const [showPassword, setShowPassword] = useState(true)
  const togglePasswordVisibility = useCallback(
    () => setShowPassword((prev) => !prev),
    [],
  )
  return { showPassword, togglePasswordVisibility }
}

type InputProps = GetProps<typeof InputComponent> & {
  IconLeft?: IconProps
  IconRight?: IconProps
  centered?: boolean
  isErrored?: boolean
  errorText?: string
  password?: boolean
  containerStyle?: GetProps<typeof TStack>
}

export const Input = forwardRef((props: InputProps, ref) => {
  const theme = useTheme()

  const { focused, handleFocus, handleBlur } = useInputFocus(
    props.onFocus,
    props.onBlur,
  )

  const { showPassword, togglePasswordVisibility } =
    useTogglePasswordVisibility()

  // const inputRef = useRef<GetRef<typeof InputComponent>>(null)

  const inputRef = useRef<RNInput>(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
    blur: () => {
      inputRef.current?.blur()
    },
  }))

  return (
    <Stack gap={'$sm'} {...props.containerStyle}>
      <TextInput
        isFocused={focused}
        centered={props.centered}
        onPress={() => inputRef.current?.focus()}
        isErrored={props.isErrored}
      >
        {props.IconLeft && <InputIcon {...props.IconLeft} />}
        <TextInput.Input
          {...props}
          ref={inputRef}
          secureTextEntry={props.password && showPassword}
          selectionColor={
            props.isErrored ? theme.danger.val : theme.primary.val
          }
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {props.password && (
          <Stack pressable onPress={togglePasswordVisibility}>
            <InputIcon name={showPassword ? 'Eye' : 'EyeSlash'} />
          </Stack>
        )}
        {props.IconRight && <InputIcon {...props.IconRight} />}
      </TextInput>
      {props.isErrored && (
        <Text ml={'$md'} h6 w={'$full'} left color={'$danger'}>
          {props.errorText}
        </Text>
      )}
    </Stack>
  )
})
