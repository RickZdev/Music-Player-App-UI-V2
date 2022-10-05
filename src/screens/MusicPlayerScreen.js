import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider'
import TrackPlayer, { 
  Event, 
  RepeatMode, 
  State, 
  usePlaybackState, 
  useProgress, 
  useTrackPlayerEvents 
} from 'react-native-track-player';

import { CustomBackButton, CustomOptionButton } from '../components/CustomButton'
import { H3, H5 } from '../components/CustomHeading'
import COLORS from '../global/COLORS'

const MusicPlayerScreen = ({ route, navigation }) => {
  const index = route.params.index;
  const songs = route.params.songs;
  const [track, setTrack] = useState({});
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const currentTime = new Date(progress.position * 1000).toISOString().substring(14, 19)
  const currentDuration = new Date((progress.duration - progress.position) * 1000).toISOString().substring(14, 19)

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if(event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const currentTrack = await TrackPlayer.getTrack(event.nextTrack);
      setTrack(currentTrack);
    }
  })

  const addSong = async() => {
    try {
      await TrackPlayer.reset()
      await TrackPlayer.add(songs);
    } catch(err) {
      console.log(err.message);
    }
  }

  const togglePlayback = async(playbackState) => {
      const currentTrack = await TrackPlayer.getCurrentTrack();
      if(currentTrack !== null) {
        playbackState === 'playing' ? await TrackPlayer.pause() : await TrackPlayer.play();
      }
  }

  const skipTo = async(trackId) => {
    const getCurrentTrack = await TrackPlayer.getCurrentTrack();
    if(getCurrentTrack !== trackId) {
      await TrackPlayer.skip(trackId)
     }
    await TrackPlayer.play()
  }

  useEffect(() => {
    addSong();
    skipTo(index);
    console.log(track, 'SONGSSS!!');
  }, [])

  useEffect(() => {
    // console.log(playbackState);
    // console.log(track)
  }, [playbackState])

  return (
      <View className='flex-1'>

        {/* header nav */}
        <View className='flex-row justify-between items-center px-8 pt-11 z-50'>
          <CustomBackButton onPress={() => navigation.goBack()} />
          <CustomOptionButton />
        </View>

        {/* background */}
        <ImageBackground
          source={track.albumCover}
          resizeMode='cover'
          className='w-full h-full absolute -z-40'
        />

        <ImageBackground
          source={require('../assets/images/overlays/music-player-overlay.png')}
          resizeMode='cover'
          className='w-full h-full absolute z-10'
        />

        {/* middle section */}
        <View className='flex-1 justify-end items-center z-20'>
          {/* image */}
          <View className='w-48 h-48'>
            <Image
              source={track.artwork}
              resizeMode='cover'
              className='w-full h-full rounded-3xl'
            />
          </View>

          {/* description */}
          <View className='mt-20 justify-center items-center'>
            <H3>{track.title}</H3>
            <H5 customStyle='opacity-50 mt-[10px]'>{track.artist}</H5>
          </View>
        </View>

        {/* bottom section */}
        <View className='z-40 px-4 pb-10'>
          <View className='mt-12'>
            <Slider
              value={progress.position}
              minimumValue={0}
              maximumValue={progress.duration}
              thumbTintColor={COLORS.primary}
              minimumTrackTintColor={COLORS.primary}
              maximumTrackTintColor={COLORS.white}
              onSlidingComplete={async (value) => {
                await TrackPlayer.seekTo(value);
              }}
            />

            {/* time */}
            <View className='flex-row justify-between items-center px-4'>
              <H5 customStyle='opacity-50'>{currentTime}</H5>
              <H5 customStyle='opacity-50'>{currentDuration}</H5>
            </View>
          </View>

          {/* controls */}
          <View className='flex-row justify-between items-center px-4 mt-4'>
            <FontAwesome name="sliders" size={24} color={COLORS.primary} />
            
            {/* middle buttons */}
            <View className='flex-row justify-center items-center space-x-7'>
            {/* previous */}
              <TouchableOpacity onPress={async() => await TrackPlayer.skipToPrevious()}>
                <MaterialIcons name="skip-previous" size={35} color={COLORS.primary} />
              </TouchableOpacity>
              {/* play or pause */}
              <TouchableOpacity className='w-[69px] h-[69px] rounded-full bg-primary items-center justify-center' onPress={() => togglePlayback(playbackState)}>
                <Ionicons name={playbackState === State.Playing ? 'pause' : 'play'} size={24} color={COLORS.background} />
              </TouchableOpacity>
              {/* next */}
              <TouchableOpacity onPress={async() => await TrackPlayer.skipToNext()}>
                <MaterialIcons name="skip-next" size={35} color={COLORS.primary} />
              </TouchableOpacity>
            </View>

            {/* options */}
            <Entypo name="dots-three-horizontal" size={24} color={COLORS.primary} />
          </View>
        </View>
      </View>
  )
}

export default MusicPlayerScreen