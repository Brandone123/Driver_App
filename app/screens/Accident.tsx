import * as React from "react";
import { useState, useEffect } from 'react';
import { Pressable, View, Text, ScrollView, Image, TouchableOpacity, Modal,StyleSheet  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome  } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import { RadioButton } from 'react-native-paper';

const Accident = ({ isPopupOpen, closePopup }) => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [expandedIns, setExpandedIns] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const toggleExpansionInsurrance = () => {
    setExpandedIns(!expandedIns);
};
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };


  return (
        <Modal visible={isPopupOpen}  animationType="slide" transparent={true}>
            <View style={tw`bg-white rounded-lg absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center`}>
                <View style={tw`bg-white p-2 rounded-lg w-96 `}>
                    <View style={tw`flex flex-row items-center justify-between mb-2 w-full`}>
                        <Pressable onPress={closePopup} style={tw`absolute top-2 right-2`}>
                            <MaterialIcons name="close" size={24} color="gray" />
                        </Pressable>
                        <Text style={tw`text-xl items-center font-bold`}>Report Accident</Text>
                    </View>
                <ScrollView contentContainerStyle={tw`flex-grow`} style={{ maxHeight: 600 }}>
                    
                    <View style={tw`flex flex-row mt-2 p-2`}>
                        <View style={tw`flex-1`}>
                            <Pressable style={tw`py-2 px-2 mr-2 rounded-lg bg-white border border-gray-300`}>
                                <Text style={[tw`text-lg text-center font-bold`, {color: '#CE0053'}]}>Call Dispatcher</Text>
                            </Pressable>
                        </View>
                        <View style={tw`flex`}>
                            <Pressable style={tw`py-2 px-2 rounded-lg bg-white border border-gray-300`}>
                                <Text style={[tw`text-lg font-bold`, {color: '#CE0053'}]}>Emergency Contact</Text>
                            </Pressable>
                        </View>
                    </View>
                    <Text style={tw`text-sm text-center font-bold`}>To the best of your ability, complete the sections below and send this report to Company</Text>
                    <View style={tw`mt-2`}>
                        <Pressable style={tw`flex-row py-4 px-4 rounded-lg bg-white border border-gray-300`}>
                            <Ionicons name="checkmark-circle" size={30} color="#CE0053" />
                            <View style={tw`flex-1 ml-4`}>
                                <Text style={tw`text-lg font-bold`}>Injuries</Text>
                            </View>
                            <View style={tw``}>
                                <Ionicons name='chevron-down' size={33} style={[tw``, { color: '#CE0053' }]}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={tw`mt-2`}>
                        <Pressable style={tw`flex-row py-4 px-4 rounded-lg bg-white border border-gray-300`}>
                            <View style={{width: 25,height: 25,borderRadius: 15,borderWidth: 1,borderColor: 'gray',}}></View>
                            <View style={tw`flex-1 ml-4`}>
                                <Text style={tw`text-lg font-bold`}>Date, Time and Location</Text>
                            </View>
                            <View style={tw``}>
                                <Ionicons name='chevron-down' size={33} style={[tw``, { color: '#CE0053' }]}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={tw`mt-2 py-4 px-4 rounded-lg bg-white border border-gray-300`}>
                        <Pressable onPress={toggleExpansion} style={tw`flex-row`}>
                            <View style={{width: 25,height: 25,borderRadius: 15,borderWidth: 1,borderColor: 'gray',}}></View>
                            <View style={tw`flex-1 ml-4`}>
                                <Text style={tw`text-lg font-bold`}>Collision Details</Text>
                            </View>
                            <View style={tw``}>
                                <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'}
                                size={33}
                                style={[tw``, { color: '#CE0053' }]}/>
                            </View>
                        </Pressable>
                        {expanded && ( 
                        <View>
                            <View style={tw`flex-row`}>
                                <View style={tw`flex-1`}>
                                    <Text style={tw`text-sm mt-5`}>Is your vehicule driveable ?</Text>
                                </View>
                                <TouchableOpacity
                                        style={[
                                        tw`flex mt-3 py-1 px-2 rounded-lg bg-white border border-gray-300`,
                                        selectedOption === 'yes' && { backgroundColor: 'red' },
                                        { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
                                        ]}
                                    onPress={() => handleOptionSelect('yes')}>
                                    <Text style={tw`text-lg font-bold`}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                        style={[
                                        tw`flex mt-3 py-1 px-2 rounded-lg bg-white border border-gray-300`,
                                        selectedOption === 'no' && { backgroundColor: 'red' },
                                        { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
                                        ]}
                                    onPress={() => handleOptionSelect('no')}>
                                    <Text style={tw`text-lg font-bold`}>No</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={tw`flex-row`}>
                                <View style={tw`flex-1`}>
                                    <Text style={tw`text-sm mt-5`}>2 Vehicles involved </Text>
                                </View>
                                <TouchableOpacity
                                        style={[
                                        tw`flex mt-3 py-2 px-4 rounded-lg bg-white border border-gray-300`,
                                        { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
                                        ]}>
                                    <Text style={tw`text-lg font-bold`}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                        style={[
                                        tw`flex mt-3 py-2 px-4 rounded-lg bg-white border border-gray-300`,
                                        { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
                                        ]} >
                                    <Text style={tw`text-lg font-bold`}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        )}
                    </View>
                    <View style={tw`mt-2`}>
                        <Pressable style={tw`flex-row py-4 px-4 rounded-lg bg-white border border-gray-300`}>
                            <View style={{width: 25,height: 25,borderRadius: 15,borderWidth: 1,borderColor: 'gray',}}></View>
                            <View style={tw`flex-1 ml-4`}>
                                <Text style={tw`text-lg font-bold`}>Photos</Text>
                            </View>
                            <View style={tw``}>
                                <Ionicons name='chevron-down' size={33} style={[tw``, { color: '#CE0053' }]}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={tw`mt-2 py-4 px-4 rounded-lg bg-white border border-gray-300`}>
                        <Pressable onPress={toggleExpansionInsurrance} style={tw`flex-row`}>
                            <View style={{width: 25,height: 25,borderRadius: 15,borderWidth: 1,borderColor: 'gray',}}></View>
                            <View style={tw`flex-1 ml-4`}>
                                <Text style={tw`text-lg font-bold`}>Insurance Details</Text>
                            </View>
                            <View style={tw``}>
                                <Ionicons name={expandedIns ? 'chevron-up' : 'chevron-down'}
                                size={33}
                                style={[tw``, { color: '#CE0053' }]}/>
                            </View>
                        </Pressable>
                        {expandedIns && ( 
                        <View>
                            <View style={tw`flex-row`}>
                                <View style={tw`flex-1`}>
                                    <Text style={tw`text-sm mt-5`}>Is your vehicule driveable ?</Text>
                                </View>
                                <TouchableOpacity
                                        style={[
                                        tw`flex mt-3 py-1 px-2 rounded-lg bg-white border border-gray-300`,
                                        selectedOption === 'yes' && { backgroundColor: 'red' },
                                        { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
                                        ]}
                                    onPress={() => handleOptionSelect('yes')}>
                                    <Text style={tw`text-lg font-bold`}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                        style={[
                                        tw`flex mt-3 py-1 px-2 rounded-lg bg-white border border-gray-300`,
                                        selectedOption === 'no' && { backgroundColor: 'red' },
                                        { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
                                        ]}
                                    onPress={() => handleOptionSelect('no')}>
                                    <Text style={tw`text-lg font-bold`}>No</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={tw`flex-row`}>
                                <View style={tw`flex-1`}>
                                    <Text style={tw`text-sm mt-5`}>2 Vehicles involved </Text>
                                </View>
                                <TouchableOpacity
                                        style={[
                                        tw`flex mt-3 py-2 px-4 rounded-lg bg-white border border-gray-300`,
                                        { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
                                        ]}>
                                    <Text style={tw`text-lg font-bold`}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                        style={[
                                        tw`flex mt-3 py-2 px-4 rounded-lg bg-white border border-gray-300`,
                                        { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
                                        ]} >
                                    <Text style={tw`text-lg font-bold`}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        )}
                    </View>
                    <View style={tw`mt-6 mb-3`}>
                        <Pressable style={tw`flex-row py-4 px-4 rounded-lg bg-white border border-red-300`}>
                            <View style={tw`flex-1 ml-4`}>
                                <Text style={[tw`text-lg text-center font-bold`, {color: '#CE0053' }]}>Confirm Report Information</Text>
                            </View>
                        </Pressable>
                    </View>
                    </ScrollView>
                </View>
               
            </View>
        </Modal>
  );
};



export default Accident;
