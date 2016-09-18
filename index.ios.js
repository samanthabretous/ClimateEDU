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
  TextInput,
  ActivityIndicator,
  View
} from 'react-native';

import RandManager from './RandManager.js';
import UserProfile from './userProfile.ios.js'
import LoginScreen from './loginView.ios.js'



const randomUser = 1;

class ClimateEdu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uiView: "loginView",
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
    if( !isLoading && this.state.uiView ==="userView") {
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
    } else if (!isLoading && this.state.uiView ==="loginView"){
      console.log(<LoginScreen />)
      return(
        <LoginScreen styles={styles}/>
      )
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
  }, 
  login_screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#934EA6",
    textAlign: 'center'
  }, 
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: "center",
  },
  inputBox: {
    backgroundColor: 'white',
    borderRadius: 20,
    color: 'black',
    width: 320,
    height: 45,
    padding: 10,
    textAlign: 'center',
    margin: 10
  },
  buttons: {
    flex: 1, 
    flexDirection: 'row',
  },
  button1: {
    backgroundColor: "#F2C400",
    borderRadius: 20,
    color: 'black',
    width: 160,
    height: 45,
    padding: 10,
    textAlign: 'center',
    margin: 5
  },
  button2: {
    backgroundColor: "#3DBB62",
    borderRadius: 20,
    color: 'black',
    width: 160,
    height: 45,
    padding: 10,
    textAlign: 'center',
    margin: 5
  },
  buttonText: {
    color: "black"
  }
});

AppRegistry.registerComponent('ClimateEdu', () => ClimateEdu);

