import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import tw from 'twrnc'
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from '../../components/CustomButton';
const Profile = ({navigation}) => {
  return (
    <View style = {tw`w-full h-full bg-white flex flex-col items-center text-gray-800`}>
      <SafeAreaView></SafeAreaView>
      <View style = {tw`absolute w-full h-60 bg-[#D1EDBF]`}></View>
      <TouchableOpacity style = {tw`w-full py-8 px-4`} onPress={()=>navigation.goBack()}>
        <Feather name = "chevron-left" size = {30} ></Feather>
      </TouchableOpacity>
      
      <View style = {tw`w-50 h-50 bg-red-100 rounded-full border-8 border-white`}></View>
      <Text style = {tw`text-4xl font-bold py-2`}>Jennifer Chen</Text>
      <View style = {tw`flex flex-row mb-8`}>
        <CustomButton text = {"Add Friend"} leading = {<Feather name= "user-plus" size={24} color="white"></Feather>} styles = {"bg-[#F27373] w-auto"} dark = {true}></CustomButton>
        <CustomButton leading = {<Feather name= "message-circle" size={24} color="white"></Feather>} styles = {"ml-2 bg-[#D1EDBF] w-auto"}></CustomButton>
      </View>
      <View style= {tw`w-full px-8 flex flex-col items-start`}>
        <Text style={tw`text-3xl font-bold`}>About</Text>
        <View style = {tw`border-t-4 border-black`}></View>
      </View>
    </View>
  )
}

export default Profile