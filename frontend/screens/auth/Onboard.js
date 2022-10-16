import {Text, View, TextInput} from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';
import CustomButton from '../../components/CustomButton';
import { TouchableOpacity } from 'react-native';

export default function Onboard({navigation}) {
  useDeviceContext(tw);
  return (
    <View style={tw.style(`h-full w-full flex flex-col bg-white bg-[#D1EDBF] py-20 px-4`)}>
        <Text style= {tw`text-xl text-gray-400 font-bold mb-30`}>Activities</Text>
        <Text style= {tw`text-5xl text-gray-700 font-bold mb-4 leading-relaxed`}>Meaningful Experiences Make Lasting Memories.
        </Text>
        <View style = {tw`grow`}></View>
        <CustomButton text={"Sign In"} styles = {"bg-white"} dark = {false} onPress={() => navigation.navigate("Login")}></CustomButton>
        <CustomButton text={"Sign Up"} styles = {"bg-black"} dark = {true} onPress={() => navigation.navigate("SignUp")}></CustomButton>
    </View>
  );
}

