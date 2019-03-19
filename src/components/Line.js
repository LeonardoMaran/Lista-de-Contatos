import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Line = ({ label, content }) => {
    return (
        <View style={styles.line}>
            <Text style={[styles.cell, styles.label]}>{ label }</Text>
            <Text style={styles.cell}>{ content}</Text>
        </View>
    )
}

export default Line

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#c5c5c5'
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
    },
    label: {
        fontWeight: 'bold'
    }
})