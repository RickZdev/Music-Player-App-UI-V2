import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { H4, H5, H6 } from './CustomHeading'
import DATA from '../global/DATA'
import AntDesign from 'react-native-vector-icons/AntDesign'
import COLORS from '../global/COLORS'

const FavoriteSongList = () => {
  return (
    <View className='bg-background pt-[14px]'>
      <View>
        <View className='flex-row justify-between px-[21.02px] pb-[10.01] items-center'>
          <H4 customStyle=''>Made for you</H4>
          <View className='flex-row space-x-2 justify-center items-center'>
            <AntDesign name='right' size={17} color={COLORS.primary} />
          </View>
        </View>
        <FlatList
          data={DATA.favoriteSong}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <Card data={item} index={index} />}
        />
      </View>
    </View>
  )
}

const Card = ({ data, index }) => {
  return (
    <TouchableOpacity className='pr-[9.64px] space-y-2' style={{ marginLeft: index === 0 ? 15 : 0 }}>
      <Image
        source={data.songImage}
        resizeMode='cover'
        className='w-32 h-32  rounded-2xl'
      />

      <View className='justify-center items-center space-y-2'>
        <H5 customStyle='mb-1'>{data.songTitle}</H5>
        <H6 customStyle='font-OpenSansBold-Light'>{data.singer}</H6>
      </View>
    </TouchableOpacity >
  )
}

export default FavoriteSongList
