import {Text, View, TextInput} from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';
import CustomButton from '../../components/CustomButton';
import { TouchableOpacity } from 'react-native';

export default function SignIn({navigation}) {
  useDeviceContext(tw);
  return (
    <View style={tw.style(`h-full flex flex-col bg-[#FAF4F2] items-center justify-center`)}>
        <View style={tw`w-full px-6 flex flex-col items-start`}>
            <Text style={tw`text-gray-800 font-bold text-5xl mb-2`}>Activities</Text>
            <Text style={tw`text-gray-600 font-bold text-xl mb-20`}>Do Something. Meet Someone New.</Text>
            <View style={tw`pb-8 lg:pb-2 w-full`}>
                <Text style={tw`text-gray-700 font-bold`}>Username</Text>
                <TextInput style={tw`border-b-2 py-2 border-gray-600`} placeholder="Username"></TextInput>
            </View>
            <View style = {tw`w-full pb-10`}>
                <Text style={tw`text-gray-700 w-full font-bold`}>Password</Text>
                <TextInput placeholder="Password" secureTextEntry={true} style={tw`border-b-2 py-2 border-gray-600`}></TextInput>
            </View>

            <CustomButton text={"Sign In"} styles={"bg-[#D1EDBF]"} onPress={()=>navigation.navigate("Body")}></CustomButton>
            <View style={tw`w-full flex flex-row justify-center items-center`}>
                <Text style = {tw`mt-2`}>Don't have an account?</Text>
                <TouchableOpacity style = {tw`ml-2 mt-2`} onPress = {() => navigation.navigate("SignUp")}>
                    <Text style = {tw`text-red-300 font-bold`}>Create One</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

