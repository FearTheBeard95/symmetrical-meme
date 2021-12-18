import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gray, purple, white } from '../utils/colors';
import DeckInfo from './DeckInfo';
import TextButton from './TextButton';

class Deck extends Component {
  render() {
    return (
      <View>
        <DeckInfo id={this.props.id} />
        <View>
          <TextButton>Add Card</TextButton>
          <TextButton>Start</TextButton>
        </View>
      </View>
    );
  }
}

function mapStatetoProps(state, { route }) {
  const id = route.params;
  return {
    id,
  };
}

export default connect()(Deck);
