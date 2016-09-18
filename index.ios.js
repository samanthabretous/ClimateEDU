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
  Alert,
  ActivityIndicator,
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from 'react-native-button';

import ImageTree from "./nature0.jpg"
import RandManager from './RandManager.js';
import UserProfile from './userProfile.ios.js'
import LoginScreen from './loginView.ios.js'
import Landing from './landing.ios.js'
EStyleSheet.build();


var descripton = "  Every country in the world is seeing the drastic efects of climate change, some more than others. On average, the annual losses just from earthquakes, tsunamis, tropical cyclones and fooding count in the hundreds of billions of dollars. \n   We can reduce the loss of life and property by helping more vulnerable regions—such as land-locked countries and island states—become more resilient. The impact of global warming is getting worse. \n   We’re seeing more storms, more droughts and more extremes than ever before. It is still possible, with political will and technological measures, to limit the increase in global mean temperature to two degrees Celsius above pre-industrial levels—and thus avoid the worst efects of climate change. The Sustainable Development Goals lay out a way for countries to work together to meet this urgent challenge"


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
      ven: "10000",
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

  _onPress(){
    console.log("helloyou")
  }

  _handlePress(screen){
    
    if (screen === "play" ){
      this.setState({uiView: "play"})
    } else if (screen === "ven" ){
      this.setState({uiView: "ven"})
    } else if (screen === "landingProfile") {
      this.setState({uiView: "userProfile"})
    } else if (screen === "loginScreen"){
      this.setState({uiView: "landingProfile"})
    } else if (screen === "climateInfo"){
      this.setState({uiView: "climateInfo"})
    }

  }

  renderResults(event) {
    var {userData, isLoading} = this.state;
    if( !isLoading && this.state.uiView ==="userProfile") {
      return (   
        <UserProfile 
          styles={styles} 
          userData={this.state.userData}
          ven={this.state.ven}
          _onPress={this._onPress.bind(this)}
          _handlePress={this._handlePress.bind(this)}
        />

      );
    } else if (!isLoading && this.state.uiView ==="loginProfile"){
      console.log("hello")
      return(
        <LoginScreen styles={styles} _handlePress={this._handlePress.bind(this)} />
      )
    } else if (!isLoading && this.state.uiView ==="landingProfile") {
      return(
        <Landing 
          styles={styles} 
          _handlePress={this._handlePress.bind(this)}/>
      )
    } else if (!isLoading && this.state.uiView ==="play") {
      console.log(event)
      return(
        <View style={styles.login_screen}>
          <Text style={{fontSize: 70, paddingTop:100}}>Virtual Reality</Text>
          <View style={styles.buttons}>
            <Button
                style={styles.button1}
                onPress={() => this._handlePress("landingProfile")}>
                Profile
            </Button>
            <Button
                style={styles.button1}
                onPress={() => Alert.alert(
                  'Amount of Ven',
                  "$" + this.state.ven,
                )}>
                Ven
            </Button>
          </View>
        </View>
      )
    } else if (!isLoading && this.state.uiView ==="ven") {
      return (
        <Text>Ven</Text>
      )
    } else if (!isLoading && this.state.uiView ==="climateInfo") {
      return (
        <View style={styles.climateInfo}>

          <Text style={[styles.header_font, {textAlign:'center'}]}>How to help the enviorment</Text>
          <Text style={styles.descripton}>{descripton}</Text>
          <Button
              style={styles.climateButton1}
              onPress={() => this._handlePress("landingProfile")}>
              Profile
          </Button>
        </View>
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

const styles = EStyleSheet.create({
  climateInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: "#3B5899",
  },
  climateButton1: {
    backgroundColor: "#F2C400",
    borderRadius: 20,
    color: 'black',
    width: 250,
    height: 45,
    padding: 10,
    textAlign: 'center',
    marginLeft: 80
  },
  descripton: {
    padding: 20,
    color: "white", 
    fontSize: 18,
    textAlign: "center"
  },
  loadingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5899'
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
    width: '50%',
    backgroundColor: "#3DBB62",
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 10,
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

