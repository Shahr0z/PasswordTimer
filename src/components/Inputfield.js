import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Inputfield(props) {
    return (
        <View style={styles.Input}>
            <TextInput placeholder={props.placeholder} style={styles.Inputtext} keyboardType={props.keyboardType}
                onChangeText={props.onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {
        backgroundColor: 'white',
        height: 46,
        elevation: 1,
        borderRadius: 4,
        marginVertical: 14,
    },
    Inputtext: {
        flex: 1,
        paddingHorizontal: 3,
        textAlign: 'center'
    }
})