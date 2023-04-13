
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Search from './Screens/Search';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './Screens/Home';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab=createBottomTabNavigator()
const App = () => {
  return (
    <SafeAreaProvider>
  
  <StatusBar barStyle="dark-content" backgroundColor="#00aaff"/>
  <NavigationContainer>
    <Tab.Navigator 
    screenOptions={({route})=>({
      tabBarIcon:({color})=>{
        let iconName;
        if(route.name==="Home"){
          iconName='home-city-outline'
        }else if(route.name==="Search"){
          iconName='city'
        }
        return <MaterialCommunityIcons name={iconName} size={25} color={color}/>
      },
      tabBarActiveTintColor:"white",
      tabBarInactiveTintColor:"Gray",
      tabBarActiveBackgroundColor:"#00aaff",
      tabBarInactiveBackgroundColor:"#00aaff",
      headerShown:false
    })
    }
    >
      <Tab.Screen  name = "Home" component={Home}
        initialParams={{city:"Pune"}}
      />
      <Tab.Screen name='Search' component={Search}/>
    </Tab.Navigator>
  </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
