import React from 'react';
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native';


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
        padding: 5,
        margin: 10,
        backgroundColor: "cyan",
        borderRadius: 10,

    },
    h1: {
        fontSize: 25,
    },
    p: {
        maxWidth: 350,
        padding: 10,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    }
});

const Img = () => {
    return (

        <View style={styles.container}>

            <TouchableHighlight>
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
            </TouchableHighlight>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://picsum.photos/200/300'
                }}
            />
            <View style={styles.flexRow}>
                <Image
                    style={styles.logo}
                    source={require("./../assets/icon.png")}
                />
                <Image
                    style={styles.logo}
                    source={require("./../assets/adaptive-icon.png")}
                />
                <Image
                    style={styles.logo}
                    source={require("./../assets/splash.png")}
                />
            </View>

        </View>

    );
};

export default Img;