import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';
import SignIn from './screens/auth/SignIn';

export default function App() {
  useDeviceContext(tw);
  return (
    <SignIn></SignIn>
  );
}

