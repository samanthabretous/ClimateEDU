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
import Button from 'react-native-button';

class UserProfile extends Component {
  render () {
    var user = this.props.userData.results[0]
    return (
      <View>
        <View>
          <View style={this.props.styles.header}>
            <Image
              style={this.props.styles.profileImage}
              source={{uri: user.picture.large}}
            ></Image>
            <Text style={this.props.styles.header_font}>{user.name.first.toUpperCase() + " " + user.name.last.toUpperCase()}</Text>
          </View>
          <View style={this.props.styles.underHeader}>
            <Button
              style={this.props.styles.underHeader_button1}
              onPress={() => this.props._handlePress("play")}>
              Ven
            </Button>
            <Button
              style={this.props.styles.underHeader_button2}
              onPress={() => this.props._handlePress("play")}>
              PLAY!
            </Button>
          </View>
        </View>
        <View style={{marginTop: 30, padding: 30}}>
          <Levels type="Climate" width={200} color={"#934EA6"} /> 
          <Levels type="Health" width={170} color={"#F34E4A"} /> 
          <Levels type="Water" width={220} color={"#3B5899"} /> 
          <Levels type="Education" width={130} color={"#F2C400"} /> 
        </View>
      </View>
    )
  }
}

class Levels extends Component{
  render(){
    return (
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 30}}>{this.props.type}: </Text>
          <View style={{height: 30, width: this.props.width, backgroundColor: this.props.color}}>
          </View>
        </View>
    )
  }
}  

module.exports = UserProfile 











