// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/

import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
// redux
import { Provider } from 'react-redux';
import { store } from '../store/store';

import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';
import ThirdPage from '../pages/ThirdPage';
import ProfileScreenPage from '../pages/Screens/ProfileScreen';
import LoginScreenPage from '../pages/Screens/LoginScreen';
import SplashScreenPage from '../pages/Screens/SplashScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigationStack = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="SplashScreenPage"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen
                        name="FirstPage"
                        component={FirstPage}
                    />
                    <Stack.Screen
                        name="ProfileScreenPage"
                        component={ProfileScreenPage}
                    />
                    <Stack.Screen
                        name="LoginScreenPage"
                        component={LoginScreenPage}
                    />
                    <Stack.Screen
                        name="SplashScreenPage"
                        component={SplashScreenPage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const SecondScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="SecondPage"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="SecondPage"
                component={SecondPage} />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage} />
        </Stack.Navigator>
    );
}

function NavigationApp() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#c6cbef', //Set Drawer background
                        width: 250, //Set Drawer width
                    },
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    }
                }}>
                <Drawer.Screen
                    name="SecondPage"
                    options={{
                        drawerLabel: 'Second page Option',
                        title: 'Second Stack'
                    }}
                    component={SecondScreenStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


export default MainNavigationStack;