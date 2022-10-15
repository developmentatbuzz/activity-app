import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';

export default function App() {
  useDeviceContext(tw);
  return (
    <View style={tw`h-full flex bg-white items-center justify-center`}>
      <StatusBar style="auto" />
      <Text style={tw`text-xl`}>Activities App</Text>
    </View>
  );
}

