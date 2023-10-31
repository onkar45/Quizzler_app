import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home"
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';
const Stack = createStackNavigator();
const Index = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
    )
}

export default Index

const styles = StyleSheet.create({})