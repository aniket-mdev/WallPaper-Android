import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your icon component

const HamburgerIcon = ( {navigation }) => {
    const openDrawer = () => {
        navigation.openDrawer();
      };

  return (
    <TouchableOpacity onPress={openDrawer}>
        <View style={{ width: 30, height: 3, backgroundColor: 'white', marginBottom: 5 }} />
        <View style={{ width: 30, height: 3, backgroundColor: 'white', marginBottom: 5 }} />
        <View style={{ width: 30, height: 3, backgroundColor: 'white' }} />
    </TouchableOpacity>
  );
};

export default HamburgerIcon;