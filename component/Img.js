import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 350,
        height: 400,
        borderRadius: 10,
    },
    logo: {
        width: 66,
        height: 66,
        margin: 10,
        borderRadius: 100
    },
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,

    },
    h1: {
        fontSize: 25,
    },
    p: {
        maxWidth: 350,
    }
});

const Img = () => {
    return (

        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }}
            />
            <View>
                <View style={styles.card}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text style={styles.h1}>What is React Native</Text>

                </View>
                <Text style={styles.p}>What is React Native vs ReactJS?
                    React utilizes HTML, CSS, and JavaScript to create interactive user interfaces, whereas React Native utilizes   </Text>
            </View>

        </View>

    );
};

export default Img;