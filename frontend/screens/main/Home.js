import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useDeviceContext } from "twrnc";
import { Avatar } from "react-native-paper";
import CustomButton from "../../components/CustomButton";
import { Feather, Ionicons } from "@expo/vector-icons";
import { people } from "../../data";

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
    "bg-red-100",
    "bg-blue-100",
    "bg-teal-100",
    "bg-orange-100",
  ];

  const [selectedTasks, setSelectedTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const myId = 1827;
  let myProfile = people.find((person) => person.id === myId);

  let receivedValue = (task) => {
    setActiveTask(task);
  };
  let partnerProfile = {};
  if (activeTask) {
    let partnerId = activeTask.people.find((person) => person.id !== myId);
    partnerProfile = people.find((person) => person.id === partnerId);
  }

  useDeviceContext(tw);
  return (
    <View style={tw`flex-1 bg-[#FAF4F2]`}>
      <SafeAreaView></SafeAreaView>
      <View style={tw`flex flex-col py-6 mx-9`}>
        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", {
                id: myId,
              })
            }>
            <Avatar.Image
              size={50}
              source={{
                uri: "https://avatars.dicebear.com/api/pixel-art/jenniferchen.jpg",
              }}
            />
          </TouchableOpacity>
          <View style={tw`ml-3`}>
            <Text style={tw`text-gray-600 font-bold text-lg`}>
              Hi, {myProfile.name}
            </Text>
            <Text style={tw`text-gray-600`}>
              {!activeTask
                ? "Today's gonna be a great day!"
                : "Get pumped! You have a task"}
            </Text>
          </View>
        </View>
        {!activeTask && (
          <View style={tw`flex flex-row self-center`}>
            <TouchableOpacity
              style={tw`mt-4 rounded-2 bg-green-200 p-4 py-3 justify-center mr-3 flex-1`}>
              <Text style={tw`text-4xl mb-.5`}>{myProfile.tasksCompleted}</Text>
              <View style={tw`flex flex-row`}>
                <Feather name="check-square" size={16} color="black" />
                <Text style={tw`ml-1`}>Tasks Completed</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`mt-4 rounded-2 bg-[#FEFFC3] p-4 py-3 justify-center flex-1`}>
              <Text style={tw`text-4xl mb-.5`}>{myProfile.connections}</Text>
              <View style={tw`flex flex-row`}>
                <Feather name="user" size={16} color="black" />
                <Text style={tw`ml-1`}>Connections</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={tw`flex h-full bg-white rounded-t-3xl`}>
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
            contentContainerStyle={tw`px-9 pb-32`}
            ListFooterComponent={
              <CustomButton
                text="Go!"
                textStyle="text-xl"
                styles="py-3"
                onPress={() =>
                  navigation.navigate("LoadMatch", {
                    receivedValue: receivedValue,
                  })
                }
              />
            }
            data={TaskList}
            scrollEnabled={false}
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
                <Text style={tw`text-lg font-bold ${selectedTasks.includes(item.id) ? "text-gray-600" : "text-white"}`}>{item.name}</Text>
                </Pressable>
                {selectedTasks.includes(item.id) && <View style={tw`w-full h-19 bg-gray-500 absolute rounded-2`}></View>}
              </View>
              
            )}
          />
        )}

        {activeTask && (
          <>
            <View style={tw`flex px-9`}>
              <View style={tw`mb-5 mt-6`}>
                <Text style={tw`text-4xl text-[#F27373] mb-3 font-semibold`}>
                  Current Task
                </Text>
                <Text style={tw`text-5xl font-bold`}>Find a squirrel</Text>
                <Text style={tw`text-2xl`}>with {partnerProfile.name}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Profile", { id: activeTask })
                }>
                <Avatar.Image
                  size={200}
                  source={{
                    uri: partnerProfile.profile,
                  }}
                  style={tw`self-center mt-2`}
                />
              </TouchableOpacity>
              <Text
                style={tw`self-center mt-3 text-lg`}
                onPress={() =>
                  navigation.navigate("Profile", { id: partnerProfile.id })
                }>
                View Profile
              </Text>
              <CustomButton
                styles="mt-18 bg-[#D1EDBF] py-4"
                textStyle="text-xl"
                text="Send A Message!"
                dark = {false}
                onPress={() => navigation.navigate("Chat")}
              >
              </CustomButton>
              <CustomButton
                styles="mt-4 bg-red-400 py-4"
                textStyle="text-white text-xl"
                text="Confirm meet up!"
                onPress={() => setModalVisible(true)}
              />
              
            </View>

            <Modal visible={modalVisible} animationType="slide">
              <View style={tw`flex-1 bg-[#FAF4F2]`}>
                <SafeAreaView></SafeAreaView>
                <View style={tw`px-9 pt-20`}>
                  <Text
                    onPress={() => setModalVisible(false)}
                    style={tw`font-bold`}>
                    Cancel
                  </Text>
                  <Text style={tw`text-4xl font-bold mt-8`}>
                    Confirm Meetup
                  </Text>
                  <Text
                    style={tw`text-lg font-bold leading-6 mt-1 text-[#444444]`}>
                    Scan your partners code or have your partner scan yours
                  </Text>
                </View>
                <View style={tw`flex items-center justify-center mt-12`}>
                  <Text style={tw`text-2xl font-bold`}>Your Code</Text>
                  <View style={tw`h-75 w-75 bg-white mt-2`}></View>
                  <TouchableOpacity
                    style={tw`mt-25 bg-[#F27373] rounded px-18 py-2`}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate("ScanCode")
                    }}
                  >
                    <Ionicons name="camera" size={30} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </>
        )}
      </View>
    </View>
  );
};

export default Home;
