import { Dimensions, FlatList, ImageBackground } from 'react-native'
import React from 'react'

import DATA from '../global/DATA'

const PromoList = () => {
  return (
    <FlatList
      className='pt-8 bg-background'
      data={DATA.promo}
      keyExtractor={item => item.id}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Card data={item} />}
    />
  )
}

const Card = ({ data }) => {
  const { width } = Dimensions.get('window');
  return (
      <ImageBackground
        source={data.image}
        resizeMode='cover'
        className='h-[178px] p-5 mx-5 mb-3 rounded-xl overflow-hidden'
        style={{ width: width - 40}}
      />
  )
}

export default PromoList