import React from 'react'
import { Stack } from 'tamagui'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { Platform } from 'react-native';

export default function Footer() {
  const adUnitId = __DEV__ ? TestIds.BANNER : Platform.OS === 'ios' ? "ca-app-pub-9513215669385884/4610479298" : "ca-app-pub-9513215669385884/4993622670";

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
