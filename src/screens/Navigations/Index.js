import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Password from './PasswordTimer/Password'
import Timer from './PasswordTimer/Timer'
export default function Index() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Timer' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Password' component={Password} />
                <Stack.Screen name='Timer' component={Timer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}