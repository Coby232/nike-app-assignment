import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerHome = () => {
  return (
    <View>
      <Text>DrawerHome</Text>
    </View>
  )
}

export default DrawerHome