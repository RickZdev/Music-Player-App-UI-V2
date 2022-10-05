import { View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { H4, H5 } from './CustomHeading'
import { useNavigation } from '@react-navigation/native';

const PlayList = ({ data }) => {
  return (
    <View className='bg-background px-2 pb-7 pt-6'>
      <View className='flex-row justify-between px-[11.02px] items-center'>
        <H4 customStyle=''>Playlist for you</H4>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item, index }) => <Card data={item} index={index}/>} 
        />
    </View>
  )
}

const Card = ({ data, index }) => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  return (
    <TouchableOpacity onPress={() => navigation.navigate('PlaylistScreen', data)} className='pt-6 mr-[3px] ml-[7px]' key={index} activeOpacity={0.8}>
      <View className='bg-primary rounded-lg justify-between overflow-hidden' style={{ width: (width / 2) - 20, height: 160}}>
        <Image
          source={data.image}
          resizeMode='cover'
          className='w-full h-full'
        />
      </View>
      <View className='pl-1' style={{ width: (width / 2) - 40}}>
        <H4 customStyle='mt-2 text-slate-400 text-primary'>{data.trackName}</H4>
        <H5 customStyle='text-[11px]'>Playlist</H5>
      </View>
    </TouchableOpacity>
  )
}

export default PlayList