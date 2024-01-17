import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';

const LoadList = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };


  return (
    <ScrollView>
    <View style={tw`flex-1`}>
      <View style={tw`flex`}>
        <View style={tw`flex`}>
          <View style={tw`flex justify-between px-2 ml-2 mr-2 mt-3 bg-white shadow-lg rounded-lg`}>
            <View style={tw`flex-row p-2 items-center justify-between`}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-lg text-blue-500 font-bold`}>Dispatch #12345</Text>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <Pressable
                  style={tw`bg-blue-500 text-white px-4 py-1 rounded`}
                  onPress={() => navigation.navigate("DispatchDetail")}
                >
                  <Text style={tw`font-bold text-white`}>Open</Text>
                </Pressable>
              </View>
            </View>
            <View style={tw`flex justify-between mb-4`}>
              <View style={tw`flex-row mb-2`}>
                <View style={tw`flex-col ml-2`}>
                  <Text style={tw`text-sm font-bold`}>Pickup Location : AR Loading Dock</Text>
                  <Text style={tw`text-xs mt-1`}>Drop off location: MI, TX</Text>
                  <Text style={tw`text-sm font-bold`}>Status: In Transit</Text>
                </View>
              </View>
              <View style={tw`flex-row mt-2`}>
                <View style={tw`flex-col ml-2`}>
                  <Text style={tw`text-sm text-blue-500`}>View Load Documents</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <View style={tw`flex justify-between px-2 ml-2 mr-2 mt-3 bg-white shadow-lg rounded-lg`}>
            <View style={tw`flex-row p-2 items-center justify-between`}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-lg text-blue-500 font-bold`}>Dispatch #12345</Text>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <Pressable
                  style={tw`bg-blue-500 text-white px-4 py-1 rounded`}
                  onPress={() => navigation.navigate("ConfirmedLoad")}
                >
                  <Text style={tw`font-bold text-white`}>Open</Text>
                </Pressable>
              </View>
            </View>
            <View style={tw`flex justify-between mb-4`}>
              <View style={tw`flex-row mb-2`}>
                <View style={tw`flex-col ml-2`}>
                  <Text style={tw`text-sm font-bold`}>Pickup Location : AR Loading Dock</Text>
                  <Text style={tw`text-xs mt-1`}>Drop off location: MI, TX</Text>
                  <Text style={tw`text-sm font-bold`}>Status: In Transit</Text>
                </View>
              </View>
              <View style={tw`flex-row mt-2`}>
                <View style={tw`flex-col ml-2`}>
                  <Text style={tw`text-sm text-blue-500`}>View Load Documents</Text>
                </View>
              </View>
            </View>
          </View> */}

          <Text style={tw`text-lg font-bold mt-5 ml-2`}>Vehicule Managment</Text>

          <View style={tw`flex flex-row mt-2 p-2`}>
            <View style={tw`flex-1`}>
              <View style={tw`bg-white shadow-lg rounded-lg p-3`}>
                <Image
                    style={tw`w-36 h-20`}
                    source={require("../../assets/images/Truck2.png")}
                  />
                  <View style={tw`pt-5`}>
                    <Text style={tw`text-2xl font-bold`}>Truck 1</Text>
                    <Text style={tw`text-sm font-bold text-gray-500`}>License: ABC 123</Text>
                    <Text style={tw`text-sm font-bold text-gray-500`}>Mileage: 50,000 Miles</Text>
                  </View>
              </View>
            </View>
            <View style={tw`flex-1 ml-2`}>
              <View style={tw`bg-white shadow-lg rounded-lg p-3`}>
                <Image
                    style={tw`w-36 h-20`}
                    source={require("../../assets/images/Truck3.png")}
                  />
                  <View style={tw`pt-5`}>
                    <Text style={tw`text-2xl font-bold`}>Truck 2</Text>
                    <Text style={tw`text-sm font-bold text-gray-500`}>License: DEF 456</Text>
                    <Text style={tw`text-sm font-bold text-gray-500`}>Mileage: 30,000 Miles</Text>
                  </View>
                
              </View>
            </View>
          </View>

          <View style={tw`flex justify-between px-2 ml-2 mr-2 mt-3 bg-white shadow-lg rounded-lg`}>
            <View style={tw`flex-row p-2 items-center justify-between`}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-lg text-black font-bold`}>Work Orders And Repairs</Text>
              </View>
              {/* <View style={tw`flex flex-row items-center`}>
                <Pressable
                  style={tw`bg-blue-500 text-white px-4 py-1 rounded`}
                  onPress={() => navigation.navigate("ConfirmedLoad")}
                >
                  <Text style={tw`font-bold text-white`}>Open</Text>
                </Pressable>
              </View> */}
            </View>
            <View style={tw`mb-4`}>
              <View style={tw`flex-row mb-2 ml-2`}>
                <View style={tw`flex-row items-center justify-between`}>
                <Ionicons name="md-settings" size={24} color="#1fb6ff" style={tw`mb-1`} />
                  <View style={tw`flex-col ml-2`}>
                    <Text style={tw`text-sm font-bold`}>Repair 1</Text>
                    <Text style={tw`text-xs mt-1`}>Truck 1</Text>
                  </View>
                  <Text style={tw`text-sm ml-20 font-bold`}>Status: In progress</Text>
                </View>
              </View>
              {/* {expanded && ( */}
                <View style={tw`border-b-2 ml-10 border-gray-300 w-72`} />
              {/* )} */}
              <View style={tw`flex-row mb-2 ml-2 mt-1`}>
                <View style={tw`flex-row items-center justify-between`}>
                 <Ionicons name="md-settings" size={24} color="#1fb6ff" style={tw`mb-1`} />
                  <View style={tw`flex-col ml-2`}>
                    <Text style={tw`text-sm font-bold`}>Repair 2</Text>
                    <Text style={tw`text-xs mt-1`}>Truck 2</Text>
                  </View>
                  <Text style={tw`text-sm ml-20 font-bold`}>Status: In progress</Text>
                </View>
              </View>
               {expanded && (
               <View style={tw`border-b-2 ml-10 border-gray-300 w-72`} />
              )}
              {expanded && (
                <View style={tw`flex-row mb-2 ml-2 mt-1`}>
                  <View style={tw`flex-row items-center justify-between`}>
                   <Ionicons name="md-settings" size={24} color="#1fb6ff" style={tw`mb-1`} />
                    <View style={tw`flex-col ml-2`}>
                      <Text style={tw`text-sm font-bold`}>Repair 3</Text>
                      <Text style={tw`text-xs mt-1`}>Truck 3</Text>
                    </View>
                    <Text style={tw`text-sm ml-20 font-bold`}>Status: In progress</Text>
                  </View>
                </View>
              )}
             <TouchableOpacity onPress={toggleExpansion} style={tw`flex-row items-center`}>
              <Text style={tw`font-bold text-blue-500`}>{expanded ? 'View less' : 'View more'}</Text>
              <Ionicons
                name={expanded ? 'chevron-up' : 'chevron-down'}
                size={16}
                style={tw`ml-1 text-blue-500`}
              />
            </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default LoadList;