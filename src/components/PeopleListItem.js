import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { capitalizeFirstLetter } from '../util'

const PeopleListItem = props => {
    const { people } = props
    const { title, first, last } = people.name
    return (
        <View style={styles.line}>
            <Text style={styles.lineText}>
                {`${
                    capitalizeFirstLetter(title)
                    }  ${
                    capitalizeFirstLetter(first)
                    }  ${
                    capitalizeFirstLetter(last)
                    }`}
            </Text>
        </View>
    )
}

export default PeopleListItem

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,

    }
})