import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import VideoScreen from './VideoScreen';
import ImageView from './ImageView';

function HomeScreen() {
    return(
       <Tab.Navigator initialRouteName='Images'
       screenOptions={({ route }) => ({
        tabBarStyle: {
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            height: 45,
            borderTopWidth: 0
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: 15,
            fontWeight: 'bold'
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor:'#d3d3d3'
    })}
       
       >
        <Tab.Screen
        name='Images' component={ImageView}
        options={{headerShown:false}}
        />
        <Tab.Screen
        name='Videos' component={VideoScreen}
        options={{headerShown:false}}
        />
       </Tab.Navigator>
    );
}

export default HomeScreen;