import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import { Link } from 'expo-router';
import { MaterialIcons  } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';


const ParkingInfo = () => {
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

  const handleNavigateToMapping = () => {
    navigation.navigate('Mapping', { screen: 'YardMap' });
    navigation.navigate('Mapping');
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
        
        <View style={tw`flex justify-between mt-2 ml-1 mr-1 `}>
            <Image
              style={tw`w-96 h-52`}
              source={require("../../assets/images/Slot_image.png")}
            />
             <View style={tw`flex justify-between p-3 mt-2 ml-1 mr-1 rounded-lg bg-white border border-gray-300`}>
                <View style={tw`flex-row mb-1 items-center`}>
                    <Image
                        style={tw`w-48 h-5`}
                        source={require("../../assets/images/Step.png")}
                    />
                    <Text style={tw`text-sm pl-5`}>Progress: </Text>
                    <Text style={[tw`text-sm ml-2 font-bold`, {color: '#1867C0'}]}>Unstarted</Text>
                </View>
             </View>
             
        </View>
        <Text style={tw`text-lg font-bold mt-4 ml-2`}>Instructions</Text>
        <View style={tw`flex justify-between px-2 mt-2 ml-2 pt-3 mr-2 rounded-lg bg-white border border-gray-300`}>
            <View style={tw`flex-row mb-1 ml-1 items-center`}>
                <MaterialIcons name="directions" size={28} color="#1867C0" style={tw`mr-2`} />
                <Text style={tw`text-lg`}>Driver To</Text>
                <Text style={tw`text-lg ml-20`}>Parking Slot:</Text>
                <Text style={tw`text-lg text-gray-500 ml-2`}>Slot 2</Text>
            </View>
            <View style={tw`border-b-2 border-gray-300 mt-4 mb-4`} />
            <View style={tw`flex-row`}>
                <Text style={tw`text-lg text-green-500 ml-1 font-bold`}>Refresh</Text>
                <TouchableOpacity style={[tw`py-2 px-4 rounded-lg ml-48 mb-3`, {backgroundColor: '#1867C0'}]}>
                  <Pressable onPress={() => navigation.navigate("YardMap")}>
                    <Text style={tw`text-white font-bold`}>Start Drive</Text>
                  </Pressable>
                </TouchableOpacity>
            </View>
        </View>
        <Text style={tw`text-lg font-bold mt-4 ml-2`}>Report</Text>
        <View style={tw`flex justify-between mb-5 px-2 mt-2 ml-2 pt-3 mr-2 rounded-lg bg-white border border-gray-300`}>
           <View style={tw`flex-row items-center`}>
                <View style={tw`relative`}>
                    <Text style={tw`text-lg font-bold `}>Arrival</Text>
                    <View style={tw`flex-row mb-1 items-center`}>
                        <MaterialIcons name="event" size={24} color="#1867C0" style={tw`mr-1`} />
                        <Text style={tw`text-sm`}>Date: 12/12/2023</Text>
                        <MaterialIcons name="access-time" size={24} color="#1867C0" style={tw`mr-1 ml-2`} />
                        <Text style={tw`text-sm`}>Time: 10h36</Text>
                    </View>
                    <View style={tw`border-b-2 border-gray-300 mt-4 mb-4`} />
                    <Text style={tw`text-lg font-bold `}>Departure</Text>
                    <View style={tw`flex-row mb-3 items-center`}>
                        <MaterialIcons name="event" size={24} color="#1867C0" style={tw`mr-1`} />
                        <Text style={tw`text-sm`}>Date: 14/12/2023</Text>
                        <MaterialIcons name="access-time" size={24} color="#1867C0" style={tw`ml-2 mr-1`}/>
                        <Text style={tw`text-sm`}>Time: 14h00</Text>
                    </View>
            </View>
            <View style={tw`flex justify-center items-center px-2 mt-2 pt-3 ml-3 rounded-lg bg-white shadow-lg`}>
                <Image
                style={tw`w-20 h-20`}
                source={require("../../assets/images/QR.png")}
                />
                <Text style={tw`text-sm mt-2`}>Scan QR</Text>
            </View>
           </View>
           
            
        </View>
        </View>
      </View>
    </View>
    
    </ScrollView>
  );
};

export default ParkingInfo;