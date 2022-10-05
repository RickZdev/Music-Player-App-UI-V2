import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { H1, H2, H4, H5 } from '../components/CustomHeading';
import { CustomBackButton, CustomOptionButton } from '../components/CustomButton';
import PlaylistSongList from '../components/PlaylistSongList';

const PlaylistScreen = ({ navigation, route }) => {
  const data = route.params;
  const { height } = Dimensions.get('window');

  return (
    <View className='flex-1'>
      <ImageHeaderScrollView
        maxHeight={height / 2 - 80}
        minHeight={100}
        showsVerticalScrollIndicator={false}
        headerImage={data?.cover}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0}
        renderForeground={() => (
          <View className='flex-1 justify-between'>
            <View className='flex-row justify-between items-center px-8 pt-11 z-50'>
              <CustomBackButton onPress={() => navigation.goBack()} />
            </View>
            <Image
              source={require('../assets/images/overlays/header-overlay.png')}
              resizeMode='cover'
              className='w-full h-full absolute'
            />
            <View className='flex-row justify-between items-end'>
              <View className='px-5 pb-4 pt-2 flex-1'>
                <H1>{data.trackName}</H1>
                <H5 customStyle='text-xs'>Playlist Made by your Man</H5>
              </View>
              <View className='my-2 mr-5 w-32 h-32 overflow-hidden'>
                <Image
                  source={data.image}
                  resizeMode='cover'
                  className='w-full h-full rounded-lg'
                />
              </View>
            </View>
          </View>
        )}
      >
        <TriggeringView className='flex-1 px-2 pt-5 pb-[120px] bg-background'>
          <PlaylistSongList />
        </TriggeringView>
      </ImageHeaderScrollView>
    </View>
  )
}

export default PlaylistScreen