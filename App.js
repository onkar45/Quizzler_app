import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Index from './navigation/Index'

const App = () => {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16
  }
})