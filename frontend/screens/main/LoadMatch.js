import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import LottieView from "lottie-react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoadMatch = (props) => {
  const { width, height } = Dimensions.get("window");
  const navigation = props.navigation;
  console.log(props)
  const receivedValue = props.route.params.receivedValue;  

  let id = setTimeout(() => {
    navigation.navigate("MatchFound", {
      receivedValue: receivedValue
    })
  }, 9000)
  return (
    <View style={tw`flex-1 mx-3 justify-center items-center`}>
      <SafeAreaView></SafeAreaView>
      <Text style={tw`mb-7 text-4xl`}>Hang Tight!</Text>
      <LottieView
        source={require("../../assets/earth-loading.json")}
        autoPlay
        loop
        style={{
          height: height * 0.35,
        }}
      />
      <View style={tw`flex flex-col items-center`}>
        <Text style={tw`mt-7 mb-6 text-4xl text-center`}>
          We're finding you a match
        </Text>
        <TouchableOpacity 
          style={tw`rounded-full h-15 w-15 bg-red-500 flex items-center justify-center`} 
          onPress={()=>{
            clearTimeout(id);
            receivedValue(null);
            navigation.goBack();
          }}
        >
          <MaterialCommunityIcons name="window-close" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoadMatch;
