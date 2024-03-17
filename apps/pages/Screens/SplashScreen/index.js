// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Dimensions
} from 'react-native';
import { } from '@react-navigation/native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const SplashScreenPage = () => {

    const navigation = useNavigation();
    const [showLoading, setShowLoading] = React.useState(true)
    let timer1 = setTimeout(() => setShowLoading(true), 1000)

    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LoginScreenPage');
        }, 1000);
    }, [false])

    return (
        <ImageBackground style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }} resizeMode={'stretch'} source={require('../../../assets/background_images.jpeg')}>

        </ImageBackground>
    );
}

export default SplashScreenPage;