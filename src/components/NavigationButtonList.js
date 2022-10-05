import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../global/COLORS'

const NavigationButtonList = () => {
  return (
    <View className='bg-background flex-row justify-between px-5 pt-5 pb-3'>

      {/* radio */}
      <TouchableOpacity className='items-center space-y-2'>
        <MaterialIcons name='radio' size={22} color={COLORS.primary}/>
        <Text className='font-OpenSansBold text-white text-xs'>Your FM</Text>
      </TouchableOpacity>

      {/* artists */}
      <TouchableOpacity className='items-center space-y-2'>
        <FontAwesome5 name='user-astronaut' size={22} color={COLORS.primary}/>
        <Text className='font-OpenSansBold text-white text-xs'>Artists</Text>
      </TouchableOpacity>

      {/* playlist */}
      <TouchableOpacity className='items-center space-y-2'>
        <MaterialCommunityIcons name='playlist-music' size={22} color={COLORS.primary}/>
        <Text className='font-OpenSansBold text-white text-xs'>Playlists</Text>
      </TouchableOpacity>
      
      {/* running */}
      <TouchableOpacity className='items-center space-y-2'>
        <FontAwesome5 name='running' size={22} color={COLORS.primary}/>
        <Text className='font-OpenSansBold text-white text-xs'>Running</Text>
      </TouchableOpacity>

      
      {/* skins */}
      <TouchableOpacity className='items-center space-y-2'>
        <AntDesign name='skin' size={22} color={COLORS.primary}/>
        <Text className='font-OpenSansBold text-white text-xs'>Skins</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavigationButtonList