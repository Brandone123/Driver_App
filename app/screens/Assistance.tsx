import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';

const Assistance = () => {
  const navigation = useNavigation();

  return (
    <View>
        <Text style={tw`text-black text-base text-center mt-2`}>Assistance List</Text>
        
    </View>
  );
};



export default Assistance;
