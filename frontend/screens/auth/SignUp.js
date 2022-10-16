import {Text, View, TextInput} from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';
import CustomButton from '../../components/CustomButton';
import { TouchableOpacity } from 'react-native';

export default function SignUp({navigation}) {
  useDeviceContext(tw);
  return (
    <View style={tw.style(`h-full flex flex-col bg-[#FAF4F2] items-center justify-center`)}>
        <View style={tw`w-full px-6 flex flex-col items-start`}>
            <TouchableOpacity style = {tw`mb-6`} onPress = {() => navigation.navigate("Login")}>
                <Text style = {tw`text-gray-400 font-bold text-lg`}>Cancel</Text>
            </TouchableOpacity>
            <Text style={tw`text-gray-800 font-bold text-5xl mb-10`}>Signup</Text>


            <View style={tw`pb-8 lg:pb-2 w-full`}>
                <Text style={tw`text-gray-700 font-bold`}>Username</Text>
                <TextInput style={tw`border-b-2 py-2 border-gray-600`} placeholder="Username"></TextInput>
            </View>

            <View style = {tw`w-full pb-10`}>
                <Text style={tw`text-gray-700 w-full font-bold`}>Phone Number</Text>
                <TextInput placeholder="+1713-888-8888" secureTextEntry={true} style={tw`border-b-2 py-2 border-gray-600`}></TextInput>
            </View>
            
            <View style = {tw`w-full pb-10`}>
                <Text style={tw`text-gray-700 w-full font-bold`}>Password</Text>
                <TextInput placeholder="Password" secureTextEntry={true} style={tw`border-b-2 py-2 border-gray-600`}></TextInput>
            </View>

            <View style = {tw`w-full pb-10`}>
                <Text style={tw`text-gray-700 w-full font-bold`}>Password Again</Text>
                <TextInput placeholder="Password" secureTextEntry={true} style={tw`border-b-2 py-2 border-gray-600`}></TextInput>
            </View>

            <CustomButton text={"Sign Up"} styles={"bg-[#F27373]"} dark ={true}></CustomButton>
        </View>
    </View>
  );
}

