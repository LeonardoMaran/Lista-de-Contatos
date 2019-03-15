import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const { peoples } = props

    const items = peoples.map(people =>
        <PeopleListItem
            key={people.name.first}
            people={people} />
    )


    return (
        <View style={styles.container}>
            {items}
        </View>
    )
}

export default PeopleList

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})