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


const NUM_WALLPAPERS = 5;

class ClimateEdu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallsJSON: [],
      isLoading: true
    };
  }


  fetchWallsJSON() {
    var url = "https://api.spotify.com/v1/search?query=beyonce&offset=0&limit=20&type=album";
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        var randomIds = RandManager.uniqueRandomNumbers(NUM_WALLPAPERS, 0, jsonData.albums.items.length);
        var walls = [];
        randomIds.forEach(randomId => {
          walls.push(jsonData.albums.items[randomId]);
        });

        this.setState({
          isLoading: false,
          wallsJSON: [].concat(walls)
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
    var {wallsJSON, isLoading} = this.state;
    if( !isLoading ) {
      return (
        
     <View>
          {wallsJSON.map((wallpaper, index) => {
            return(
              <Image
                style={{width: 50, height: 50}}
                source={{uri:wallpaper.images[0].url}}
              ></Image>

            );
          })}  
     </View>
      );
    }
  }

  render() {
    console.log(this.state.wallsJSON)
    console.log(this.state)
    var {isLoading} = this.state;
    if(isLoading)
      return this.renderLoadingMessage();
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
  }
});

AppRegistry.registerComponent('ClimateEdu', () => ClimateEdu);

