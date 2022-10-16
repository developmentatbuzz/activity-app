import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Dimensions, Image } from "react-native";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { people } from "../../data";
import { Avatar } from "react-native-paper";

const Profile = (props) => {
  let navigation = props.navigation;
  let id = props.route.params.id;

  let profile = people.find((person) => person.id === id);
  let isSelf = id===1827;
  let {width, height} = Dimensions.get("window")
  return (
    <View
      style={tw`flex-1 bg-white flex flex-col `}>
      <SafeAreaView></SafeAreaView>
      <View style={tw`absolute w-full h-50 bg-[#D1EDBF] mb-10`}></View>
      <TouchableOpacity
        style={tw`mt-1 mr-1 px-4`}
        onPress={() => navigation.goBack()}
      >
        <Feather name="chevron-left" size={30}></Feather>
      </TouchableOpacity>
      <View style={tw`self-center flex items-center`}>

        <View style={tw`flex justify-center items-center`}>
          <Image 
            source={{uri: profile.profile}}
            style={tw`w-40 h-40 rounded-full border-8 border-white overflow-hidden `}
          />
        </View>
 
        <Text style={tw`text-4xl font-bold py-1`}>{profile.name}</Text>
        <View style={tw`flex flex-row mb-8`}>
            <CustomButton 
              text={isSelf ? "Edit" : "Add Friend"}
              styles="w-auto py-4 bg-[#F27373] mr-3"
              leading={<Feather name="edit-2" size={24} color="white"></Feather>}
              textStyle="text-xl text-white"
            />
            <CustomButton 
              leading={<Feather name="message-circle" size={24} color="white"></Feather>}
              styles="w-auto py-4"
            />
        </View>
      </View>
      <View style={tw`w-full px-8 flex flex-col items-start`}>
        <Text style={tw`text-3xl font-bold`}>About</Text>
        <View style={{height: 1, width: width*.22, backgroundColor: "black"}}></View>
        <View style={tw`mt-5`}>
          <Text style={tw`font-bold text-2xl mb-1`}>Major</Text>
          <Text style={tw`text-lg`}>{profile.major}</Text>
        </View>
        <View style={tw`mt-5`}>
          <Text style={tw`font-bold text-2xl mb-1`}>Interests</Text>
          <Text style={tw`text-lg`}>{profile.interests.join(", ")}</Text>
        </View>
        <View style={tw`mt-5`}>
          <Text style={tw`font-bold text-2xl mb-1`}>Biography</Text>
          <Text style={tw`text-lg`}>{profile.bio}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
