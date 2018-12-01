import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../Header/Header.component';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <Text> Home Component </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Medicine')}>
            <Text>Go to Medicine</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
