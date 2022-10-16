import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import { useDeviceContext } from "twrnc";
import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import Onboard from "./screens/auth/Onboard";
import BodyTabs from "./screens/main/BodyTabs";

export default function App() {
  const Stack = createNativeStackNavigator();
  useDeviceContext(tw);
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Body"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="Login" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Body" component={BodyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
