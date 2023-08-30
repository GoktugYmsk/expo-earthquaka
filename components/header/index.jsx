import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logo from '../../assets/images.png';

function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.headerNavbar}>
                <Image source={logo} style={styles.navbarFoto} />
                <View style={styles.paragragph}>
                    <Text style={styles.header}>KANDİLLİ RASATHANESİ</Text>
                    <Text style={styles.altHeader}>TÜRKİYE VE ÇEVRESİNDEKİ SON 500 DEPREM</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '15%',
        backgroundColor: 'rgb(10, 95, 174)',
        padding: 20,
    },
    headerNavbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragragph: {
        marginLeft: 10,
    },
    navbarFoto: {
        width: 40,
        height: 40,
    },
    header: {
        fontSize: 14,
        color: 'white',
    },
    altHeader: {
        fontSize: 14,
        color: 'white',
    },
});

export default Header;
