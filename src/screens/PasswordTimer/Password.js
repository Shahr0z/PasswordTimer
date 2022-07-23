import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Inputfield from '../../components/Inputfield'

export default function Password({ navigation }) {

    const [save, setsave] = useState();
    const Check = () => {
        if (save != '1234') {
            navigation.replace('Timer')
        }
    }


    return (
        <View style={{ justifyContent: 'center', paddingHorizontal: 20, flex: 1 }}>
            <View style={{ marginVertical: 20, justifyContent: 'center' }}>

                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 26, color: 'black' }} >Confirm Your Identity</Text>

            </View>
            <Inputfield placeholder={'Enter Password'} keyboardType={'number-pad'} onChangeText={(val) => { setsave(val) }} />

            <TouchableOpacity onPress={Check} style={{ margin: 16 }}>
                <Text style={{ backgroundColor: 'black', paddingVertical: 14, color: 'white', textAlign: 'center', fontWeight: 'bold', borderRadius: 4 }}>Open Password</Text>
            </TouchableOpacity>
        </View>
    )
}