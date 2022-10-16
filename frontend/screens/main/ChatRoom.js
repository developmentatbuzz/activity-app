import { View, Text, TouchableOpacity, ScrollView, FlatList, TextInput} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, {useState, useRef} from 'react'
import tw from 'twrnc'
import { Feather } from "@expo/vector-icons"
import CustomButton from '../../components/CustomButton'


const userId = 1;
const ChatRoom = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const flatlistRef = useRef();
  const sendMessage = () => {
    if(message == ""){
      return;
    }
    setMessages([...messages, {msg:message, user: 1}]);
    setMessage("");
    flatlistRef.current.scrollToEnd({animating: true});
  }
  
  return (
    
    <View style = {tw`w-full h-full bg-white flex flex-col items-center text-gray-800 bg-[#FAF4F2]`}>
      <SafeAreaView></SafeAreaView>
      <View style = {tw`w-full flex flex-row items-center py-4 border-b-2 border-gray-200`}>
        <TouchableOpacity style = {tw`px-4`} onPress={()=>navigation.goBack()}>
          <Feather name = "chevron-left" size = {30} ></Feather>
        </TouchableOpacity>
        <View style = {tw`w-12 h-12 rounded-full bg-red-200 mr-4`}></View>
        <Text style = {tw`text-2xl font-bold text-gray-600`}>Hello</Text>
      </View>
      <FlatList
        ref={flatlistRef}
        style = {tw`w-full grow`}
        ListHeaderComponent={
          <View>
            <Text style={tw`text-gray-300 mt-4 font-bold text-center py-2`}>
              Chatting with Hello, schedule a time to meet!
            </Text>
          </View>
        } 
        data = {messages}
        renderItem={({ item }) => (
          <View style = {tw`w-full flex flex-row ${item.user === userId ? "justify-end":"justify-start"} my-1 px-2`}>
            <View style = {tw`bg-[#D1EDBF] p-4 rounded-xl ${item.user === userId ? "rounded-br-none":"rounded-bl-none"}`}>
                <Text>{item.msg}</Text>
            </View>
            
          </View>
        )}
      >
      </FlatList>
      <View style = {tw`w-full flex flex-row items-center justify-center px-12 mb-4`}>
        <TextInput placeholder='Send a Message' style = {tw`grow bg-gray-200 w-full p-4 rounded-2 mt-4 mr-2`}
          onChangeText={newText => setMessage(newText)}
          defaultValue={message}
        ></TextInput>
        <CustomButton styles={"w-auto bg-[#D1EDBF]"} text = {"Send"} onPress = {sendMessage}></CustomButton>
      </View>
    </View>
  )
}

export default ChatRoom