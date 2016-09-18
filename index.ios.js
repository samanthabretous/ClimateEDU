/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  View
} from 'react-native';

import RandManager from './RandManager.js';
import UserProfile from './userProfile.ios.js'


const randomUser = 1;

class ClimateEdu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      isLoading: true, 
      uiView: "login",
      isLogin: false,
      enviromentLevel: 10
    };
  }


  fetchWallsJSON() {
    var url = "https://randomuser.me/api/";
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        console.log("userData",jsonData)

        this.setState({
          isLoading: false,
          userData: jsonData
        });
      })
  }

  componentDidMount() {
    this.fetchWallsJSON();
  }
  renderLoadingMessage() {
    return (
      
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          animating={true}
          color={'#fff'}
          size={'large'} 
          style={{margin: 15}}
        ></ActivityIndicator>
          <Text style={{color: '#fff'}}>Contacting Unsplash</Text>
       
      </View>
    );
  }

  renderResults() {
    var {userData, isLoading} = this.state;
    if( !isLoading ) {
      return (   
        <View>
          <View style={styles.header}>
            <Image
              style={styles.profileImage}
              source={{uri:this.state.userData.results[0].picture.large}}
            ></Image>

          </View>
        </View>
      );
    }
  }

  render() {
    console.log("state", this.state)
    var {isLoading} = this.state;
    if(isLoading){
      return this.renderLoadingMessage();
    }
    else
      return this.renderResults();
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  }, 
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    height: 200
  }, 
  profileImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50
  }
});

AppRegistry.registerComponent('ClimateEdu', () => ClimateEdu);

