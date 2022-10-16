import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import tw from "twrnc";
import { Avatar, Searchbar } from "react-native-paper";
import { connections } from "../../data";

const Connections = ({navigation}) => {
  const [search, setSearch] = useState("");
  const [masterData, setMasterData] = useState(connections);
  const [filteredData, setFilteredData] = useState(connections);
  const [pressedId, setPressedId] = useState("");

  const filterData = (text) => {
    let trimmedText = text.trim();
    if (trimmedText === "") {
      setFilteredData(masterData);
    } else if (trimmedText) {
      let upperText = trimmedText.toUpperCase();
      let newData = masterData.filter(
        (person) => person.name.toUpperCase().indexOf(upperText) !== -1
      );
      setFilteredData(newData);
    }
    setSearch(text);
  };
  return (
    <View style={tw`flex-1 bg-[#FAF4F2]`}>
      <SafeAreaView></SafeAreaView>
      <Searchbar
        value={search}
        onChangeText={(text) => filterData(text)}
        placeholder="Search"
        style={tw`bg-[#FDE8E8] mx-5 mt-5 mb-6 border-y-0 android:mt-10`}
      />
      <FlatList
        contentContainerStyle={tw`pb-10`}
        data={filteredData}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPressIn={() => setPressedId(item.id)}
              onPressOut={() => setPressedId("")}
              onPress={()=>{navigation.push("Profile", {id:item.id})}}
            >
              <View style={tw`flex flex-row mx-8 ${pressedId === item.id ? "bg-[#FDE8E8]" : "bg-white"} rounded-lg mb-4 px-3 py-3 items-center`}>
                <Avatar.Image 
                  size={50}
                  source={{uri: `https://avatars.dicebear.com/api/pixel-art/${item.name}.jpg`}}
                />
                <Text style={tw`ml-3 text-xl`}>{item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default Connections;
