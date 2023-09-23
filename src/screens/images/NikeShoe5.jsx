import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const ShoeImage = require("./Shoe1.png")

const NikeShoe5 = () => {
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
  },
});

export default NikeShoe5