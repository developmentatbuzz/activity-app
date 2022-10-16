import React from "react";
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import tw from "twrnc";
import CustomButton from "../../components/CustomButton";

const MatchFound = (props) => {
  const navigation = props.navigation;
  const receivedValue = props.route.params.receivedValue;
  const foundPerson = {
    name: "Vincent Vo",
    id: "1724",
    grade: "Sophomore",
    major: "Computer Science",
    bio: "Hi I'm Vincent! I love to code and do other stuff. Feel free to reach out anytime!"
  }

  return (
    <View style={tw`flex-1`}>
      <SafeAreaView></SafeAreaView>
      <View style={tw`mx-9 mt-14`}>
        <Text style={tw`text-4xl text-[#F27373] mb-3 font-semibold`}>Match Found</Text>
        <Text style={tw`text-5xl`}>Find a squirrel</Text>
        <Text style={tw`text-3xl`}>
          with <Text style={tw`text-green-400`}>Vincent Vo</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <ImageBackground
            source={{
              uri: "https://avatars.dicebear.com/api/miniavs/vincentvo.jpg",
            }}
            style={tw`h-100 mt-7 rounded-xl overflow-hidden flex flex-row`}
          >
            <View style={tw`self-end mb-4 ml-4`}>
              <Text style={tw`text-4xl`}>Vincent Vo</Text>
              <Text style={tw`text-2xl`}>Sophomore</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <CustomButton 
          text="Lets go!"
          styles="py-3 mt-10 bg-green-400"
          textStyle="text-xl"
          onPress={() => {
            receivedValue(foundPerson);
            navigation.navigate("Body");
          }}
        />
      </View>

    </View>
  );
};

export default MatchFound;
