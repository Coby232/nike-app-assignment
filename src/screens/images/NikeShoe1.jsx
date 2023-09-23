import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

const ShoeImage = require("./Green1.png")

const NikeShoe1 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={ShoeImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left:-30,
    top:20
  },
});

export default NikeShoe1