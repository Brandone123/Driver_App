import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image, useWindowDimensions , TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import { Link } from 'expo-router';
import { MaterialIcons  } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';


const DispatchMap = () => {
  const navigation = useNavigation();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();



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
            <Pressable onPress={() => navigation.navigate("DispatchDetail")}>
                <MaterialIcons name="keyboard-arrow-left" size={28} color="white" style={tw`pl-3`} />
            </Pressable>
          <Text style={tw`font-bold text-lg text-white ml-28 items-center`}>Dispatch #13532</Text>
        </View>
        <View style={tw`flex-row text-center ml-40 mt-2`}>
          <Text style={tw`font-bold text-yellow-200`}>Active</Text>
          <Text style={tw`text-white ml-5`}>Past</Text>
        </View>
      </View>
      <View style={[tw`absolute bg-white p-4 flex pl-10`, {bottom: 0, left: 20, right: 20, zIndex: 1, paddingBottom: 0 }]}>
        <View style={tw`flex-row`}>
            <Text style={tw`text-xl flex-1 font-bold text-black mb-2`}>Journey Details</Text>
            <MaterialIcons name="keyboard-arrow-down" size={35} color="#1867C0" style={tw``} />
        </View>
        <View style={tw`flex justify-between mb-4`}>
              <View style={tw`flex-row mb-2`}>
                <View style={tw`w-6 h-6 bg-blue-500 rounded-full mb-1`} />
                <View style={tw`flex-col ml-2`}>
                  <Text style={tw`text-sm text-blue-500 font-bold`}>Dispatch assignment</Text>
                  <Text style={tw`text-xs mt-1`}>Monday 04/12    12h14  PST</Text>
                </View>
              </View>
              <View style={tw`flex-row mt-2 mb-2`}>
                <View style={tw`w-6 h-6 bg-blue-400 rounded-full`} />
                <View style={tw`flex-col ml-2`}>
                  <Text style={tw`text-sm text-blue-500 font-bold`}>Pickup from loading dock</Text>
                  <Text style={tw`text-xs`}>Thursday 07/12    2h34  EST</Text>
                </View>
              </View>
              <View style={tw`flex-row mt-2`}>
                <View style={tw`w-6 h-6 bg-blue-300 rounded-full`} />
                <View style={tw`flex-row ml-2`}>
                  <Text style={tw`text-sm text-blue-500 font-bold`}>On the journey</Text>
                  <TouchableOpacity style={tw`py-1 px-4 ml-3 rounded-lg bg-blue-500`}>
                    <Text style={tw`text-white`}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tw`flex-row mt-2 mb-2`}>
                <View style={tw`w-6 h-6 bg-blue-200 rounded-full`} />
                <View style={tw`flex-col ml-2`}>
                  <Text style={tw`text-sm text-gray-300 font-bold`}>Delivery completed</Text>
                  <MaterialIcons name="keyboard-arrow-down" size={28} color="#1867C0" style={tw`text-center`} />
                </View>
              </View>
              <View style={tw`flex-row items-center mt-2 mb-2`}>
                <TouchableOpacity style={tw`py-2 px-8 ml-3 rounded-lg bg-blue-500`}>
                    <Text style={tw`text-white`}>Fuel Cards</Text>
                  </TouchableOpacity>
                  <MaterialIcons name="help-outline" size={28} color="gray" style={tw`text-center ml-2`} />
              </View>
              <View style={tw`flex-row items-center mt-2 mb-2`}>
                <TouchableOpacity style={tw`py-2 px-5 ml-3 rounded-lg bg-blue-500`}>
                    <Text style={tw`text-white`}>Report Emergency</Text>
                  </TouchableOpacity>
                  <MaterialIcons name="help-outline" size={28} color="gray" style={tw`text-center ml-2`} />
              </View>
              <View style={tw`flex-row items-center mt-2 mb-2`}>
                    <Text style={tw`text-black font-bold`}>Truck #:</Text>
                    <Text style={tw`text-black ml-4`}>12341</Text>
                </View>
                <View style={tw`flex-row items-center mt-2 mb-2`}>
                    <Text style={tw`text-black font-bold`}>Mileage:</Text>
                    <Text style={tw`text-black ml-4`}>740 KM</Text>
                </View>
            </View>
        
      </View>
     
    </View>
  </View>
</View>
    
    </ScrollView>
  );
};

export default DispatchMap;