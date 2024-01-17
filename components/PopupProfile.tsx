import React, { useState } from 'react';
import { View, Image, Text, Pressable, Modal } from 'react-native';
import  tw  from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome  } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const PopupProfile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleNotif, setModalVisibleNotif] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };
  const closeModalNotif = () => {
    setModalVisibleNotif(false);
  };

  const handleAvatarClick = () => {
    setModalVisible(true);
  };

  const handleNotifClick = () => {
    setModalVisibleNotif(true);
  };

  // Exporting of the handleNotifClick function
  PopupProfile.handleNotifClick = handleNotifClick;

  return (
    <View>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <View style={tw`relative`}>
            <Pressable onPress={handleNotifClick}>
              <Ionicons name="notifications" size={26} color="white" style={{ marginRight: 20 }} />
              <View style={tw`bg-red-500 w-2 h-2 rounded-full absolute top-0 right-6`} />
            </Pressable>
          </View>
            <Pressable onPress={handleAvatarClick}>
                <Image
                style={tw`w-8 h-8`}
                source={require('./../assets/images/Ellipse.png')}/>
            </Pressable>
        </View>
      {modalVisibleNotif && (
      <Modal
        visible={modalVisibleNotif}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisibleNotif(false)}>
          
        <View style={tw`absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center`}>
            <Pressable style={tw`absolute top-32 right-2`} onPress={closeModalNotif}>
              <MaterialIcons name="close" size={30} color="#CE0053" />
            </Pressable>
          <View style={[tw`bg-white p-4 rounded-lg`, { width: 375 }]}>
            <View style={tw`flex justify-between py-4 px-4`}>
              <View style={tw`flex-row`}>
                  <FontAwesome name='exclamation-circle' size={30} style={[tw`ml-1`, {color: '#CE0053'}]} />
                  <Text style={tw`text-lg ml-4`}>Upcoming Maintenance Schedule Scheduled on Feb 20, 2024 10:00 am - 1:20 pm</Text>
              </View>
            </View>
            <View style={tw`flex justify-between border-t border-b border-gray-300 py-4 px-4`}> 
              <View style={tw`flex-row`}>
                  <FontAwesome name='clock-o' size={32} style={[tw`ml-1`, {color: '#4975B8'}]} />
                  <Text style={tw`text-lg ml-4`}>Your Next Stop is about 30min Rosetta knolls, New Abiland 10:00 am - 1:20 pm</Text>
              </View>
            </View>
            <View style={tw`flex justify-between border-b border-gray-300 py-4 px-4`}> 
              <View style={tw`flex-row`}>
                  <FontAwesome name='exclamation-triangle' size={30} style={[tw`ml-1`, {color: '#FFA500'}]} />
                  <Text style={tw`text-lg ml-4`}>Upcoming Maintenance Schedule Scheduled on Feb 20, 2024 10:00 am - 1:20 pm</Text>
              </View>
            </View>
            <Text style={tw`text-lg ml-2 mt-2 font-bold`}>See All Notifications</Text>
          </View>
        </View>
      </Modal>
      )}

      {modalVisible && (
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={tw`absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center`}>
          <View style={tw`bg-white p-8 rounded-lg w-80`}>
            <Pressable style={tw`absolute top-2 right-2`} onPress={closeModal}>
              <MaterialIcons name="close" size={24} color="gray" />
            </Pressable>
            <View style={tw`flex items-center mb-4`}>
              <View style={tw`flex-row`}>
                <Image style={tw`w-16 h-16 rounded-full`} source={require('./../assets/images/Ellipse.png')} />
                <View style={tw`ml-4 mt-2`}>
                  <Text style={tw`text-xl font-bold`}>John Doe</Text>
                  <Text style={tw`text-gray-500`}>Driver
                  (<Text style={tw`text-blue-500`}>Active</Text> )</Text>
                </View>
              </View>
            </View>
            <View style={tw`flex items-center border-b border-gray-300 pb-4 mb-4`}>
              <Pressable onPress={() => navigation.navigate("Profile")} style={tw`bg-blue-500 py-2 px-4 rounded-lg`}>
                <Text style={tw`text-white font-bold`}>View Your Profile</Text>
              </Pressable>
            </View>
            <View style={tw`flex items-center`}>
              <Pressable onPress={() => navigation.navigate("Login")} style={tw`bg-red-500 py-2 px-4 rounded-lg`}>
                <Text style={tw`text-white font-bold`}>Sign Out</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      )}
    </View>
  );
};

export default PopupProfile;