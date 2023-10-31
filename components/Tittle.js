import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tittle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Quizzler</Text>
    </View>
  )
}

export default Tittle

const styles = StyleSheet.create({
  tittle : {
    fontSize: 40,
    fontWeight : '600'
  },
  container: {
    paddingVertical : 16, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})