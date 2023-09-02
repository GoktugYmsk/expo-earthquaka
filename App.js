import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import axios from 'axios';
import NetInfo from "@react-native-community/netinfo";

import { NavigationContainer } from '@react-navigation/native';

import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

export default function App() {
    const [earthquakes, setEarthquakes] = useState([]);

    const refresh = async () => {
        setEarthquakes([]);
        try {
            const isConnected = await checkInternetConnection();
            if (!isConnected) {
                showAlert("Bağlantı Yok", "Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.");
                return;
            }

            const response = await axios.get('https://api.orhanaydogdu.com.tr/deprem/kandilli/live');
            setEarthquakes(response.data.result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        refresh();
    }, []);

    const checkInternetConnection = async () => {
        const netInfo = await NetInfo.fetch();
        return netInfo.isConnected;
    };

    const showAlert = (title, message) => {
        Alert.alert(
            title,
            message,
            [
                { text: 'Tamam', onPress: () => console.log('Alert kapandı') },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Header />
                <Content earthquakes={earthquakes} />
                <Footer refresh={refresh} />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
