import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import CountDown from 'react-native-countdown-component';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Timer({ navigation }) {
    const [Timer, setTimer] = useState()
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('@Key01', JSON.stringify(Timer))
            alert('data saved')
        } catch (e) {
            alert('error')
        }
    }

    useEffect(() => {
        setTimeout(() => console.log('Initial timeout!'), setTimer(1000))
        storeData()
        return () => {
            if (Timer != 0) {
                navigation.navigate('Timer')
            } else {
                navigation.navigate('Password')
            }
        };
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
            <CountDown
                until={60 * 1}
                size={30}
                onFinish={() => navigation.navigate('Password')}
                digitStyle={{ backgroundColor: '#FFF' }}
                digitTxtStyle={{ color: '#1CC625' }}
                timeToShow={['H', 'M', 'S']}
                timeLabels={{ h: 'Hrs', m: 'Min', s: 'Sec' }}
            />

        </View>
    )
}


// const getData = async () => {
//     try {
//         const value = await AsyncStorage.getItem('@Key01')
//         setTimeChecker(value)

//     } catch (e) {
//         // error reading value
//     }
// }

// const Check = () => {
//     setTimeout(() => {
//         navigation.navigate('Password')
//     }, 2000);
// }
// useEffect(() => {
//     storeData()
// })