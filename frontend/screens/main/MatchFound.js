import React from "react";
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import tw from "twrnc";
import CustomButton from "../../components/CustomButton";
import { tasks, people } from "../../data";

const MatchFound = (props) => {
  const navigation = props.navigation;
  const receivedValue = props.route.params.receivedValue;

  return (
    <View style={tw`flex-1`}>
      <SafeAreaView></SafeAreaView>
      <View style={tw`mx-9 mt-14`}>
        <Text style={tw`text-4xl text-[#F27373] mb-3 font-semibold`}>Match Found</Text>
        <Text style={tw`text-5xl font-bold`}>Find a squirrel</Text>
        <Text style={tw`text-2xl`}>
          with Nabil Chowdhury
        </Text>
        <TouchableOpacity onPress={() => navigation.push("Profile", {id: people[0].id})}>
          <View style={tw`shadow-xl`}>
            <ImageBackground
              source={require("./nc.jpg")}
              style={tw`h-95 mt-7 rounded-xl overflow-hidden flex flex-row`}
            >
              <View style={tw`self-end mb-4 ml-4`}>
                <Text style={tw`text-4xl text-white`}>Nabil Chowdhury</Text>
                <Text style={tw`text-2xl text-white`}>Sophomore</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <CustomButton 
          text="Lets go!"
          styles="py-3 mt-15 bg-green-400"
          textStyle="text-xl"
          onPress={() => {
            receivedValue(tasks[0]);
            navigation.navigate("Body");
          }}
        />
      </View>

    </View>
  );
};

export default MatchFound;
