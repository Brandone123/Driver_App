import React, {useEffect, useRef } from "react";
import { useContext } from 'react';
import { Image, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'tailwind-react-native-classnames';
import ModuleContext from "../ModuleContext";
import Toast from 'react-native-toast-message';

const Modal = () => {
  const navigation = useNavigation();
  const { selectedModule, setSelectedModule } = useContext(ModuleContext);

  const handleModuleSelection = (module) => {
    setSelectedModule(module);
    navigation.navigate('ModuleElements', { selectedModule: module });
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Image
        style={tw`w-full h-full absolute top-0 left-0`}
        source={require("../../assets/images/background.png")}
      />
      <Image
        style={tw`w-40 h-10 absolute top-10 items-center justify-center`}
        source={require("../../assets/images/Logo_Moon_Star.png")}
      />
      <View style={tw`absolute top-1/4 bg-white rounded shadow-lg flex items-center justify-center`}>
        <Pressable   onPress={() => handleModuleSelection("Dispatch")}
          style={tw`absolute top-10 right-10`}>
          <View style={tw`bg-white rounded w-32 h-32 flex items-center justify-center`}>
            <Image
              style={tw`w-20 h-20`}
              source={require("../../assets/images/Truck.jpg")}
            />
            <Text style={tw`text-black text-base text-center mt-2`}>Dispatch</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => handleModuleSelection("Yard")}
         style={tw`absolute top-10 left-10`}>
          <View style={tw`bg-white rounded w-32 h-32 flex items-center justify-center`}>
            <Image
              style={tw`w-20 h-20`}
              source={require("../../assets/images/Yard.png")}
            />
            <Text style={tw`text-black text-base text-center mt-2`}>Yard</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('YardDashboard')} style={tw`absolute top-60 right-10`}>
          <View style={tw`bg-white rounded w-32 h-32 flex items-center justify-center`}>
            <Text style={tw`text-white text-3xl`}>⚙️</Text>
            <Text style={tw`text-black text-base mt-2`}>Settings</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Modal;