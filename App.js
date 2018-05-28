import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Navbar from './components/navigation/Navbar'
import DeckList from './components/decks/DeckList';
import DeckItem from './components/decks/DeckItem';
import DeckNew from './components/decks/DeckNew';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: {
    screen: Navbar,
    headerMode: "none",
    header: null,
    navigationOptions: {
      header: null
    }
  },
  DeckList: {
    screen: DeckList
  },
  DeckItem: {
    screen: DeckItem,
    navigationOptions: {
      title: "Back",
    },
  },
  DeckNew: {
    screen: DeckNew,
    navigationOptions: {
      title: "Back",
    },
  }
})

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StackNavigator />
        </View>
      </Provider>
    );
  }
}
