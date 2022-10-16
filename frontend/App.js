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
import Profile from "./screens/main/Profile";
import LoadMatch from "./screens/main/LoadMatch";
import MatchFound from "./screens/main/MatchFound";
import ScanCode from "./screens/main/ScanCode";

export default function App() {
  const Stack = createNativeStackNavigator();
  useDeviceContext(tw);
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboard"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen
            name="Login"
            component={SignIn}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="Body"
            component={BodyTabs}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="LoadMatch"
            component={LoadMatch}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="MatchFound"
            component={MatchFound}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="ScanCode"
            component={ScanCode}
            options={{ gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
