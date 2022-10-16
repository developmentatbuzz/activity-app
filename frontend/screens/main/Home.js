import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useDeviceContext } from "twrnc";
import { Avatar } from "react-native-paper";
import CustomButton from "../../components/CustomButton";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const TaskList = [
    {
      name: "Find a squirrel",
      id: 0,
    },
    {
      name: "Omae wa",
      id: 1,
    },
    {
      name: "Mou",
      id: 2,
    },
    {
      name: "Shindeirou",
      id: 3,
    },
  ];

  const colorList = [
    "bg-[#ABCDEF]",
    "bg-[#D0BFED]",
    "bg-[#EDBFBF]",
    "bg-[#EDE8BF]",
  ];

  const [selectedTasks, setSelectedTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);

  let receivedValue = (task) => {
    setActiveTask(task);
  };

  useDeviceContext(tw);
  return (
    <View style={tw`flex-1 bg-[#FAF4F2]`}>
      <SafeAreaView></SafeAreaView>
      <View style={tw`flex h-1/4 mx-9`}>
        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Avatar.Image
              size={50}
              source={{
                uri: "https://avatars.dicebear.com/api/miniavs/donaldthai.jpg",
              }}
            />
          </TouchableOpacity>
          <View style={tw`ml-3`}>
            <Text style={tw`text-gray-600 font-bold text-lg`}>
              Hi, Donald Thai
            </Text>
            <Text style={tw`text-gray-600`}>Today's gonna be a great day!</Text>
          </View>
        </View>
        {!activeTask && (
          <View style={tw`mt-6 flex flex-row self-center`}>
            <TouchableOpacity
              style={tw`mt-4 rounded-2 bg-[#FACBCB] p-4 py-3 justify-center mr-3 flex-1`}>
              <Text style={tw`text-4xl mb-.5`}>82</Text>
              <View style={tw`flex flex-row`}>
                <Feather name="check-square" size={16} color="black" />
                <Text style={tw`ml-1`}>Tasks Completed</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`mt-4 rounded-2 bg-[#FFE7AB] p-4 py-3 justify-center flex-1`}>
              <Text style={tw`text-4xl mb-.5`}>50</Text>
              <View style={tw`flex flex-row`}>
                <Feather name="user" size={16} color="black" />
                <Text style={tw`ml-1`}>Connections</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={tw`flex h-3/4 bg-white rounded-t-3xl`}>
        {!activeTask && (
          <FlatList
            ListHeaderComponent={
              <View>
                <Text style={tw`text-3xl text-gray-800 font-bold`}>This Week's Tasks</Text>
                <Text style={tw`text-gray-500 mt-1 font-bold`}>
                  Select all that you would like to do!
                </Text>
              </View>
            }
            ListHeaderComponentStyle={tw`rounded-t-3xl pt-5 mb-8`}
            contentContainerStyle={tw`mx-9 pb-32`}
            ListFooterComponent={
              <CustomButton text="Go!" textStyle="text-xl" styles="bg-[#D1EDBF]" />
            }
            data={TaskList}
            renderItem={({ item }) => (
              <View>
                <Pressable
                onPress={() => {
                  let index = selectedTasks.indexOf(item.id);
                  if (index > -1) {
                    let arrayCopy = [...selectedTasks];
                    arrayCopy.splice(index, 1);
                    setSelectedTasks(arrayCopy);
                  } else {
                    setSelectedTasks([...selectedTasks, item.id]);
                  }
                }}
                style={tw`flex flex-row items-center px-4 bg-gray-300 rounded-md z-10  ${
                  selectedTasks.includes(item.id)
                    ? colorList[item.id % colorList.length]
                    : "bg-[#24292C]"
                } h-17 mb-5`}>
                <View style={tw`h-10 w-10 bg-red-400 rounded-full mr-3`}></View>
                <Text style={tw`text-lg font-bold text-gray-600`}>{item.name}</Text>
                </Pressable>
                {selectedTasks.includes(item.id) && <View style={tw`w-full h-19 bg-gray-500' absolute rounded-2`}></View>}
              </View>
              
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
