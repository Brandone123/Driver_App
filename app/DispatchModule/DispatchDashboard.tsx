import * as React from "react";
import { useState, useEffect } from 'react';
import { Pressable, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome  } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import Toast from 'react-native-root-toast';
import Accident from "../screens/Accident";
import PopupProfile from "../../components/PopupProfile";

const CustomToast = ({ message, icon, onClose, iconColor }) => {

  // handleNotifClick calling from PopupProfile page
  const handleNotifClick = () => {
    PopupProfile.handleNotifClick();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <View style={tw`flex-row rounded-lg`}>
      <View style={tw`mr-2 mt-2`}>
        <FontAwesome name={icon} size={30} color={iconColor} />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={handleNotifClick}>
          <Text style={tw`text-white`}>{message}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleClose} style={tw`ml-3`}>
        <FontAwesome name="times" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const DispatchDashboard = () => {
  const navigation = useNavigation();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [expandedrecent, setExpandedRecent] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const closePopup = () => {
    setPopupOpen(false);
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const toggleExpansionRecent = () => {
    setExpandedRecent(!expandedrecent);
  };

  const addMessage = (text, icon, iconColor ) => {
    setMessages([...messages, { text, icon, iconColor }]);
  };

  useEffect(() => {
    addMessage('Upcoming Maintenance Schedule \nScheduled on Feb 20, 2024 \n10:00 am - 1:20 pm', 'exclamation-circle', '#CE0053');
    setTimeout(() => {
      addMessage('Your Next Stop is about 30min \nRosetta knolls, New Abiland \n10:00 am - 1:20 pm', 'clock-o', 'white');
    }, 8000);
    setTimeout(() => {
      addMessage('Upcoming Maintenance Schedule \nScheduled on Feb 20, 2024 \n10:00 am - 1:20 pm', 'exclamation-triangle', '#FFA500');
    }, 12000);
  }, []);

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const message = messages[currentMessageIndex];

      const handleClose = () => {
        setCurrentMessageIndex(currentMessageIndex + 1);
      };

      // Afficher le toast personnalisé
      Toast.show(
        <CustomToast message={message.text} icon={message.icon} onClose={handleClose} iconColor={message.iconColor} />,       
        {
          // duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          // hideOnPress: true,
          // delay: 0,
          containerStyle: {
            backgroundColor: '#4975B8',
            // paddingHorizontal: 20,
            // paddingVertical: 10,
            marginTop: 100,
          },
          opacity: 1,
          textStyle: {
            color: 'white',
          },
      });
      
    }
  }, [currentMessageIndex, messages]);

  return (
    <ScrollView>
    <View style={tw`bg-gray-100`}>
      <View style={tw`p-2`}>
      <View style={tw`p-2 flex flex-row justify-between`}>
        <View>
          <Text style={tw`text-lg`}>Hello,</Text>
          <Text style={tw`text-2xl font-bold`}>Mr. Kunah</Text>
          <Text style={tw`text-lg`}>Dec 04, 2023</Text>
        </View>
        <View style={tw`ml-auto`}>
          <Image
            style={tw`w-40 h-10`}
            source={require("../../assets/images/Logo_Moon_Star.png")}
          />
        </View>
      </View>
      <View style={tw`flex flex-row`}>
        <View style={tw`flex-1`}>
          <View style={[tw`rounded-lg bg-white border border-white p-4 flex flex-col justify-between`, { backgroundColor: '#00D3AD' }]}>
            <Text style={tw`text-lg text-white`}>Total Loads </Text>
            <Text style={tw`text-2xl font-bold text-white`}>35</Text>
          </View>
        </View>
        <View style={tw`flex-1 ml-2`}>
          <View style={[tw`rounded-lg bg-white border border-white p-4 flex flex-col justify-between`, { backgroundColor: '#6C52CD' }]}>
            <Text style={tw`text-lg text-white`}>Total Milles</Text>
            <Text style={tw`text-2xl font-bold text-white`}>27,000 MI</Text>
          </View>
        </View>
       
      </View>
      <View style={tw`flex flex-row`}>
        <View style={tw`flex-1`}>
          <View style={[tw`rounded-lg bg-white border border-white p-4 mt-4 flex flex-col justify-between`, { backgroundColor: '#CE0053' }]}>
            <Text style={tw`text-lg text-white`}>Total Rejected Load</Text>
            <Text style={tw`text-2xl font-bold text-white`}>05</Text>
          </View>
        </View>
        <View style={tw`flex-1 ml-2`}>
          <View style={tw`bg-yellow-300 rounded-lg border border-white mt-4 p-4 flex flex-col justify-between`}>
            <Text style={tw`text-lg text-white`}>Total reserved Load</Text>
            <Text style={tw`text-2xl font-bold text-white`}>15</Text>
          </View>
        </View>
      </View>
      
      <View style={tw`flex flex-row mt-4`}>
        <View style={tw`flex-1`}>
          <View style={tw`bg-white rounded-lg border border-gray-300 p-6`}>
            <Text style={tw`text-2xl font-bold text-center`}>59%</Text>
            <Text style={tw`text-lg text-center`}>Productivity</Text>
            <View style={tw`ml-auto`}>
              <Image
                style={tw`w-36 h-11`}
                source={require("../../assets/images/Vector_courbe.png")}
              />
            </View>
          </View>
        </View>
        <View style={tw`flex-1 ml-2`}>
          <View style={tw`bg-white rounded-lg border border-gray-300 p-6`}>
            <Text style={tw`text-2xl font-bold text-center`}>73%</Text>
            <Text style={tw`text-lg text-center`}>Proficiency</Text>
            <View style={tw`ml-auto`}>
              <Image
                style={tw`w-36 h-11`}
                source={require("../../assets/images/Vector_courbe1.png")}
              />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={toggleExpansion} style={tw`flex-row items-center`}>
        <View style={tw`flex-row items-center`}>
          <Text style={[tw`text-xl font-bold mt-5 flex-1`, { color: '#4975B8' }]}>Current Dispatch</Text>
          <Ionicons
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={33}
            style={[tw`mt-4`, { color: '#4975B8' }]}
          />
        </View>
      </TouchableOpacity>
      
      {!expanded && (
      <View style={tw`flex justify-between mt-2 pt-2 rounded-lg bg-white border border-gray-300`}>
        <View style={tw`flex-row justify-between px-2 pt-2 ml-1`}>
          <View style={tw`flex justify-between mb-4`}>
            <View style={tw`flex-row mb-2 items-center`}>
              <FontAwesome name='map-pin' size={18} style={tw`mr-2 ml-1 text-green-600`} />
              <View style={tw`flex-col ml-2`}>
                <Text style={tw`text-sm font-bold`}>Oakland, CA</Text>
                <Text style={tw`text-xs mt-1`}>Aug 3, 10am </Text>
              </View>
            </View>
            <View style={tw`flex-row mb-1 ml-2 items-center`}>
              <View style={tw`flex-col mr-1`}>
                <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
                <View style={tw`h-1 w-1 bg-gray-400 mr-4 mb-1`} />
              </View>
              
              <Text style={tw`text-xs mr-2`}>320 mi</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <MaterialIcons name='location-on' size={20} style={tw`text-red-400`} />
              <View style={tw`flex-col ml-2`}>
                <Text style={tw`text-sm font-bold`}>Brighton, OH</Text>
                <Text style={tw`text-xs`}>Aug 4, 8am - 5pm</Text>
              </View>
            </View>
          </View>
          <View style={tw`flex justify-between mr-10`}>
            <View style={tw`flex-row`}>
              <MaterialIcons name='fastfood' size={22} style={tw`text-gray-300`}/>
              <Text style={tw`text-sm ml-3 font-bold`}>Food 1,2k lbs</Text>
            </View>
            <View style={tw`flex-row mt-2`}>
              <MaterialIcons name='monetization-on' size={22} style={tw`text-gray-300`}/>
              <Text style={tw`text-sm ml-3 font-bold`}>$ 2000</Text>
            </View>
            <View style={tw`flex`}>
              <TouchableOpacity onPress={() => setPopupOpen(true)}>
                <View style={tw`px-2 py-1 mt-2 rounded bg-red-200`}>
                  <Text style={tw`text-xs`}>Add Incident or Accident</Text>
                </View>
              </TouchableOpacity>
              <View style={tw`px-2 py-1 mt-2 rounded bg-gray-200`}>
                <Text style={tw`text-xs`}>Overnight Parking</Text>
              </View>
            </View>
            {isPopupOpen && <Accident isPopupOpen={isPopupOpen} closePopup={closePopup} />}
          </View>
        </View>
        <View style={tw`flex flex-row mt-2`}>
        <View style={tw`flex-grow`} />
        <Pressable
          style={[tw`px-2 py-1 items-center`, 
          { backgroundColor: '#4975B8', borderTopLeftRadius: 8, borderBottomRightRadius: 8 }]}
          onPress={() => navigation.navigate("DispatchMap")}>
          <Ionicons name='arrow-forward' size={33} style={tw`text-white`} />
        </Pressable>
        </View>
      </View>
       )}
      <TouchableOpacity onPress={toggleExpansionRecent} style={tw`flex-row items-center`}>
        <View style={tw`flex-row items-center`}>
          <Text style={[tw`text-xl font-bold mt-5 flex-1`, { color: '#4975B8' }]}>Recent Dispatch</Text>
          <Ionicons
            name={expandedrecent ? 'chevron-up' : 'chevron-down'}
            size={33}
            style={[tw`mt-4`, { color: '#4975B8' }]}
          />
        </View>
      </TouchableOpacity>

      {!expandedrecent && (
      <View style={tw`rounded-lg bg-white border border-gray-300 p-4 mt-2`}>
        <View style={tw`flex-row mt-1`}>
          <View style={tw`flex-row mb-4`}>
            <MaterialIcons name="location-on" size={28} color="#4975B8" />
            <View style={tw`flex-col ml-4`}>
              <Text style={tw`text-sm font-bold`}>7085 Rosetta knolls, New Abiland, ND, HT</Text>
              <Text style={tw`text-sm text-gray-500`}>04/12/2023  7h00</Text>
            </View>
            <Image
                style={tw`w-8 h-8 ml-2`}
                source={require("../../assets/images/Ellipse.png")}
              />
          </View>
        </View>
        <View style={tw`flex-row mt-1`}>
          <View style={tw`flex-row mb-4`}>
            <MaterialIcons name="location-on" size={28} color="#4975B8" />
            <View style={tw`flex-col ml-4`}>
              <Text style={tw`text-sm font-bold`}>7085 Rosetta knolls, New Abiland, ND, HT</Text>
              <Text style={tw`text-sm text-gray-500`}>04/12/2023  7h00</Text>
            </View>
            <Image
                style={tw`w-8 h-8 ml-2`}
                source={require("../../assets/images/Ellipse.png")}
              />
          </View>
        </View>
      </View>
      )}

      <Text style={tw`text-xl font-bold mt-4`}>Incidents</Text>
      <View style={tw`rounded-lg bg-white border border-gray-300 p-4 mt-2`}>
        <View style={tw`mb-4`}>
          <View style={[tw`flex-row p-1 border-b border-gray-400`, { backgroundColor: '#A6ABBD' }]}>
            <View style={tw`flex-1`}>
              <Text style={tw`text-lg font-bold`}>Priority</Text>
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`text-lg font-bold`}>Description</Text>
            </View>
            <View style={tw`flex-1 left-7`}>
              <Text style={tw`text-lg font-bold`}>Location</Text>
            </View>
          </View>
          <View style={tw`flex-row bg-white p-2 border-b border-gray-200`}>
            <View style={tw`flex-1`}>
              <MaterialIcons name="lightbulb-outline" size={25} style={[{color: '#CE0053'}]} />
              <Text style={[tw`font-bold text-red-500`, { color: '#CE0053' }]}>High</Text>
            </View>
            <View style={tw`flex-1`}>
              <Text>Person with a knife</Text>
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`text-right`}>E Madison & 16th</Text>
            </View>
          </View>
          <View style={tw`flex-row bg-white p-2 border-b border-gray-200`}>
            <View style={tw`flex-1`}>
              <MaterialIcons name="lightbulb-outline" size={25} style={tw`text-yellow-300`} />
              <Text style={tw`font-bold text-yellow-300`}>Med</Text>
            </View>
            <View style={tw`flex-1`}>
              <Text>Found Property</Text>
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`text-right`}>E Madison & 16th</Text>
            </View>
          </View>
          <View style={tw`flex-row p-2 border-b border-gray-200`}>
            <View style={tw`flex-1`}>
              <MaterialIcons name="lightbulb-outline" size={25} style={[{ color: '#A6ABBD'}]} />
              <Text style={[tw`font-bold text-gray-500`, { color: '#A6ABBD'}]}>Low</Text>
            </View>
            <View style={tw`flex-1`}>
              <Text>Animal, Vicious</Text>
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`text-right`}>E Madison & 16th</Text>
            </View>
          </View>
        </View>
        <View style={[tw`rounded-lg  border border-gray-300 p-4 mt-4`, { backgroundColor: '#CE0053' }]}>
          <Text style={tw`text-lg text-white font-bold text-center`}>CALL DISPATCHER</Text>
        </View>
      </View>
    </View>
  </View>
</ScrollView>
  );
};

export default DispatchDashboard;
