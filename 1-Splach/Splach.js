
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Pressable } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
    'Ralewaye': require('../../assets/fonts/Raleway/static/Raleway-ExtraBold.ttf')
});



export default function Splach() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Find your Gadget
                </Text>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/image/Saly.png')}
                    />
                </View>
                {/* <View style={styles.btnComponent}>
                    <Button title="Get started" onPress={() => Alert.alert('Simple Button pressed')} />
                </View> */}
                
                <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')} >
                    <Text style={styles.textBtn}>Get started</Text>
                </Pressable>
               
                <StatusBar style="auto" />
            </View>
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={() => console.log('error')}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5956E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        position: 'absolute',
        width: 292,
        height: 238,
        left: 91,
        top: 70,
        fontFamily: 'Ralewaye',
        fontStyle: 'normal',
        fontWeight: "800",
        color: '#FFFFFF',
        fontSize: 40,
        justifyContent: 'center'

        // lineHeight: 106.8,
    },
    imageContainer: {
        position: 'absolute',
        width: 486,
        height: 486,
        left: -43,
        top: 119,
    },
    btnComponent: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: 314,
        height: 70,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 3,
        width: 314,
        height: 60,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        top:560,
      },
      textBtn: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#5956E9',        
        fontFamily: 'Ralewaye',

      },


});
