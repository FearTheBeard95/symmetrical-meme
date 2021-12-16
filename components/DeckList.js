import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { handleReceiveDecks } from '../actions';

class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
  }
  render() {
    return (
      <View>
        <Text>DeckList</Text>
      </View>
    );
  }
}

export default connect()(DeckList);
