import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import { Link } from 'expo-router';
import { MaterialIcons  } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';


const YardReservation = () => {
  const navigation = useNavigation();
  const [activeMenu, setActiveMenu] = useState('Yards');

  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState(new Date());
  const [selectedEndTime, setSelectedEndTime] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState('');

    const handleStartDateChange = (event, date) => {
        if (date) {
        SelectedStartDate(date);
        }
    };

    const handleEndDateChange = (event, date) => {
        if (date) {
        SelectedEndDate(date);
        }
    };

    const handleStartTimeChange = (event, date) => {
        if (date) {
        SelectedStartTime(date);
        }
    };

    const handleEndTimeChange = (event, date) => {
        if (date) {
        SelectedEndTime(date);
        }
    };
    const slotOptions = [
        { label: 'Slot 1', value: 'slot1' },
        { label: 'Slot 2', value: 'slot2' },
        { label: 'Slot 3', value: 'slot3' },
      ];


  const handleMenuYardClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'Yards') {
      navigation.navigate('YardList');
    } else if (menu === 'History') {
      navigation.navigate('YardHistory');
    } else if (menu === 'Report Problem') {
      navigation.navigate('Modal');
    }
  };


  return (
    <ScrollView>
    <View style={tw`flex-1`}>
      <View style={tw`flex`}>
        <View style={tw`flex`}>
        <View style={tw`flex-row justify-between border-t border-b border-gray-300 py-3 px-4`}>
            <Pressable onPress={() => handleMenuYardClick('Yards')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-black font-bold text-center font-bold ${activeMenu === 'Yards' ? 'text-blue-800' : ''}`}>Yards</Text>
                <View style={tw`rounded-full bg-yellow-500 w-6 h-6 ml-2 flex items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-bold`}>12</Text>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => handleMenuYardClick('History')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-black font-bold text-center font-bold ${activeMenu === 'History' ? 'text-blue-800' : ''}`}>History</Text>
                <View style={tw`rounded-full bg-green-500 w-6 h-6 ml-2 flex items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-bold`}>5</Text>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => handleMenuYardClick('Report Problem')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-black font-bold text-center font-bold ${activeMenu === 'Report Problem' ? 'text-blue-800' : ''}`}>Report Problem</Text>
                <View style={tw`rounded-full bg-gray-500 w-6 h-6 ml-2 flex items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-bold`}>10</Text>
                </View>
              </View>
            </Pressable>
          </View>
        
        <View style={tw`flex justify-between mt-2 ml-2 mr-2 bg-white shadow-lg rounded-lg`}>
            <Image
              style={tw`w-96 h-52`}
              source={require("../../assets/images/Map1.png")}
            />
        </View>
        <Text style={tw`text-lg font-bold mt-4 ml-2`}>Réservation</Text>
        <View style={tw`flex justify-between px-2 mt-2 ml-2 pt-3 mr-2 rounded-lg bg-white border border-gray-300`}>
          <View style={tw`flex-row mb-1 items-center`}>
            <MaterialIcons name="event" size={24} color="#1867C0" style={tw`mr-2`} />
            <Text style={tw`text-sm`}>Start Date: 12/12/2023</Text>
            <MaterialIcons name="access-time" size={24} color="#1867C0" style={tw`mr-2 ml-2`} />
            <Text style={tw`text-sm`}>Start Time: 10h36</Text>
          </View>
          <View style={tw`flex-row mb-1 items-center`}>
            <MaterialIcons name="event" size={24} color="#1867C0" style={tw`mr-2`} />
            <Text style={tw`text-sm`}>End Date: 14/12/2023</Text>
            <MaterialIcons name="access-time" size={24} color="#1867C0" style={tw`ml-4 mr-2`}/>
            <Text style={tw`text-sm`}>End Time: 14h00</Text>
          </View>
          <View style={tw`flex-row mb-1 items-center`}>
            <Text style={{ fontSize: 16 }}>Parking Slot:</Text>
            <Text style={tw`text-sm text-gray-500 ml-2`}>Slot 2</Text>
          </View>
 
      {/* <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={slotOptions}
        style={tw`text-sm text-black`}
        placeholder={{ label: 'Select a slot', value: null }}
      /> */}
  <View style={tw`flex-row mb-3 pl-2 mt-2`}>
    <TouchableOpacity style={[tw`py-2 px-4 rounded-lg`, {backgroundColor: '#1867C0'}]}>
      <Text style={tw`text-white`}>Reserve</Text>
    </TouchableOpacity>
    <TouchableOpacity style={tw`py-2 px-4 rounded-lg bg-red-500 ml-2`}>
      <Text style={tw`text-white`}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity style={tw`py-2 px-4 rounded-lg bg-yellow-500 ml-2`}>
      <Text style={tw`text-white`}>Update</Text>
    </TouchableOpacity>
  </View>

  {/* Date and Time Pickers */}
  {/* {showStartDatePicker && (
    <DateTimePicker
      value={selectedStartDate}
      mode="date"
      display="default"
      onChange={handleStartDateChange}
    />
  )}
  {showEndDatePicker && (
    <DateTimePicker
      value={selectedEndDate}
      mode="date"
      display="default"
      onChange={handleEndDateChange}
    />
  )}
  {showStartTimePicker && (
    <DateTimePicker
      value={selectedStartTime}
      mode="time"
      display="default"
      onChange={handleStartTimeChange}
    />
  )}
  {showEndTimePicker && (
    <DateTimePicker
      value={selectedEndTime}
      mode="time"
      display="default"
      onChange={handleEndTimeChange}
    />
  )} */}
</View>
</View>
    <View style={[tw`rounded-lg p-2 mr-2 ml-2 mt-4 mb-4`, {backgroundColor: '#1867C0'}]}>

     <Pressable onPress={() => navigation.navigate("ParkingInfo")}>
            <Text style={tw`text-lg text-white font-bold text-center`}>GO TO THE PARKING LOT</Text>
        </Pressable>
    </View>
      </View>
    </View>
    
    </ScrollView>
  );
};

export default YardReservation;