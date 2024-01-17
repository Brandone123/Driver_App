import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import { MaterialIcons  } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const DispatchDetail = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  return (
    <ScrollView>
    <View style={tw`flex-1`}>
      <View style={tw`flex`}>
        <View style={tw`flex`}>
        <View style={tw`flex justify-between px-2 mt-2 ml-2 pt-3 mr-2 rounded-lg bg-white border border-gray-300`}>
            <View style={tw`flex-row mb-1 ml-1 items-center`}>
                
                <Text style={tw`text-lg text-blue-500 font-bold`}>Dispatch #12345</Text>
                <MaterialIcons name="error" size={28} color="#1867C0" style={tw`ml-44`} />
                
            </View>
            <View style={tw`flex mb-1 ml-1`}>
                <Text style={tw`text-sm`}>Pickup Location: AR Loading Dock</Text>
                <Text style={tw`text-sm`}>Drop off location: MI, TX</Text>
                <View style={tw`flex-row mb-1`}>
                    <Text style={tw`text-sm`}>Dispatcher: </Text>
                    <Text style={tw`text-sm text-blue-500`}>Smith John</Text>
                </View>
                <View style={tw`flex-row mb-1`}>
                    <Text style={tw`text-sm`}>Vehicule: </Text>
                    <TouchableOpacity onPress={openPopup}>
                        <Text style={tw`text-sm text-blue-500`}>Truck 1</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`mb-1`}>
                     <Text style={tw`text-sm mt-2 text-blue-500`}>Upload Load Document</Text>
                     <Text style={tw`text-sm mt-2 text-blue-500`}>View Load Document</Text>
                </View>
               
            </View>
            <View style={tw`border-b border-gray-300 mt-4 mb-4`} />
            <View style={tw`flex-row items-center mb-4`}>
                <View style={tw`relative`}>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1`}>Scheduled start time</Text>
                        <Text style={tw`text-sm ml-9`}>Duration</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1 text-gray-500`}>29/11/2023 at 2:39 PM</Text>
                        <Text style={tw`text-sm ml-5 text-gray-500`}>15 Hours</Text>
                    </View>
                    
                </View>
                <View style={tw`flex`}>
                   <MaterialIcons name="more-vert" size={28} color="#1867C0" style={tw`ml-24`} />
                </View>
            </View>
        </View>
        <View style={tw`flex justify-between px-2 mt-2 ml-2 pt-3 mr-2 rounded-lg bg-white border border-gray-300`}>
            <View style={tw`flex-row items-center mb-4`}>
                <View style={tw`relative`}>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1 text-blue-500`}>Current step: 1/3</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1 text-yellow-500`}>en route</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1 text-gray-500`}>No Address</Text>
                    </View>
                    
                </View>
                {/* <Link href="/DispatchModule/DispatchMap">
                    <View style={tw`flex`}>
                        <MaterialIcons name="arrow-right" size={38} color="gray" style={tw`ml-52`} />
                    </View>
                </Link> */}
                <Pressable onPress={() => navigation.navigate("DispatchMap")}>
                    <View style={tw`flex`}>
                        <MaterialIcons name="arrow-right" size={38} color="gray" style={tw`ml-52`} />
                    </View>
                </Pressable>
                
            </View>
            <View style={tw`border-b border-gray-300 mb-2`} />
            <View style={tw`flex-row items-center mb-4`}>
                <View style={tw`flex-row mb-3 pl-2 mt-2`}>
                    <TouchableOpacity style={[tw`py-1 px-2 rounded-lg bg-red-500`, { backgroundColor: '#CE0053' }]}>
                        <Text style={tw`text-white`}>0/5 REQUIRED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`py-1 px-2 rounded-lg bg-green-400 ml-2`}>
                        <Text style={tw`text-white`}>2/5 COMPLETED</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={tw`py-1 px-2 rounded-lg bg-gray-500 ml-2`}>
                        <Text style={tw`text-white`}>14 TOTAL</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
        <View style={tw`flex justify-between px-2 mt-2 ml-2 pt-3 mr-2 rounded-lg bg-white border border-gray-300`}>
            <View style={tw`flex-row items-center mb-4`}>
                <View style={tw`relative`}>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1 text-blue-500`}>Fields: 1/10</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1`}>Pick up Time</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1 text-gray-500`}>29/11/2023 at 3:00 pm</Text>
                    </View>
                    
                </View>
                <View style={tw`flex`}>
                   <MaterialIcons name="arrow-right" size={38} color="gray" style={tw`ml-44`} />
                </View>
            </View>
            <View style={tw`border-b border-gray-300 mb-2`} />
            <View style={tw`flex-row items-center mb-4`}>
                <View style={tw`relative`}>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1`}>No Notes</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-sm ml-1 text-gray-500`}>This Dispatch has no note</Text>
                    </View>
                    
                </View>
            </View>
        </View>
        <View style={tw`flex-row mb-5 pl-2 mt-2`}>
            <TouchableOpacity style={tw`py-3 px-3 rounded-lg bg-gray-400`}>
                <Text style={tw`text-white text-xl`}>Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`py-3 px-3 rounded-lg bg-gray-400 ml-2`}>
                <Text style={tw`text-white text-xl`}>Sign & Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`py-3 px-3 rounded-lg bg-gray-400 ml-2`}>
                <MaterialIcons name="add" size={38} color="white" />
            </TouchableOpacity>
        </View>
        <Modal visible={isPopupOpen}  animationType="slide" transparent={true}>
            <View style={tw`bg-white rounded-lg absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center`}>
                <View style={tw`bg-white p-2 rounded-lg w-80`}>
                    <Pressable style={tw`absolute top-2 right-2`} onPress={closePopup}>
                        <MaterialIcons name="close" size={24} color="gray" />
                    </Pressable>
                    <Text style={tw`text-lg font-bold mt-5 ml-2`}>Vehicule Managment</Text>
                    <View style={tw`flex flex-row mt-2 p-2`}>
                        <View style={tw`flex-1`}>
                            <View style={tw`bg-white  items-center`}>
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
                       
                    </View>
                    <View style={tw`flex justify-between mb-5 px-2 ml-2 mr-2 mt-3 rounded-lg bg-white border border-gray-300`}>
                        <View style={tw`flex-row p-2 items-center justify-between`}>
                            <View style={tw`flex-row items-center`}>
                                <Text style={tw`text-lg text-black font-bold`}>Work Orders And Repairs</Text>
                            </View>
                        </View>
                        <View style={tw`mb-4`}>
                            <View style={tw`flex-row mb-2 ml-2`}>
                                <View style={tw`flex-row items-center justify-between`}>
                                <Ionicons name="md-settings" size={24} color="#1867C0" style={tw`mb-1`} />
                                <View style={tw`flex-col ml-2`}>
                                    <Text style={tw`text-sm font-bold`}>Repair 1</Text>
                                    <Text style={tw`text-xs mt-1`}>Truck 1</Text>
                                </View>
                                <Text style={tw`text-sm ml-16 font-bold`}>Status: In progress</Text>
                            </View>
                        </View>
                        <View style={tw`border-b-2 ml-10 border-gray-300 `} />
                        <View style={tw`flex-row mb-2 ml-2 mt-1`}>
                            <View style={tw`flex-row items-center justify-between`}>
                            <Ionicons name="md-settings" size={24} color="#1867C0" style={tw`mb-1`} />
                            <View style={tw`flex-col ml-2`}>
                                <Text style={tw`text-sm font-bold`}>Repair 2</Text>
                                <Text style={tw`text-xs mt-1`}>Truck 1</Text>
                            </View>
                            <Text style={tw`text-sm ml-16 font-bold`}>Status: Completed</Text>
                            </View>
                        </View>
                        {expanded && (
                        <View style={tw`border-b-2 ml-10 border-gray-300`} />
                        )}
                        {expanded && (
                            <View style={tw`flex-row mb-2 ml-2 mt-1`}>
                            <View style={tw`flex-row items-center justify-between`}>
                            <Ionicons name="md-settings" size={24} color="#1867C0" style={tw`mb-1`} />
                                <View style={tw`flex-col ml-2`}>
                                <Text style={tw`text-sm font-bold`}>Repair 3</Text>
                                <Text style={tw`text-xs mt-1`}>Truck 1</Text>
                                </View>
                                <Text style={tw`text-sm ml-16 font-bold`}>Status: In progress</Text>
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
          </Modal>
        </View>
      </View>
    </View>
    
    </ScrollView>
  );
};

export default DispatchDetail;