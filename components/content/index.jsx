import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import ContentItem from './contentItem';

function CustomContent({ earthquakes }) {

    function formatDuration(duration) {
        if (duration < 60) {
            if (duration === 0) {
                return `şimdi`;
            }
            return `${duration} dakika önce`;
        } else {
            const hour = Math.floor(duration / 60);
            const minute = duration % 60;
            return `${hour} saat ${minute} dakika önce`;
        }
    }

    const depthColor = (depth) => {
        if (depth > 5) {
            return { backgroundColor: 'red' };
        }
        else if (depth > 2) {
            return { backgroundColor: 'rgb(10, 112, 174)' };
        } else if (depth < 2) {
            return { backgroundColor: 'rgb(10, 174, 174)' };
        }
    };

    return (
        <ScrollView style={styles.earthquake}>
            {earthquakes.map((earthquake) => {
                const depremDate = new Date(earthquake.date_time); // Kullanılan tarih alanını düzeltin
                const now = new Date();
                const duration = Math.floor((now - depremDate) / (1000 * 60));
                return (
                    <ContentItem
                        key={earthquake._id}
                        earthquake={earthquake}
                        formatDuration={formatDuration}
                        duration={duration}
                        depthColor={depthColor}
                    />
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    earthquake: {

        display: 'flex',
        padding: 4,
        backgroundColor: 'white'
    },
});

export default CustomContent;
