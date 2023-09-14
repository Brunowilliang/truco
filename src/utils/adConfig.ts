import { TestIds } from 'react-native-google-mobile-ads'
import { Platform } from 'react-native'

export type AdType = 'home_Intersticial' | 'winner_Intersticial' | 'home_banner'

const testAdIds: Record<AdType, string> = {
  home_Intersticial: TestIds.INTERSTITIAL,
  winner_Intersticial: TestIds.INTERSTITIAL,
  home_banner: TestIds.BANNER,
}

const adIds = {
  home_Intersticial: {
    ios: 'ca-app-pub-9513215669385884/3288275875',
    android: 'ca-app-pub-9513215669385884/4195546323',
  },
  winner_Intersticial: {
    ios: 'ca-app-pub-9513215669385884/8177640471',
    android: 'ca-app-pub-9513215669385884/6672987119',
  },
  home_banner: {
    ios: 'ca-app-pub-9513215669385884/4610479298',
    android: 'ca-app-pub-9513215669385884/4993622670',
  },
}

export const getAdUnitId = (adType: AdType): string => {
  if (__DEV__) {
    return testAdIds[adType]
  }

  const platform = Platform.OS as 'ios' | 'android'
  return adIds[adType][platform]
}
