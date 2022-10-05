import React from 'react'
import { Text } from 'react-native'

const H1 = ({ children, customStyle }) => {
  return (
    <Text className={`font-OpenSansBold text-[28px] text-white ${customStyle}`}>{children}</Text>
  )
}

const H2 = ({ children, customStyle }) => {
  return (
    <Text className={`font-OpenSansBold text-2xl text-white ${customStyle}`}>{children}</Text>
  )
}

const H3 = ({ children, customStyle }) => {
  return (
    <Text className={`font-OpenSansBold text-xl text-white ${customStyle}`}>{children}</Text>
  )
}

const H4 = ({ children, customStyle }) => {
  return (
    <Text className={`font-OpenSansBold text-base text-white ${customStyle}`}>{children}</Text>
  )
}

const H5 = ({ children, customStyle }) => {
  return (
    <Text className={`font-OpenSansBold text-sm text-white ${customStyle}`}>{children}</Text>
  )
}

const H6 = ({ children, customStyle }) => {
  return (
    <Text className={`font-OpenSansBold text-[10px] text text-white ${customStyle}`}>{children}</Text>
  )
}

export { H1, H2, H3, H4, H5, H6, }