/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoScreen from './components/VideoScreen';
import FullImageView from './components/FullImageView';
import HomeScreen from './components/HomeScreen';
const Stack = createNativeStackNavigator();
import HamburgerIcon from './components/HamburgerIcon';


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={(navigation) => ({
          headerShown: true, headerTitle:"",
          headerTitleStyle:{color:'#f87217', fontWeight:'bold', fontFamily:'serif', fontSize:22 },
          headerStyle:{backgroundColor:'#0d0c22'},
          headerRight: () => <Text style={{ color: '#f87217', fontWeight: 'bold', fontFamily: 'serif', fontSize: 22, marginRight: 10 }}>Jay Bhavani !</Text>,
          headerLeft:() => <HamburgerIcon navigation={navigation}  />
        })}
        />
         <Stack.Screen name='Explore' component={FullImageView} 
          
          options={{headerShown:true,  headerStyle:{backgroundColor:"#0d0c22"},
          headerTitleStyle:{color:'white', fontWeight:'bold',fontFamily: "serif", fontSize:22},
          headerTintColor:'white'
        }}
        />
{/*
        <Stack.Screen name="Permission" component={Permissions} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// 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