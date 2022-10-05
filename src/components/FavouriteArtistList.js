import React from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { H3, H4, H5 } from './CustomHeading'
import COLORS from '../global/COLORS'
import DATA from '../global/DATA';

const FavouriteArtistList = ({ navigation }) => {
  return (
    <View className='bg-background pt-7'>
      <View className='flex-row justify-between px-[21.02px] pb-[10.01] items-center'>
        <H4 customStyle=''>Artists for you</H4>
        <View className='flex-row space-x-2 justify-center items-center'>
          <AntDesign name='right' size={17} color={COLORS.primary} />
        </View>
      </View>
      <FlatList
        data={DATA.artist}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <ArtistCard data={item} index={index} navigation={navigation}/>}
      />
    </View>
  )
}

const ArtistCard = ({ data, index, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ArtistScreen', data)} className='items-center pr-5 space-y-2 pb-2 pt-2' style={{ paddingLeft: index === 0 ? 20 : 0 }}>
      <View className='bg-foreground rounded-full overflow-hidden '>
        <Image 
          source={data.image}
          resizeMode='cover'
          className='w-32 h-32'
          />
      </View>
      <View>
        <H5 customStyle='text-white'>{data.singer}</H5>
      </View>
    </TouchableOpacity>
  )
}

export default FavouriteArtistList