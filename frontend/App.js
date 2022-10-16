import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Onboard from './screens/auth/Onboard';

export default function App() {
  return (
    <Onboard></Onboard>
  );
}

