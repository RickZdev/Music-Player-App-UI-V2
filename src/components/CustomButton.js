import { TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const CustomBackButton = ({ onPress }) => {
  return (
    <TouchableOpacity className='rounded-[20px] bg-background w-7 h-7 justify-center items-center' onPress={onPress}>
      <Feather name={"arrow-left"} size={18} color="white" />
    </TouchableOpacity>
  )
}

const CustomOptionButton = ({ onPress }) => {
  return (
    <TouchableOpacity className='bg-background rounded-full w-7 h-7 justify-center items-center' onPress={onPress}>
      <Feather name='heart' size={18} color="white" />
    </TouchableOpacity>
  )
}

const CustomCloseButton = ({ onPress }) => {
  return (
    <TouchableOpacity className='rounded-[20px] bg-background w-7 h-7 justify-center items-center' onPress={onPress}>
      <Feather name={"arrow-down"} size={18} color="white" />
    </TouchableOpacity>
  )
}

const CustomOpenButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={{ elevation: 7}} className='w-7 h-7 absolute z-50 bottom-3 items-center self-center justify-center rounded-2xl bg-background' onPress={onPress}>
      <Feather name={"arrow-up"} size={18} color="white" />
    </TouchableOpacity>
  )
}

export { CustomCloseButton,  CustomOpenButton, CustomBackButton, CustomOptionButton }