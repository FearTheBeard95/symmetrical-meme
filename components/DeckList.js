import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { handleReceiveDecks } from '../actions';
import { gray, purple } from '../utils/colors';
import Deck from './Deck';
import DeckInfo from './DeckInfo';

class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
  }
  render() {
    const { decks } = this.props;
    return (
      <View>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Mobile flash cards</Text>
          {Object.keys(decks).map((id) => {
            return (
              <TouchableOpacity key={id}>
                <DeckInfo id={id} key={id} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: purple,
  },
});

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(DeckList);
