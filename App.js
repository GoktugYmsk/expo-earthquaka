import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';

import { NavigationContainer } from '@react-navigation/native';

import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

export default function App() {
    const [earthquakes, setEarthquakes] = useState([]);

    const refresh = async () => {
        setEarthquakes([]);
        try {
            const response = await axios.get('https://api.orhanaydogdu.com.tr/deprem/kandilli/live');
            setEarthquakes(response.data.result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        refresh();
    }, []);

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
