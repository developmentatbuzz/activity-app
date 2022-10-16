import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tw from "twrnc";

const ScanCode = ({navigation}) => {

  // async function reqPermissions() {
  //   const reqPermission = await requestCameraPermission();
  //   const cameraPermission = await Camera.getCameraPermissionStatus()
  //   return cameraPermission;
  // }
  // const devices = useCameraDevices()
  // const device = devices.back

  return (
    <View style={tw`flex-1 bg-black`}>
      <SafeAreaView></SafeAreaView>
      <View style={tw`px-9 pt-9`}>
        <Text style={tw`font-bold text-white`} onPress={()=>navigation.goBack()}>Cancel</Text>
      </View>
      {/* <Camera 
        device={device}
        isActive={true}
      /> */}
    </View>
  )
}

export default ScanCode