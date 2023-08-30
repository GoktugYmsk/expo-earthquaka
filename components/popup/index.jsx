import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Popup({ setShow }) {
    const handleClosePopup = () => {
        setShow(false);
    };

    return (
        <View style={styles.popupContainer}>
            <View style={styles.popupContent}>
                <Text style={styles.search}>Arama</Text>
                <TextInput style={styles.footerInput} placeholder='Kelime ile filtrele' />
                <FontAwesomeIcon style={styles.popupChevron} icon={faChevronDown} />
                <Text style={styles.filterHead}>İllere Göre Filtrele</Text>
                <TextInput style={styles.footerInputIl} placeholder='Tüm İller' />
                <FontAwesomeIcon style={styles.popupChevronAlt} icon={faChevronDown} />
                <TextInput style={styles.footerInputS} placeholder='Sırala' />
                <Text style={styles.arrangement}>Sıralama</Text>
                <TouchableOpacity style={styles.popupFilter}>
                    <Text style={styles.strong}>Filtrele</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.popupClose} onPress={handleClosePopup}>
                    <Text>Kapat</Text>
                </TouchableOpacity>
                <View style={styles.popupHr} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    popupContainer: {
        // Style for the popupContainer
    },
    popupContent: {
        // Style for the popupContent
    },
    search: {
        // Style for the search text
    },
    footerInput: {
        // Style for the footerInput
    },
    popupChevron: {
        // Style for the popupChevron
    },
    filterHead: {
        // Style for the filterHead text
    },
    footerInputIl: {
        // Style for the footerInputIl
    },
    popupChevronAlt: {
        // Style for the popupChevronAlt
    },
    footerInputS: {
        // Style for the footerInputS
    },
    arrangement: {
        // Style for the arrangement text
    },
    popupFilter: {
        // Style for the popupFilter button
    },
    popupClose: {
        // Style for the popupClose button
    },
    popupHr: {
        // Style for the popupHr
    },
    strong: {
        fontWeight: 'bold',
    },
});

export default Popup;
