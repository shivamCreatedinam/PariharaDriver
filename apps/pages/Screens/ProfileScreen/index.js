// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import axios from "axios";

const ProfileScreenPage = ({ navigation }) => {

    const [xmlData, setXmlData] = React.useState({});

    const UploadFile = async () => {
        console.log('UploadFile');
    }

    const ViewXml = () => {
        console.log('ViewXml');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16
                        }}>
                        Process XML
                    </Text>
                    <TouchableOpacity
                        onPress={() => UploadFile()}
                        style={{ marginBottom: 20, backgroundColor: '#000', paddingHorizontal: 20, paddingVertical: 10 }}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>Upload File</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => ViewXml()}
                        style={{ marginBottom: 20, backgroundColor: '#000', paddingHorizontal: 20, paddingVertical: 10 }}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>View Excel</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    {JSON.stringify(xmlData)}
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default ProfileScreenPage;