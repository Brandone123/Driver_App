import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../app/screens/Modal";
import DispatchList from "../app/DispatchModule/DispatchList";
import LoadList from "../app/DispatchModule/LoadList";
import Overview from "../app/DispatchModule/DispatchDashboard";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    <Tab.Navigator
      initialRouteName="Overview"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Overview"
        component={Overview}
        options={{
          tabBarLabel: 'Overview',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dispatch"
        component={DispatchList}
        options={{
          tabBarLabel: 'Dispatch',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="truck" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Load"
        component={LoadList}
        options={{
          tabBarLabel: 'Load',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Footer;