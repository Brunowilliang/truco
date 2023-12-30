import { Text as TText, styled } from 'tamagui'

// @ts-ignore
export const Text = styled(TText, {
  fontFamily: '$medium',
  fontSize: '$h4',
  color: '$textPrimary',

  variants: {
    bold: {
      true: {
        fontFamily: '$bold',
      },
    },
    semibold: {
      true: {
        fontFamily: '$semibold',
      },
    },
    medium: {
      true: {
        fontFamily: '$medium',
      },
    },
    regular: {
      true: {
        fontFamily: '$regular',
      },
    },
    h1: {
      true: {
        fontSize: '$h1',
      },
    },
    h2: {
      true: {
        fontSize: '$h2',
      },
    },
    h3: {
      true: {
        fontSize: '$h3',
      },
    },
    h4: {
      true: {
        fontSize: '$h4',
      },
    },
    h5: {
      true: {
        fontSize: '$h5',
      },
    },
    h6: {
      true: {
        fontSize: '$h6',
      },
    },
    center: {
      true: {
        textAlign: 'center',
      },
    },
    right: {
      true: {
        textAlign: 'right',
      },
    },
    left: {
      true: {
        textAlign: 'left',
      },
    },
  } as const,
})
