import * as React from "react";
import { useContext } from 'react';
import { View, Text, Pressable, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import ModuleContext from "../ModuleContext";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const { selectedModule, setSelectedModule } = useContext(ModuleContext);

  const handleSubmit = () => {
    navigation.navigate('Modal', { selectedModule });
  };


  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Image
        style={tw`w-full h-full absolute top-0 left-0`}
        source={require("../../assets/images/background.png")}
      />
      <View style={tw`absolute top-1/3 rounded-t-3xl flex justify-center items-center`}>
        <View style={tw`bg-white rounded-3xl p-8`}>
          <Text style={tw`text-black text-4xl font-bold text-center mb-8`}>LOGIN</Text>
          <Image
            style={tw`w-56 h-14 mx-auto mb-8`}
            source={require("../../assets/images/Logo_Moon_Star.png")}
          />
          <View style={tw`flex flex-row items-center mb-4`}>
            <Feather name="user" size={18} color="black" style={tw`mr-2`} />
            <TextInput
              style={tw`h-12 w-64 bg-gray-100 rounded px-4`}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your username"
            />
          </View>
          <View style={tw`flex flex-row items-center mb-8`}>
            <Feather name="key" size={18} color="black" style={tw`mr-2`} />
            <TextInput
              style={tw`h-12 w-64 bg-gray-100 rounded px-4`}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
            />
          </View>
          <Pressable onPress={handleSubmit} style={tw`flex justify-center items-center`}>
            <View style={tw`bg-blue-900 rounded w-28 h-9 flex justify-center items-center`}>
              <Text style={tw`text-white text-xl`}>Submit</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;