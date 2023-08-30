import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ContentItem({ earthquake, formatDuration, image1, duration, depthColor }) {
    return (
        <View style={[styles.earthquakeBar, depthColor(earthquake.mag)]}>
            <Text style={styles.location}>
                <Text style={styles.strong}>{earthquake.title}</Text>
            </Text>
            <View style={styles.topInfo}>
                <Text style={styles.mag}>
                    <Text >Şiddet {earthquake.mag}</Text>
                </Text>
                <Text style={styles.strong} value={earthquake.depth}>
                    Derinlik {earthquake.depth} km.
                </Text>
                <FontAwesomeIcon style={styles.chevron} icon={faChevronDown} />
            </View>

            <View style={styles.altInfo} >
                <Image source={image1} alt="earthquake icon" />
                <FontAwesomeIcon style={styles.icon} icon={faCalendarAlt} />
                <Text style={styles.date}>{formatDuration(duration)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    earthquakeBar: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        marginTop: 10,
        padding: 20,
        color: 'white',
    },
    location: {
        color: 'white',
    },
    strong: {
        fontWeight: 'bold',
        color: 'white',
    },
    mag: {
        color: 'white',
    },
    image: {
        color: 'white',
    },
    chevron: {
        color: 'white',
    },
    icon: {
        color: 'white',
    },
    date: {
        color: 'white',
        marginLeft: 20,
    },
    topInfo: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    altInfo: {
        display: 'flex',
        flexDirection: 'row',
    },
});

export default ContentItem;
