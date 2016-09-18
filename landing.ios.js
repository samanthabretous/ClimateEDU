import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  View,
  DeviceEventEmitter,
  Dimensions
} from 'react-native';
  
import MainComponent from './index.ios.js';
import Button from 'react-native-button';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,

    };
  }

  _onChange(event) {

  }


  render () {
    return (
      <View style={this.props.styles.landing}>
        <View style={this.props.styles.landing_button11}>
          <Button
            style={this.props.styles.landing_button1}
            styleDisabled={{color: 'red'}}
            onPress={() => this.props._handlePress("play")}>
            PLAY!
          </Button>
        </View>
        <View style={this.props.styles.landing_button22}>
          <Button
            style={this.props.styles.landing_button2}
            styleDisabled={{color: 'red'}}
            onPress={() => this.props._handlePress("landingProfile")}>
            PROFILE
          </Button>
        </View>
      </View>

    )
  }
}

export default Landing