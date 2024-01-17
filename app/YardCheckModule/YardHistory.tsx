import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import { MaterialIcons  } from '@expo/vector-icons';

const YardHistory = () => {
  const navigation = useNavigation();
  const [activeMenu, setActiveMenu] = useState('History');
  
  
  const [currentPage, setCurrentPage] = useState(0);
  const pages = ['1', '2', '3']; // Tableau des numéros de page

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const handleMenuClick = (menu) => {
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
            <Pressable onPress={() => handleMenuClick('Yards')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-black font-bold text-center font-bold ${activeMenu === 'Yards' ? 'text-blue-500' : ''}`}>Yards</Text>
                <View style={tw`rounded-full bg-yellow-500 w-6 h-6 ml-2 flex items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-bold`}>12</Text>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => handleMenuClick('History')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-black font-bold text-center font-bold ${activeMenu === 'History' ? 'text-blue-500' : ''}`}>History</Text>
                <View style={tw`rounded-full bg-green-500 w-6 h-6 ml-2 flex items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-bold`}>5</Text>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => handleMenuClick('Report Problem')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-black font-bold text-center font-bold ${activeMenu === 'Report Problem' ? 'text-blue-500' : ''}`}>Report Problem</Text>
                <View style={tw`rounded-full bg-gray-500 w-6 h-6 ml-2 flex items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-bold`}>10</Text>
                </View>
              </View>
            </Pressable>
          </View>
          
          <View style={tw`flex`}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <View style={tw`flex-row justify-between`}>
                <View style={tw`bg-gray-200 w-11/12 mt-3 justify-between bg-white shadow-lg rounded-lg`}>
                  <View style={tw`flex-row justify-between px-4 py-2`}>
                    <Image
                      style={tw`w-4 h-4`}
                      source={require("../../assets/images/Vector(4).png")}
                    />
                    <Text style={tw`text-gray-400`}>Search a specific yard</Text>
                    <Image
                      style={tw`w-4 h-4`}
                      source={require("../../assets/images/Vector(3).png")}
                    />
                  </View>
                </View>
              </View>
            </View>
           
          </View>
          <View style={tw`flex justify-between px-2 mt-2 ml-2 mr-2 bg-white shadow-lg rounded-lg`}>
            <View style={tw`bg-green-500 h-full w-2 absolute  rounded-l-lg left-0`} />
            <View style={tw`relative`}>
                <View style={tw`flex-row p-1 ml-1 items-center justify-between`}>
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-lg text-blue-500 font-bold`}>Yard #63554</Text>
                        <Text style={tw`text-sm text-gray-400 ml-24`}>39.284176/-76.622368</Text>
                    </View>
                </View>
                <View style={tw`flex-row mb-1 pl-2`}>
                    <View style={tw`flex-col`}>
                        <Text style={tw`text-sm`}>Address: Rue 23</Text>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm`}>Slot: 50</Text>
                        <Text style={tw`text-sm ml-3`}>Vacant slot: 5</Text>
                        </View>
                        <Text style={tw`text-sm font-bold`}>
                        Status: <Text style={tw`text-green-500`}>Open</Text>
                        </Text>
                    </View>
                </View>
                <View style={tw`flex-row mb-1 pl-2 mt-2`}>
                    <View style={tw`flex-col`}>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm`}>Latest visit</Text>
                        <Text style={tw`text-sm ml-16`}>Last parking used</Text>
                        </View>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm text-gray-400`}>05/12/2023  12H24</Text>
                        <Text style={tw`text-sm ml-2 text-gray-400`}>Slot 5</Text>
                        </View>
                    </View>
                </View>
            </View>
          </View>
          <View style={tw`flex justify-between px-2 mt-2 ml-2 mr-2 bg-white shadow-lg rounded-lg`}>
            <View style={tw`bg-red-500 h-full w-2 absolute  rounded-l-lg left-0`} />
            <View style={tw`relative`}>
                <View style={tw`flex-row p-1 ml-1 items-center justify-between`}>
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-lg text-blue-500 font-bold`}>Yard #63554</Text>
                        <Text style={tw`text-sm text-gray-400 ml-24`}>39.284176/-76.622368</Text>
                    </View>
                </View>
                <View style={tw`flex-row mb-1 pl-2`}>
                    <View style={tw`flex-col`}>
                        <Text style={tw`text-sm`}>Address: Rue 23</Text>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm`}>Slot: 50</Text>
                        <Text style={tw`text-sm ml-3`}>Vacant slot: 5</Text>
                        </View>
                        <Text style={tw`text-sm font-bold`}>
                        Status: <Text style={tw`text-red-500`}>Closed</Text>
                        </Text>
                    </View>
                </View>
                <View style={tw`flex-row mb-1 pl-2 mt-2`}>
                    <View style={tw`flex-col`}>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm`}>Latest visit</Text>
                        <Text style={tw`text-sm ml-16`}>Last parking used</Text>
                        </View>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm text-gray-400`}>05/12/2023  12H24</Text>
                        <Text style={tw`text-sm ml-2 text-gray-400`}>Slot 5</Text>
                        </View>
                    </View>
                </View>
            </View>
          </View>
          <View style={tw`flex justify-between px-2 mt-2 ml-2 mr-2 bg-white shadow-lg rounded-lg`}>
            <View style={tw`bg-yellow-500 h-full w-2 absolute  rounded-l-lg left-0`} />
            <View style={tw`relative`}>
                <View style={tw`flex-row p-1 ml-1 items-center justify-between`}>
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-lg text-blue-500 font-bold`}>Yard #63554</Text>
                        <Text style={tw`text-sm text-gray-400 ml-24`}>39.284176/-76.622368</Text>
                    </View>
                </View>
                <View style={tw`flex-row mb-1 pl-2`}>
                    <View style={tw`flex-col`}>
                        <Text style={tw`text-sm`}>Address: Rue 23</Text>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm`}>Slot: 50</Text>
                        <Text style={tw`text-sm ml-3`}>Vacant slot: 5</Text>
                        </View>
                        <Text style={tw`text-sm font-bold`}>
                        Status: <Text style={tw`text-yellow-500`}>Restricted</Text>
                        </Text>
                    </View>
                </View>
                <View style={tw`flex-row mb-1 pl-2 mt-2`}>
                    <View style={tw`flex-col`}>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm`}>Latest visit</Text>
                        <Text style={tw`text-sm ml-16`}>Last parking used</Text>
                        </View>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm text-gray-400`}>05/12/2023  12H24</Text>
                        <Text style={tw`text-sm ml-2 text-gray-400`}>Slot 5</Text>
                        </View>
                    </View>
                </View>
            </View>
          </View>
          <View style={tw`flex justify-between px-2 mt-2 ml-2 mr-2 bg-white shadow-lg rounded-lg`}>
            <View style={tw`bg-green-500 h-full w-2 absolute  rounded-l-lg left-0`} />
            <View style={tw`relative`}>
                <View style={tw`flex-row p-1 ml-1 items-center justify-between`}>
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-lg text-blue-500 font-bold`}>Yard #63554</Text>
                        <Text style={tw`text-sm text-gray-400 ml-24`}>39.284176/-76.622368</Text>
                    </View>
                </View>
                <View style={tw`flex-row mb-1 pl-2`}>
                    <View style={tw`flex-col`}>
                        <Text style={tw`text-sm`}>Address: Rue 23</Text>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm`}>Slot: 50</Text>
                        <Text style={tw`text-sm ml-3`}>Vacant slot: 5</Text>
                        </View>
                        <Text style={tw`text-sm font-bold`}>
                        Status: <Text style={tw`text-green-500`}>Open</Text>
                        </Text>
                    </View>
                </View>
                <View style={tw`flex-row mb-1 pl-2 mt-2`}>
                    <View style={tw`flex-col`}>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm`}>Latest visit</Text>
                        <Text style={tw`text-sm ml-16`}>Last parking used</Text>
                        </View>
                        <View style={tw`flex-row`}>
                        <Text style={tw`text-sm text-gray-400`}>05/12/2023  12H24</Text>
                        <Text style={tw`text-sm ml-2 text-gray-400`}>Slot 5</Text>
                        </View>
                    </View>
                </View>
            </View>
          </View>
          <View style={tw`flex items-center justify-center`}>
            <View style={tw`flex-row items-center mt-4 mb-5`}>
              {currentPage > 0 && (
                <TouchableOpacity onPress={() => changePage(currentPage - 1)}>
                  <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                </TouchableOpacity>
              )}
              {pages.map((page, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => changePage(index)}
                  style={[
                    tw`py-1 px-2 border border-gray-300 rounded-full mx-2`,
                    currentPage === index && tw`bg-blue-500`,
                  ]}
                >
                  <Text
                    style={[
                      tw`text-white`,
                      currentPage === index && tw`text-white`,
                    ]}
                  >
                    {page}
                  </Text>
                </TouchableOpacity>
              ))}
              {currentPage < pages.length - 1 && (
                <TouchableOpacity onPress={() => changePage(currentPage + 1)}>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
    
    </ScrollView>
  );
};

export default YardHistory;