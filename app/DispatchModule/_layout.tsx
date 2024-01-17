import * as React from 'react';
import { useState } from 'react';
import { View, Image } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import DispatchDashboard from './DispatchDashboard';
import DispatchList from './DispatchList';
import LoadList from './LoadList';
import Contact from '../../app/screens/Contact';
import Assistance from '../../app/screens/Assistance';
import ActiveLoad from './ActiveLoad';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DispatchDetail from './DispatchDetail';
import DispatchMap from './DispatchMap';
import Modal from '../screens/Modal';
import Popup from '../../components/PopupProfile';


const DispatchStack = createStackNavigator();
const LoadStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DrawerDispatch = createDrawerNavigator();

const DispatchListStack = () => {
    return (
      <DispatchStack.Navigator>
        <DispatchStack.Screen name="DispatchDetail" component={DispatchDetail} options={{headerShown: false}}/>
        <DispatchStack.Screen name="DispatchList" component={DispatchList} options={{headerShown: false}}/>
        {/* <DispatchStack.Screen name="DispatchMap" component={DispatchMap} options={{headerShown: false, headerStyle: {display: 'none'},}}/> */}
      </DispatchStack.Navigator>  
    );
};

const LoadListStack = () => {
    return (
      <LoadStack.Navigator>
        <LoadStack.Screen name="LoadList" component={LoadList} options={{headerShown: false}}/>
        <LoadStack.Screen name="ActiveLoad" component={ActiveLoad} options={{headerShown: false}}/>
      </LoadStack.Navigator>
    );
};

const ContactStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contact} options={{headerShown: false}}/>
      </Stack.Navigator>  
    );
  };
  const AssistanceStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Assistances" component={Assistance} options={{headerShown: false}}/>
      </Stack.Navigator>  
    );
};

const BottomTabNavigationDispatch = () => {
    return (
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#1867C0'}}> 
        <Tab.Screen name="DispatchDashboard" component={DispatchDashboard} options={{tabBarLabel: 'Overview', headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />),}}  key="DispatchDashboard"/>
        <Tab.Screen name="DispatchListStack" component={DispatchListStack} options={{tabBarLabel: 'Dispatch', headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="truck" color={color} size={size} />),}}  key="DispatchList"/>
        <Tab.Screen name="LoadListStack" component={LoadListStack} options={{ tabBarLabel: 'Load', headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="car" color={color} size={size} />),}} key="LoadList"/>
        <Tab.Screen name="HomePortal" component={Modal} options={{ tabBarLabel: 'Home', headerShown: false, tabBarStyle: {display: 'none'},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />),}} key="HomePortal"/>
      </Tab.Navigator>
    );
};

const BottomTabNavigationDispatchList = () => {
    return (
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#1867C0'}} initialRouteName='DispatchListStack'> 
        <Tab.Screen name="DispatchDashboard" component={DispatchDashboard} options={{tabBarLabel: 'Overview', headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />),}}  key="DispatchDashboard"/>
        <Tab.Screen name="DispatchListStack" component={DispatchListStack} options={{tabBarLabel: 'Dispatch', headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="truck" color={color} size={size} />),}}  key="DispatchList"/>
        <Tab.Screen name="LoadListStack" component={LoadListStack} options={{ tabBarLabel: 'Load', headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="car" color={color} size={size} />),}} key="LoadList"/>
        <Tab.Screen name="HomePortal" component={Modal} options={{ tabBarLabel: 'Home', headerShown: false, tabBarStyle: {display: 'none'},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />),}} key="HomePortal"/>
      </Tab.Navigator>
    );
};

const BottomTabNavigationLoadList = () => {
    return (
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#1867C0'}} initialRouteName='LoadListStack'> 
        <Tab.Screen name="DispatchDashboard" component={DispatchDashboard} options={{tabBarLabel: 'Overview', headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />),}}  key="DispatchDashboard"/>
        <Tab.Screen name="DispatchListStack" component={DispatchListStack} options={{tabBarLabel: 'Dispatch', headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="truck" color={color} size={size} />),}}  key="DispatchList"/>
        <Tab.Screen name="LoadListStack" component={LoadListStack} options={{ tabBarLabel: 'Load', headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="car" color={color} size={size} />),}} key="LoadList"/>
        <Tab.Screen name="HomePortal" component={Modal} options={{ tabBarLabel: 'Home', headerShown: false, tabBarStyle: {display: 'none'},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />),}} key="HomePortal"/>
      </Tab.Navigator>
    );
};

const MainDrawerNavigatorDispatch = () => {
    const screens = [
      { name: "Dashboard", component: BottomTabNavigationDispatch, options: { headerShown: true } },
      { name: "Load", component: BottomTabNavigationLoadList, options: { headerShown: true } },
      { name: "Dispatch", component: BottomTabNavigationDispatchList, options: { headerShown: true } },
      { name: "Contact", component: ContactStack, options: { headerShown: true } },
      { name: "Assistance", component: AssistanceStack, options: { headerShown: true } },
      { name: "Home", component: Modal, options: { headerShown: false } },
    ];
  
    return (
      <DrawerDispatch.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#1867C0',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitle: '',
        headerStatusBarHeight: 0,
        headerRight: () => <Popup />,
      }}
      >
        {screens.map((screen, index) => (
          <DrawerDispatch.Screen
            key={`screen-${index}`}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </DrawerDispatch.Navigator>
    );
  };
  
  const DispatchModule = () => {
    return (
      <MainDrawerNavigatorDispatch />
    );
  };
  
  export default DispatchModule;



