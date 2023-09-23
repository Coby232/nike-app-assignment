import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

const ShoeImage = require("./AirmaxYellow.png")

const NikeShoe2 = () => {
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
    marginTop:45
  },
});

export default NikeShoe2