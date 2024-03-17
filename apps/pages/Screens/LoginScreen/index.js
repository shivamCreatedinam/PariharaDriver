// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import axios from "axios";
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import { emailValidator } from '../../helpers/emailValidator';
import { passwordValidator } from '../../helpers/passwordValidator';
import globle from '../../globle/globle';

const LoginScreenPage = ({ navigation }) => {

    const [email, setEmail] = React.useState({ value: '', error: '' })
    const [password, setPassword] = React.useState({ value: '', error: '' })
    const [Loading, setLoading] = React.useState(false);

    const LoginWithDriver = async () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        driverLoginApp();
    }


    const driverLoginApp = () => {
        setLoading(true);
        var authOptions = {
            method: 'POST',
            url: globle.API_BASE_URL + 'delivery-boy-login',
            data: JSON.stringify({ "email": email, "password": password }),
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        };
        console.log(authOptions);
        axios(authOptions)
            .then((response) => {
                console.log(JSON.stringify(response));
                if (response?.status) {
                    setLoading(false);
                    console.log(response);
                } else {
                    setLoading(false);
                    console.log(response.data);
                }
            })
            .catch((error) => {
                setLoading(false);
            });
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16, alignItems: 'center' }}>
                <View style={{ marginTop: Dimensions.get('screen').width / 2.5 }}>
                    <Logo />
                    <Header>Welcome back.</Header>
                </View>
                <TextInput
                    label="Email"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <TextInput
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                />
                <TouchableOpacity onPress={() => LoginWithDriver()} style={{ paddingHorizontal: 10, paddingVertical: 18, backgroundColor: '#000000', width: '100%', elevation: 5, borderRadius: 5 }}>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold', marginTop: 0, textTransform: 'uppercase', letterSpacing: 1 }}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreenPage;