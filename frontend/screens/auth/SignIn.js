import {Text, View, TextInput} from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';
import CustomButton from '../../components/CustomButton';

export default function App() {
  useDeviceContext(tw);
  return (
    <View style={tw`h-full flex flex-col bg-white items-center justify-center px-4`}>
        <View style={tw`text-center pb-24 flex flex-col justify-center items-center`}>
            <Text style={tw`text-gray-800 font-bold text-5xl`}>Activities</Text>
            <Text style={tw`text-gray-600 font-bold text-xl`}>Do Something. Meet Someone New.</Text>
        </View>
        {/* style={tw``} */}
        <View style={tw`w-full px-4 flex flex-col items-start`}>
            <View style={tw`pb-8 lg:pb-2 w-full`}>
                <Text style={tw`text-gray-700 font-bold`}>Username</Text>
                <TextInput style={tw`border-b-2 py-2 border-gray-600`} placeholder="Username"></TextInput>
            </View>
            <View style = {tw`w-full pb-10`}>
                <Text style={tw`text-gray-700 w-full font-bold`}>Password</Text>
                <TextInput placeholder="Password" style={tw`border-b-2 py-2 border-gray-600`}></TextInput>
            </View>

            <CustomButton text={"Sign In"} leading = {<Text>hello</Text>}></CustomButton>
        </View>
        <View>

        </View>
        
    </View>
  );
}

