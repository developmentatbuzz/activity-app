import {Text, View, TextInput} from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';
import CustomButton from '../../components/CustomButton';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import {baseURL} from '../../globals'
import {userID, setUserId} from '../../state';
import { useState } from 'react';

export default function SignIn({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useDeviceContext(tw);
  const signInUser = async () => {
    console.log("press");
    navigation.navigate("Body")
    // await axios.post(`http://192.168.86.53:3000/api/v1/users/login`,{
    //     username:username,
    //     password:password
    // }
    // ).then((res) => {
    //     console.log(res.data)
    //     setUserId(res.data.user.id);
    //     navigation.navigate("Body")
    // }).catch(err => console.log(err))
  }

  return (
    <View style={tw.style(`h-full flex flex-col bg-[#FAF4F2] items-center justify-center`)}>
        <View style={tw`w-full px-6 flex flex-col items-start`}>
            <Text style={tw`text-gray-800 font-bold text-5xl mb-2`}>Activities</Text>
            <Text style={tw`text-gray-600 font-bold text-xl mb-20`}>Do Something. Meet Someone New.</Text>
            <View style={tw`pb-8 lg:pb-2 w-full`}>
                <Text style={tw`text-gray-700 font-bold`}>Username</Text>
                <TextInput style={tw`border-b-2 py-2 border-gray-600`} placeholder="Username"
                onChangeText={newText => setUsername(newText)}
                defaultValue={username}
                ></TextInput>
            </View>
            <View style = {tw`w-full pb-10`}>
                <Text style={tw`text-gray-700 w-full font-bold`}>Password</Text>
                <TextInput placeholder="Password" secureTextEntry={true} style={tw`border-b-2 py-2 border-gray-600`}
                onChangeText={newText => setPassword(newText)}
                defaultValue={password}
                ></TextInput>
            </View>

            <CustomButton text={"Sign In"} styles={"bg-[#D1EDBF]"} onPress={signInUser}></CustomButton>
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

