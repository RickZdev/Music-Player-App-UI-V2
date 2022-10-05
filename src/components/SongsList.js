import React from 'react'
import { Dimensions, FlatList, Image, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo';

import { H5, H6 } from './CustomHeading'
import COLORS from '../global/COLORS'
import DATA from '../global/DATA'

const SongsList = ({ data }) => {
  const { width } = Dimensions.get('window');
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      className='mt-10'
      style={{ width: width }}
      renderItem={({ item, index }) => <SongCard data={item} index={index} songs={data}/>}
    />
  )
}

const SongCard = ({ data, index, songs }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className='flex-row justify-between items-center px-5 mb-4' onPress={() => navigation.navigate('MusicPlayerScreen', { data, index, songs })}>
      <View className='space-x-4 flex-row items-center flex-1'>
        <View className='border-primary justify-center items-center rounded-2xl w-5 h-5 border-[1px]'>
          <H6 customStyle='opacity-100'>{data.id + 1}</H6>
        </View>
        <View className='w-12 h-12'>
          <Image
            source={data.artwork}
            resizeMode='cover'
            className='w-full h-full'
          />
        </View>
        <View className='flex-1 flex-row justify-between'>
          <View className='w-[80%]'>
            <H5>{data.title}</H5>
            <H6 customStyle='font-OpenSansLight'>{data.artist}</H6>
          </View>
        </View>
      </View>
      
      <Entypo name="dots-three-horizontal" size={24} color={COLORS.primary} />
    </TouchableOpacity >
  )
}

export default SongsList