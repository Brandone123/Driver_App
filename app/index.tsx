import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Modal from './screens/Modal';
import Login from './screens/Login';
import DispatchModule from './DispatchModule/_layout';
import YardModule from './YardCheckModule/_layout';
import { ModuleProvider } from './ModuleContext';
import { useRoute } from '@react-navigation/native';
import DispatchMap from './DispatchModule/DispatchMap';
import YardMap from './YardCheckModule/YardMap';
import Profile from '../components/Profile';
import { RootSiblingParent } from 'react-native-root-siblings';


const Stack = createStackNavigator();

const MainNavigation = () => {
  const ModuleElementsScreen = () => {
    const route = useRoute();
    const { selectedModule } = route.params;
    // console.log(selectedModule);
    return selectedModule === 'Dispatch' ? (
      <DispatchModule />
    ) : (
      <YardModule />
    );
  };
  

  return (
    <RootSiblingParent>
    <NavigationContainer independent={true}>
      <ModuleProvider>

      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DispatchMap"
          component={DispatchMap}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="YardMap"
          component={YardMap}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ModuleElements"
          component={ModuleElementsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      </ModuleProvider>
    </NavigationContainer>
    </RootSiblingParent>
  );
};

const App = () => {
  return <MainNavigation />;
};

export default App;