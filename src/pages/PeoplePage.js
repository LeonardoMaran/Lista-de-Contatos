import React from 'react';
import { View } from 'react-native';

import axios from 'axios'

import PeopleList from '../components/PeopleList'

export default class PeoplePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            peoples: []
        }
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?nat=br&results=5')
            .then(response => {
                const { results } = response.data
                this.setState({
                    peoples: results
                })
            })
    }

    render() {
        // this.props.navigation.navigate(/* chave da página */, /* state */)
        // this.props.navigation.navigate('PeopleDetail')
        return (
            <View>
                <PeopleList 
                    peoples={this.state.peoples}
                    onPressItem={() => {
                        this.props.navigation.navigate('PeopleDetail')
                    }} />
            </View>
        );
    }
}

