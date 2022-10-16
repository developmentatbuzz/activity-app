import {Text, View, TextInput} from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';
import CustomButton from '../../components/CustomButton';
import { TouchableOpacity } from 'react-native';

export default function Onboard() {
  useDeviceContext(tw);
  return (
    <View style={tw.style(`h-full w-full flex flex-col bg-white bg-[#D1EDBF] py-20 px-4`)}>
        <Text style= {tw`text-xl text-gray-500 font-bold mb-30`}>Activities</Text>
        <Text style= {tw`text-5xl text-gray-700 font-bold mb-4`}>Meaningful Experiences</Text>
        <Text style= {tw`text-5xl text-gray-700 font-bold mb-4`}>Have Fun</Text>
        <Text style= {tw`text-5xl text-gray-700 font-bold mb-4`}>Experience Life</Text>
        <View style = {tw`grow`}></View>
        <CustomButton text={"Ready!"} styles = {"bg-black"} dark = "true"></CustomButton>
    </View>
  );
}

