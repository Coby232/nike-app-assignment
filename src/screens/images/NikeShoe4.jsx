import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const ShoeImage = require("./toppng.png")

const NikeShoe4 = () => {
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
    alignItems: 'start',
    justifyContent: 'center',
  },
});

export default NikeShoe4