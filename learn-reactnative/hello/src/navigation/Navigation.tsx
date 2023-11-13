import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Chat from '../screens/chat/Chat';
import TodoApp from '../screens/todoApp/TodoApp';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Chat">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signup" component={Chat} />
            <Stack.Screen name="AddTodos" component={TodoApp} />

        </Stack.Navigator>
    )
}


export default function Navigation() {
    return (
        <NavigationContainer>
            {/* <Tab.Navigator>
                <Tab.Screen name="Chat" component={Chat} />
                <Tab.Screen name="Home" component={StackNavigation} />
                <Tab.Screen name="Settings" component={Login} />
            </Tab.Navigator> */}


            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Chat">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="AddTodos" component={TodoApp} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}