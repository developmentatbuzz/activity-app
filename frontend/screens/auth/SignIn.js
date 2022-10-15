import {Text, View } from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';

export default function App() {
  useDeviceContext(tw);
  return (
    <View style={tw`h-full flex bg-white items-center justify-center`}>
      <Text style={tw`text-gray-800 font-bold text-4xl`}>Activities</Text>
      <Text style={tw`text-gray-800 font-bold text-4xl`}>Do Something. Meet Someone New</Text>
    </View>
  );
}

