import * as React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons  } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const YardDashboard = () => {
  const navigation = useNavigation();

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
          <View style={[tw`bg-green-500 rounded-lg p-4 flex flex-col justify-between`, { backgroundColor: '#00D3AD' }]}>
            <Text style={tw`text-lg text-white`}>Total Yard Visited </Text>
            <Text style={tw`text-2xl font-bold text-white`}>35</Text>
          </View>
        </View>
        <View style={tw`flex-1 ml-2`}>
          <View style={tw`bg-yellow-300 rounded-lg p-4 flex flex-col justify-between`}>
            <Text style={tw`text-lg text-white`}>Average Rest Time </Text>
            <Text style={tw`text-2xl font-bold text-white`}>15</Text>
          </View>
        </View>
      </View>
      
      <Text style={tw`text-lg font-bold mt-6`}>Recent Visit</Text>
      <View style={tw`rounded-lg bg-white border border-gray-300 p-4 mt-2`}>
        <View style={tw`flex-row mt-1`}>
          <View style={tw`flex-row mb-4`}>
            <MaterialIcons name="location-on" size={28} color="#1867C0" />
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
            <MaterialIcons name="location-on" size={28} color="#1867C0" />
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
      <Text style={tw`text-lg font-bold mt-4`}>Incidents</Text>

      <View style={tw`rounded-lg bg-white border border-white p-4 mt-2`}>
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
        <View style={[tw`rounded-lg p-4 mt-4`, { backgroundColor: '#CE0053' }]}>
          <Text style={tw`text-lg text-white font-bold text-center`}>CALL DISPATCHER</Text>
        </View>
      </View>

      
      

    </View>
  </View>
</ScrollView>
  );
};

export default YardDashboard;
