import { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import { BarCodeScanner } from "expo-barcode-scanner";

const ScanCode = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function handleBarCodeScanned({ type, data }) {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    await sleep(5000);
    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={tw`flex-1 bg-black`}>
      <SafeAreaView></SafeAreaView>
      <View style={tw`px-9 pt-6 pb-6`}>
        <Text
          style={tw`font-bold text-white`}
          onPress={() => navigation.goBack()}>
          Cancel
        </Text>
      </View>
      <View style={tw`flex items-center`}>
        <BarCodeScanner 
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={tw`h-full w-full`}
        />
      </View>
    </View>
  );
};

export default ScanCode;
