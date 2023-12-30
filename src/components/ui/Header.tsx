import React, { ReactNode, Children, isValidElement } from 'react'
import { Text } from './Text'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { GetProps } from 'tamagui'
import { HStack } from './Stacks'

interface HeaderProps extends GetProps<typeof HStack> {
  children: ReactNode
  noSafeArea?: boolean
}

interface HStackProps extends GetProps<typeof HStack> {}
interface TextProps extends GetProps<typeof Text> {}

const Header = ({ children, noSafeArea, ...props }: HeaderProps) => {
  const { top } = useSafeAreaInsets()
  const childrenArray = Children.toArray(children)
  const hasLeft = childrenArray.some(
    (child) => isValidElement(child) && child.type === Left,
  )
  const hasRight = childrenArray.some(
    (child) => isValidElement(child) && child.type === Right,
  )

  return (
    <HStack
      pt={noSafeArea ? '$sm' : top + 10}
      $platform-android={{ pt: top + 10 }}
      px={'$md'}
      pb={'$sm'}
      bg={'$accent'}
      jc={'space-between'}
      ai={'center'}
      {...props}
    >
      {hasLeft ? (
        childrenArray.filter(
          (child) => isValidElement(child) && child.type === Left,
        )
      ) : (
        <HStack w={'15%'} />
      )}
      {childrenArray.filter(
        (child) => isValidElement(child) && child.type === Title,
      )}
      {hasRight ? (
        childrenArray.filter(
          (child) => isValidElement(child) && child.type === Right,
        )
      ) : (
        <HStack w={'15%'} />
      )}
    </HStack>
  )
}

const Left = ({ children, ...props }: HStackProps) => (
  <HStack w={'15%'} jc={'flex-start'} {...props}>
    {children}
  </HStack>
)

const Title = ({ children, ...props }: TextProps) => (
  <Text h3 center f={1} semibold {...props}>
    {children}
  </Text>
)

const Right = ({ children, ...props }: HStackProps) => (
  <HStack w={'15%'} jc={'flex-end'} {...props}>
    {children}
  </HStack>
)

Header.Left = Left
Header.Title = Title
Header.Right = Right

export default Header
