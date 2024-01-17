import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const ActiveLoad = () => {
  const navigation = useNavigation();
  const [activeMenu, setActiveMenu] = useState('Active');
  const [selectedDate, setSelectedDate] = useState('TODAY'); // Status to store the selected date

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'Pending') {
      navigation.navigate('LoadList');
    } else if (menu === 'Active') {
      navigation.navigate('ActiveLoad');
    } else if (menu === 'History') {
      navigation.navigate('Modal');
    }
  };

  const handleNavigateToDispatchList = () => {
    navigation.navigate('DispatchListStack', { screen: 'DispatchDetail' });
    navigation.navigate('DispatchListStack');
  };

  const dates = [
    { label: 'TODAY', date: '04 Dec' },
    { label: 'Tue', date: '06 Dec' },
    { label: 'Wed', date: '07 Dec' },
    { label: 'Thu', date: '08 Dec' },
    { label: 'Fri', date: '09 Dec' },
    { label: 'Sat', date: '10 Dec' },
    { label: 'Sun', date: '11 Dec' },
  ]; // Table of available dates

  const handleDateClick = (date) => {
    setSelectedDate(date); // Updates the selected date
  };

  return (
    <ScrollView>
    <View style={tw`flex-1`}>
      <View style={tw`flex`}>
        <View style={tw`flex`}>
          <View style={tw`flex-row justify-between border-b border-gray-300 py-3 px-4`}>
            <Pressable onPress={() => handleMenuClick('Pending')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-black font-bold text-center font-bold 
                ${activeMenu === 'Pending' ? ' text-blue-500  pb-1' : 'pb-1'}`}>Pending</Text>
                <View style={tw`rounded-full bg-yellow-300 w-6 h-6 ml-2 flex items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-bold`}>2</Text>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => handleMenuClick('Active')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-black font-bold text-center font-bold 
                ${activeMenu === 'Active' ? ' text-blue-500  pb-1' : 'pb-1'}`}>Active</Text>
                <View style={tw`rounded-full bg-green-400 w-6 h-6 ml-2 flex items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-bold`}>5</Text>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => handleMenuClick('History')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-black font-bold text-center font-bold 
                ${activeMenu === 'History' ? ' text-blue-500  pb-1' : 'pb-1'}`}>History</Text>
                <View style={tw`rounded-full bg-gray-500 w-6 h-6 ml-2 flex items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-bold`}>10</Text>
                </View>
              </View>
            </Pressable>
          </View>
          <View style={tw`flex-row justify-between px-1 ml-2 mr-2 mt-2 rounded-lg bg-white border border-gray-300`}>
          {dates.map((item) => (
              <Pressable key={item.label} onPress={() => handleDateClick(item.label)}>
                <View style={tw`flex-1 mt-2 mb-2 
                ${selectedDate === item.label ? 'rounded-md' : 'rounded-none'} 
                ${selectedDate === item.label ? 'bg-blue-900 px-1' : 'bg-white border-gray-300'}`}>
                  <View style={tw`py-2 items-center`}>
                    <Text style={tw`font-bold text-white ${selectedDate === item.label ? 'text-white' : 'text-black'}`}>{item.label}</Text>
                    <Text style={tw`${selectedDate === item.label ? 'text-white' : 'text-black'}`}>{item.date}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
          <View style={tw`flex`}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <View style={tw`flex-row justify-between`}>
                <View style={tw`bg-gray-200 w-11/12 mt-3 justify-between rounded-lg bg-white border border-gray-300`}>
                  <View style={tw`flex-row items-center justify-between px-4 py-2`}>
                    <Image
                      style={tw`w-4 h-4`}
                      source={require("../../assets/images/Vector(4).png")}
                    />
                    <Text style={tw`text-gray-500 font-bold`}>Nearby New Work</Text>
                    <Image
                      style={tw`w-4 h-4`}
                      source={require("../../assets/images/Vector(3).png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={tw`flex`}>
              <View style={tw`flex-row justify-between items-center px-4 py-2`}>
                <Text style={tw`text-blue-400 font-bold text-center font-bold`}>
                  <Text style={tw`mr-1`}>23 </Text>
                  Matching Load
                </Text>
                <View style={tw`flex-row items-center`}>
                  <Text style={tw`text-blue-400`}>Urgent Loads</Text>
                  <Image
                    style={tw`w-2 h-4 ml-1`}
                    source={require("../../assets/images/Vector(2).png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Pressable onPress={handleNavigateToDispatchList}>
            <View style={tw`flex justify-between px-2 ml-2 mr-2 rounded-lg bg-white border border-gray-300`}>
              <View style={tw`flex-row p-2 items-center justify-between`}>
                <View style={tw`flex-row items-center`}>
                  <Text style={tw`text-lg text-blue-500 font-bold`}>$ 2,300</Text>
                  <Text style={tw`text-sm ml-2`}>$1,45/MI</Text>
                </View>
                <View style={tw`flex flex-row items-center`}>
                    <Text style={tw`font-bold text-green-400 text-center`}>Pending</Text>
                </View>
              </View>
              <View style={tw`flex justify-between ml-1 mb-4`}>
                <View style={tw`flex-row items-center`}>
                  <FontAwesome name='map-pin' size={18} style={tw`mr-2 ml-1 text-green-600`} />
                  <View style={tw`flex-col ml-2`}>
                    <Text style={tw`text-sm font-bold`}>Oakland, CA</Text>
                    <Text style={tw`text-xs mt-1`}>Monday 04/12    12h14  PST</Text>
                  </View>
                </View>
                <View style={tw`flex-row ml-2 items-center`}>
                  <View style={tw`flex-col mr-1`}>
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4`} />
                  </View>
                </View>
                <View style={tw`flex-row items-center`}>
                  <MaterialIcons name='location-on' size={20} style={tw`text-red-400`} />
                  <View style={tw`flex-col ml-2`}>
                    <Text style={tw`text-sm font-bold`}>Brighton, OH</Text>
                    <Text style={tw`text-xs`}>Thursday 07/12    2h34  EST</Text>
                  </View>
                </View>
              </View>
              <View style={tw`flex-row items-center mb-4 bg-gray-400 rounded-lg`}>
                <Text style={tw`text-sm ml-3 mr-2`}>VAN - 23000 LBS</Text>
                <Text style={tw`text-sm ml-40`}>1,324 MI</Text>
              </View>
            </View>
          </Pressable>
          <Pressable onPress={handleNavigateToDispatchList}>
            <View style={tw`flex justify-between px-2 ml-2 mr-2 mt-2 rounded-lg bg-white border border-gray-300`}>
              <View style={tw`flex-row p-2 items-center justify-between`}>
                <View style={tw`flex-row items-center`}>
                  <Text style={tw`text-lg text-blue-500 font-bold`}>$ 2,300</Text>
                  <Text style={tw`text-sm ml-2`}>$1,45/MI</Text>
                </View>
                <View style={tw`flex flex-row items-center`}>
                    <Text style={tw`font-bold text-yellow-300 text-center`}>Dispatched</Text>
                </View>
              </View>
              <View style={tw`flex justify-between ml-1 mb-4`}>
                <View style={tw`flex-row items-center`}>
                  <FontAwesome name='map-pin' size={18} style={tw`mr-2 ml-1 text-green-600`} />
                  <View style={tw`flex-col ml-2`}>
                    <Text style={tw`text-sm font-bold`}>Oakland, CA</Text>
                    <Text style={tw`text-xs mt-1`}>Monday 04/12    12h14  PST</Text>
                  </View>
                </View>
                <View style={tw`flex-row ml-2 items-center`}>
                  <View style={tw`flex-col mr-1`}>
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4`} />
                  </View>
                </View>
                <View style={tw`flex-row items-center`}>
                  <MaterialIcons name='location-on' size={20} style={tw`text-red-400`} />
                  <View style={tw`flex-col ml-2`}>
                    <Text style={tw`text-sm font-bold`}>Brighton, OH</Text>
                    <Text style={tw`text-xs`}>Thursday 07/12    2h34  EST</Text>
                  </View>
                </View>
              </View>
              <View style={tw`flex-row items-center mb-4 bg-gray-400 rounded-lg`}>
                <Text style={tw`text-sm ml-3 mr-2`}>VAN - 23000 LBS</Text>
                <Text style={tw`text-sm ml-40`}>1,324 MI</Text>
              </View>
            </View>
          </Pressable>
          <Pressable onPress={handleNavigateToDispatchList}>
            <View style={tw`flex justify-between px-2 ml-2 mr-2 mb-5 mt-2 rounded-lg bg-white border border-gray-300`}>
              <View style={tw`flex-row p-2 items-center justify-between`}>
                <View style={tw`flex-row items-center`}>
                  <Text style={tw`text-lg text-blue-500 font-bold`}>$ 2,300</Text>
                  <Text style={tw`text-sm ml-2`}>$1,45/MI</Text>
                </View>
                <View style={tw`flex flex-row items-center`}>
                    <Text style={[tw`font-bold text-center`, { color: '#CE0053' }]}>Cancel</Text>
                </View>
              </View>
              <View style={tw`flex justify-between ml-1 mb-4`}>
                <View style={tw`flex-row items-center`}>
                  <FontAwesome name='map-pin' size={18} style={tw`mr-2 ml-1 text-green-600`} />
                  <View style={tw`flex-col ml-2`}>
                    <Text style={tw`text-sm font-bold`}>Oakland, CA</Text>
                    <Text style={tw`text-xs mt-1`}>Monday 04/12    12h14  PST</Text>
                  </View>
                </View>
                <View style={tw`flex-row ml-2 items-center`}>
                  <View style={tw`flex-col mr-1`}>
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                    <View style={tw`h-1 w-1 bg-gray-400 mr-4`} />
                  </View>
                </View>
                <View style={tw`flex-row items-center`}>
                  <MaterialIcons name='location-on' size={20} style={tw`text-red-400`} />
                  <View style={tw`flex-col ml-2`}>
                    <Text style={tw`text-sm font-bold`}>Brighton, OH</Text>
                    <Text style={tw`text-xs`}>Thursday 07/12    2h34  EST</Text>
                  </View>
                </View>
              </View>
              <View style={tw`flex-row items-center mb-4 bg-gray-400 rounded-lg`}>
                <Text style={tw`text-sm ml-3 mr-2`}>VAN - 23000 LBS</Text>
                <Text style={tw`text-sm ml-40`}>1,324 MI</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default ActiveLoad;