// import { AppRegistry } from 'react-native';
// import App from './App';

import React from 'react';
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component 
const App = () => (
  <View> 
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device 
// Must always register at least one component 
AppRegistry.registerComponent('albums', () => App);

// AppRegistry.registerComponent('albums', () => App);
