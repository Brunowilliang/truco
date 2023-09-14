import React from 'react'
import { Stack } from 'tamagui'
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'
import { getAdUnitId } from '@/utils/adConfig'

export default function Footer() {
  const adUnitId = getAdUnitId('home_banner')

  return (
    <Stack w="100%" jc="center" ai="center" my={10}>
      <BannerAd
        size={BannerAdSize.LARGE_BANNER}
        unitId={adUnitId}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </Stack>
  )
}
