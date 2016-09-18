import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  View
} from 'react-native';
import MainComponent from './index.ios.js';

class UserProfile extends Component {
  render () {
    console.log(this.props.userData)
    return (
      <View>
        <View style={this.props.styles.header}>
          <Image
            style={this.props.styles.profileImage}
            source={{uri:this.props.userData.results[0].picture.large}}
          ></Image>
        </View>
      </View>
    )
  }
}

module.exports = UserProfile 