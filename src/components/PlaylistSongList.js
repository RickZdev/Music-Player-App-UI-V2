import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import DATA from '../global/DATA'
import Feather from 'react-native-vector-icons/Feather';
import { H4, H5 } from './CustomHeading'
import COLORS from '../global/COLORS';
import { useNavigation } from '@react-navigation/native';

const PlaylistSongList = () => {
  return (
    <FlatList
      data={DATA.artist[0].allSongs}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <H4 customStyle={'mb-5'}>Featuring</H4>}
      renderItem={({ item, index }) => <Card data={item} index={index}/>}
    />
  )
}

const Card = ({ data, index }) => {
  const navigation = useNavigation();
  const songs = DATA.artist[0].allSongs;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MusicPlayerScreen', { data, index, songs })} className='w-full h-20 bg-foreground mb-4 rounded-lg overflow-hidden flex-row space-x-4 pr-5'>
      
      {/* image */}
      <View className='w-20 h-full'>
        <Image
          source={data.artwork}
          resizeMode='cover'
          className='w-full h-full'
        />
      </View>

      {/* details */}
      <View className='justify-center items-start flex-1'>
        <H5>{data.title}</H5>
        <H5 customStyle='text-xs text-slate-400'>{data.artist}</H5>
      </View>

      {/* control */}
        <View className='flex-row justify-center items-center space-x-3'>
        <Feather name='heart' size={27} color={COLORS.primary}/>
        <Feather name='minus-circle' size={27} color={COLORS.primary}/>
        <Feather name='more-vertical' size={27} color={COLORS.primary}/>
      </View>

    </TouchableOpacity>
  )
}

export default PlaylistSongList