import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'

import PromoList from '../components/PromoList'
import FavoriteSongList from '../components/FavoriteSongList'
import FavouriteArtistList from '../components/FavouriteArtistList'
import TrackPlayer, { Capability } from 'react-native-track-player'
import NavigationButtonList from '../components/NavigationButtonList'
import PlayList from '../components/PlayList'
import DATA from '../global/DATA'

const HomeTab = ({ navigation }) => {
  useEffect(() => {
    const setupPlayer = async() => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SkipToNext,
          Capability.SkipToPrevious
        ]
      })
    }

    setupPlayer();
  }, [])
  return (
    <ScrollView className='bg-foreground'>
      <View className='flex-1 bg-foreground'>
        <PromoList />
        <NavigationButtonList />
        <FavoriteSongList />
        <FavouriteArtistList navigation={navigation} />
        <PlayList data={DATA.playlist}/>
      </View>
    </ScrollView>
  )
}

export default HomeTab