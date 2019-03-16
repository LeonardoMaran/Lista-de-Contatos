import { createAppContainer, createStackNavigator } from 'react-navigation'

import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'

import { capitalizeFirstLetter } from './src/util'

const StackNavigator = createStackNavigator({
    'Main': {
        screen: PeoplePage
    },
    'PeopleDetail': {
        screen: PeopleDetailPage,
        navigationOptions: ({ navigation }) => {
            const peopleName = capitalizeFirstLetter(
                navigation.state.params.people.name.first
            )
            return ({
                title: peopleName,
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 30
                }
            })
        }
    }
}, {
        defaultNavigationOptions: {
            title: 'Pessoas!',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: '#c5c5c5'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 30,
                flexGrow: 1,
                textAlign: 'center'
            }
        }
    })

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer