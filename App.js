import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import store from './store';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Provider } from 'react-redux';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddCard />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
