import React from 'react'
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'
import { getAdUnitId } from '@/utils/adConfig'
import { Stack } from '@/components/ui/Stacks'

export default function Footer() {
  const adUnitId = getAdUnitId('home_banner')

  return (
    <Stack centered my={'$md'}>
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
