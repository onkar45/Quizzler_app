import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Tittle from '../components/Tittle'
import img from '../image/quiz.png'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Tittle />
            <View style={styles.bannerContainer}>
                <Image
                    source={img}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.button}>
                <Text style={{fontSize: 25,fontWeight:"600", color: 'white'}}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 400,
        

    },
    bannerContainer : {
        justifyContent: 'center',
        alignItems : "center",
        flex: 1
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor:"white",
        // flex:1
        height: '100%'
      },
      button :{
        width : '100%',
        backgroundColor: '#184E77',
        padding: 16,
        borderRadius: 16,
        alignItems:'center',
        marginBottom : 30
      }
})