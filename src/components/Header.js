import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = (props) => (
    <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
    </View>
)

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#6ca2f7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 50,
        color: '#fff'
    }
})
