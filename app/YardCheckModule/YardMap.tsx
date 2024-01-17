import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image, useWindowDimensions , Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import { Link } from 'expo-router';
import { MaterialIcons  } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';


const YardMap = () => {
  const navigation = useNavigation();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const handleNavigateToYardList = () => {
    navigation.navigate('YardListStack', { screen: 'ParkingInfo' });
    navigation.navigate('YardListStack');
  };

  return (
    <ScrollView>
   <View style={tw`flex-1 relative`}>
  <View style={tw`flex`}>
    <View style={tw`flex`}>
      <Image
        style={[tw`w-full h-full mt-5`, { width: screenWidth, height: screenHeight }]}
        resizeMode="cover"
        source={require("../../assets/images/Map2.png")}
      />
      <View style={[tw`absolute pb-5`, {backgroundColor: '#1867C0', borderBottomLeftRadius: 699, borderBottomRightRadius: 699, top: 0, left: -10, right: -10 }]}>
        <View style={tw`flex-row pt-3`}>
            <Pressable onPress={handleNavigateToYardList}>
                <MaterialIcons name="keyboard-arrow-left" size={28} color="white" style={tw`pl-2`} />
            </Pressable>
          <Text style={tw`font-bold text-lg text-white ml-28 items-center`}>Yard #12345</Text>
        </View>
        <View style={tw`flex-row items-center ml-32 mt-2`}>
          <Text style={tw`font-bold text-yellow-200`}>Active</Text>
          <Text style={tw`text-white ml-5`}>Last occupant</Text>
        </View>
      </View>
      <View style={[tw`absolute bg-white p-4 pb-10 flex-row items-center`, { bottom: 0, left: 0, right: 0, zIndex: 1 }]}>
        <MaterialIcons name="close" size={28} color="gray" />
        <Text style={tw`text-lg flex-1 text-center font-bold text-yellow-500`}>12 min</Text>
        <MaterialIcons name="directions" size={28} color="gray" />
      </View>
      <View style={[tw`absolute flex-row pb-5 items-center`, { bottom: 0, zIndex: 1 }]}>
         <Text style={tw`flex ml-36 text-center font-bold text-gray-500`}>5.5 mi - 11h32 AM</Text>
      </View>
     
    </View>
  </View>
</View>
    
    </ScrollView>
  );
};

export default YardMap;