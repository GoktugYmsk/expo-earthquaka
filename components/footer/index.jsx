import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather, Ionicons } from '@expo/vector-icons';


function Footer({ refresh, boot }) {

    const navigation = useNavigation();

    const handleRefreshClick = () => {
        refresh();
    };


    return (
        <View style={styles.lowerBar}>
            <View style={styles.nav}>
                <TouchableOpacity>
                    <View style={styles.iconBlok} >
                        <Feather name="home" size={25} color="white" />
                        <Text style={styles.text} >Anasayfa</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRefreshClick}>
                    <View style={styles.iconBlok} >
                        <Feather name="refresh-ccw" size={25} color="white" />
                        <Text style={styles.text} >Yenile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.iconBlok} >
                        <Ionicons name='search' size={25} color='white' />
                        <Text style={styles.text} >Filterele</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.iconBlok} >
                        <Ionicons name="ios-swap-horizontal" size={25} color="white" />
                        <Text style={styles.text} >İstatistik</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBlok} >
                    <Ionicons name="md-map" size={25} color="white" />
                    <Text style={styles.text} >Harita</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    lowerBar: {
        display: 'flex',
        flexDirection: 'row',

    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        padding: 4,
        backgroundColor: 'rgb(10, 95, 174)',
        justifyContent: 'space-evenly'
    },
    text: {
        color: 'white',
    },
    iconBlok: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 6,
        width: 60,
        height: 60,
    },
});

export default Footer;
