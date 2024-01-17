import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import Contact from '../../app/screens/Contact';
import Assistance from '../../app/screens/Assistance';
import Modal from '.././screens/Modal';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import YardList from './YardList';
import YardHistory from './YardHistory';
import YardDashboard from './YardDashboard';
import YardReservation from './YardReservation';
import ParkingInfo from './ParkingInfo';
import YardMap from './YardMap';
import Popup from '../../components/PopupProfile';

const YardCheckStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DrawerYard = createDrawerNavigator();
const Stack = createStackNavigator();

const YardListStack = () => {
  return (
    <YardCheckStack.Navigator>
      <YardCheckStack.Screen name="YardList" component={YardList} options={{ headerShown: false }} key="YardList" />
      <YardCheckStack.Screen name="YardDashboard" component={YardDashboard} options={{ headerShown: false }} key="YardDashboard" />
      <YardCheckStack.Screen name="YardReservation" component={YardReservation} options={{ headerShown: false }} key="YardReservation" />
      <YardCheckStack.Screen name="YardHistory" component={YardHistory} options={{ headerShown: false }} key="YardHistory" />
      {/* <YardCheckStack.Screen name="YardMap" component={YardMap} options={{ headerShown: false }} key="YardMap" /> */}
      <YardCheckStack.Screen name="ParkingInfo" component={ParkingInfo} options={{ headerShown: false }} key="ParkingInfo" />
    </YardCheckStack.Navigator>
  );
};

const ContactStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Contact} options={{ headerShown: false }} key="Contacts" />
    </Stack.Navigator>
  );
};

const AssistanceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Assistances" component={Assistance} options={{ headerShown: false }} key="Assistances" />
    </Stack.Navigator>
  );
};

const BottomTabNavigationYard = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#1867C0' }}>
      <Tab.Screen name="YardDashboard" component={YardDashboard} options={{tabBarLabel: 'Overview',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />),}}key="YardDashboard"/>
      <Tab.Screen name="YardListStack" component={YardListStack} options={{ tabBarLabel: 'Yard', headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="warehouse" color={color} size={size} />),}}key="Yard"/>
      <Tab.Screen name="Mapping" component={YardMap} options={{tabBarStyle: {display: 'none'},tabBarLabel: 'Mapping',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} /> ),}}key="Mapping"/>
      <Tab.Screen name="Home" component={Modal} options={{tabBarStyle: {display: 'none'}, tabBarLabel: 'Home', headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />),}}key="Home"/>
    </Tab.Navigator>
  );
};

const BottomTabNavigationYardList = () => {
    return (
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#1867C0' }} initialRouteName='YardListStack'>
        <Tab.Screen name="YardDashboard" component={YardDashboard} options={{tabBarLabel: 'Overview',headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />),}}key="YardDashboard"/>
        <Tab.Screen name="YardListStack" component={YardListStack} options={{ tabBarLabel: 'Yard', headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="warehouse" color={color} size={size} />),}}key="Yard"/>
        <Tab.Screen name="Mapping" component={YardMap} options={{tabBarStyle: {display: 'none'},tabBarLabel: 'Mapping',headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={size} /> ),}}key="Mapping"/>
        <Tab.Screen name="Home" component={Modal} options={{tabBarStyle: {display: 'none'}, tabBarLabel: 'Home', headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />),}}key="Home"/>
      </Tab.Navigator>
    );
  };

const MainDrawerNavigatorYard = () => {
  return (
    <DrawerYard.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1867C0',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitle: '',
        headerShown: false,
        headerStatusBarHeight: 0,
        headerRight: () => <Popup />,
      }}
    >
      <DrawerYard.Screen name="Overview" component={BottomTabNavigationYard} options={{ headerShown: true }} key="Overview" />
      <DrawerYard.Screen name="Yard" component={BottomTabNavigationYardList} options={{ headerShown: true }} key="Yard" />
      <DrawerYard.Screen name="Contact" component={ContactStack} options={{ headerShown: true }} key="Contact" />
      <DrawerYard.Screen name="Assistance" component={AssistanceStack} options={{ headerShown: true }} key="Assistance" />
      <DrawerYard.Screen name="Portal" component={Modal} options={{ headerShown: false }} key="HomeYard" />
    </DrawerYard.Navigator>
  );
};

const YardModule = () => {
  return <MainDrawerNavigatorYard />;
};

export default YardModule;