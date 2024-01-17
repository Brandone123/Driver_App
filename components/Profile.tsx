import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import { MaterialIcons  } from '@expo/vector-icons';


const Profile = () => {
  const navigation = useNavigation();

  const handleNavigationBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
    <View style={tw`flex-1 relative mb-20`}>
        <View style={tw`flex`}>
            <View style={[tw`bg-blue-400 pb-20`]}>
                <View style={tw`flex-row pt-6`}>
                    <Pressable onPress={handleNavigationBack}>
                        <MaterialIcons name="keyboard-arrow-left" size={28} color="white" style={tw`pl-2`} />
                    </Pressable>
                    <Text style={tw`font-bold text-lg text-white ml-28 items-center`}>Profile</Text>
                </View>
                <View style={tw`flex ml-5 mb-4 mt-6`}>
                    <View style={tw`flex-row`}>
                        <Image style={tw`w-16 h-16 rounded-full`} source={require('./../assets/images/Ellipse.png')} />
                        <View style={tw`ml-4 mt-2`}>
                        <Text style={tw`text-xl font-bold text-white`}>John Doe</Text>
                        <Text style={tw`text-gray-500`}>Driver
                        (<Text style={tw`text-yellow-500`}>Active</Text> )</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={tw`flex absolute justify-between mt-40 px-2 pt-5 ml-2 mr-2 bg-white shadow-lg rounded-lg`}>
                <View style={tw`flex-row`}>
                    <Text style={tw`text-gray-500`}>Unpaid Earnings</Text>
                    <View style={tw`flex flex-row items-center ml-28`}>
                        <Pressable
                        style={tw`bg-blue-500 text-white px-4 py-1 rounded`}
                        onPress={() => navigation.navigate("YardMap")}
                        >
                        <Text style={tw`font-bold text-white`}>Request Time Off</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style={tw`font-bold text-lg `}>$550 .90</Text>
                <View style={tw`border-b-2 border-gray-300 mt-4 mb-4`}/>
                <View style={tw`flex-row`}>
                    <View style={tw`flex-col`}>
                        <Text style={tw`text-gray-500`}>Total Trips</Text>
                        <Text style={tw`text-lg font-bold`}>15</Text>
                    </View>
                    <View style={tw`flex-col`}>
                        <Text style={tw`text-gray-500 ml-14`}>Time Duration</Text>
                        <Text style={tw`text-lg font-bold ml-14`}>60h 20mins</Text>
                    </View>
                    <View style={tw`flex-col`}>
                        <Text style={tw`text-gray-500 ml-12`}>Total Distance</Text>
                        <Text style={tw`text-lg font-bold ml-12`}>600km</Text>
                    </View>
                </View>
                <Text style={tw`text-gray-500 mt-3 text-lg`}>Today</Text>
                <View style={tw`flex-row mt-2 mb-5`}>
                    <View style={tw`flex-col`}>
                        {["Mileage", "Duration", "Events", "Accident"].map((text, index) => {
                        const maxLength = 76; // Longueur maximale pour les textes
                        const dotsCount = maxLength - text.length;

                        const textWithDots = text + ".".repeat(dotsCount); // Ajoute les points de suspension
                        return (
                            <Text key={index} style={tw`mt-2`} numberOfLines={1}>{textWithDots}</Text>
                        );
                        })}
                    </View>
                    <View style={tw`flex-col`}>
                        {["47.8 KM", "2.2 Hr", "35", "No"].map((number, index) => (
                        <Text key={index} style={tw` mt-2`} numberOfLines={1}>{number}</Text>
                        ))}
                    </View>
                </View>
            </View>
            <View style={tw`flex justify-between mt-40 px-2 mt-72 ml-2 mr-2 bg-white shadow-lg rounded-lg`}>
                <View style={tw`flex-row`}>
                    <Text style={tw`text-lg font-bold`}>Safety And Compliance</Text>
                </View>
                <View style={tw`flex-row`}>
                    <View style={tw`flex-col`}>
                        <Text style={tw`text-gray-500`}>Score</Text>
                        <Text style={tw`font-bold text-lg`}>72</Text>
                    </View>
                    <View style={tw`flex-col ml-64`}>
                        <Text style={tw`text-gray-500`}>Last Week</Text>
                        <Text style={tw`font-bold text-lg`}>90</Text>
                    </View>
                    
                </View>
                <View style={tw`flex-row mt-2`}>
                    <View style={tw`flex-row`}>
                        <Text style={tw`font-bold text-lg `}>This Week</Text>
                        <View style={tw`w-5 h-5 text-center bg-blue-500 rounded-full ml-2`} />
                    </View>
                    <View style={tw`flex-row ml-10`}>
                        <Text style={tw`font-bold text-lg `}>Last Week</Text>
                        <View style={tw`w-5 h-5 bg-green-500 rounded-full ml-2`} />
                    </View>
                </View>
            
                <View style={tw`flex-row mt-2 mb-5`}>
                    <View style={tw`flex-col`}>
                        {["Sudden Acceleration", "Sudden Brake", "Sudden Move", "Sudden Turn", "Speeding", "Bumps and Pits"].map((text, index) => (
                        <Text key={index} style={tw`text-blue-500 mt-2`}>{text}</Text>
                        ))}
                    </View>
                    <View style={tw`flex-col`}>
                        {[7, 6, 2, 1, 23, 34].map((number, index) => (
                        <Text key={index} style={tw`text-blue-500 ml-44 mt-2`}>{number}</Text>
                        ))}
                    </View>
                    <View style={tw`flex-col`}>
                        {[10, 4, 8, 1, 29, 37].map((number, index) => (
                        <Text key={index} style={tw`text-green-500 mt-2 ml-2`}>{number}</Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    </View>
    
    </ScrollView>
  );
};

export default Profile;