import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({text, styles, leading, onPress, dark}) => {
  return (
    <TouchableOpacity style = {tw`mt-4 rounded-2 bg-green-200 w-full p-4 py-5 flex flex-row justify-center ${styles}`} onPress = {onPress}>
      {leading && leading}
      <Text style = {tw`${dark ? "text-white" : "text-gray-600"} ${leading ? "ml-4" : ""} font-bold`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton