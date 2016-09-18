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

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      text: "",
      password: '',
      keyboardSpace: 0
    };
  }

  _onChange(event) {
    var stars = this.state.password;
    stars += '*';

    this.setState({password: stars})
  }

  _handlePress(){
    console.log("CLicked")

  }

  render () {
    return (
      <View style={this.props.styles.login_screen}>
        <View>
        <View>
            <Text style={this.props.styles.logo}>Climate Edu</Text>
            <TextInput
              keyboardType='email-address'
              style={this.props.styles.inputBox}
              placeholder="Username"
              name="username"
              onChangeText={(text) => this.setState({text})}
            />
            <TextInput
              style={this.props.styles.inputBox}
              placeholder="Password"
              onChangeText={() => this._onChange()}
              value={this.state.password}
            />
          </View>
          <View style={this.props.styles.buttons}>
            <Button
              style={this.props.styles.button1}
              styleDisabled={{color: 'red'}}
              onPress={() => this.props._handlePress("loginScreen")}>
              Login
            </Button>
            <Button
              style={this.props.styles.button2}
              styleDisabled={{color: 'red'}}
              onPress={() => this._handlePress()}>
              Sign Up!
            </Button>
          </View>
        </View>
      </View>

    )
  }
}

export default LoginScreen