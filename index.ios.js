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
import Landing from './landing.ios.js'
console.log(Landing)


const randomUser = 1;

class ClimateEdu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      isLoading: true, 
      uiView: "loginProfile",
      isLogin: false,
      enviromentLevel: 10,
      ven: 5,
    };
  }

  fetchWallsJSON() {
    var url = "https://randomuser.me/api/";
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
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
          <Text style={{color: '#fff'}}>Connecting to Climate Edu</Text>
      </View>
    );
  }

  _handlePress(screen){
    
    if (screen === "play" ){
      this.setState({uiView: "play"})
    } else if (screen === "landingProfile") {
      this.setState({uiView: "userProfile"})
    } else if (screen === "loginScreen"){
      this.setState({uiView: "landingProfile"})
    }

  }

  renderResults() {
    var {userData, isLoading} = this.state;
    if( !isLoading && this.state.uiView ==="userProfile") {
      return (   
        <UserProfile 
          styles={styles} 
          userData={this.state.userData}
        />

      );
    } else if (!isLoading && this.state.uiView ==="loginProfile"){
      return(
        <LoginScreen styles={styles} _handlePress={this._handlePress.bind(this)}/>
      )
    } else if (!isLoading && this.state.uiView ==="landingProfile") {
      return(
        <Landing styles={styles} _handlePress={this._handlePress.bind(this)}/>
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
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A93C0',
    height: 250,
    paddingTop: 60,
  }, 
  header_font: {
    paddingTop: 10,
    fontSize: 30,
    color: "white"
  },
  underHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
    height: 80,
  },
  underHeader_button1: {
    flex: 1,
    backgroundColor: "#3DBB62",
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 70,
    paddingBottom: 0,
    paddingRight: 70,
    color: 'white'
  },
  underHeader_button2: {
    flex: .5,
    backgroundColor: "#F2C400",
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 50,
    paddingBottom: 0,
    paddingRight: 50,
    color:'white'
  },
  profileImage: {
    width: 125, 
    height: 125, 
    borderRadius: 50
  }, 
  login_screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#934EA6",
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
  },
  landing:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  landing_button11: {
    flex: .5,
    alignItems: 'stretch',
    backgroundColor: "#3DBB62",
    justifyContent: 'center'
  },
  landing_button22:{
    flex: .5,
    alignItems: 'stretch',
    backgroundColor: "#F2C400",
    justifyContent: 'center'
  },
  landing_button1: {
    backgroundColor: "#3DBB62",
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontSize: 75
  },
  landing_button2: {
    flex: .25,
    backgroundColor: "#F2C400",
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontSize: 75,
  }
});

AppRegistry.registerComponent('ClimateEdu', () => ClimateEdu);

