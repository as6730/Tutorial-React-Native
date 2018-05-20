// import { AppRegistry } from 'react-native';
// import App from './App';

import React from 'react';
import { AppRegistry } from 'react-native'
import Header from './src/components/header';

// Create a component 
const App = () => (
  <Header />
);

// Render it to the device 
// Must always register at least one component 
AppRegistry.registerComponent('albums', () => App);

// AppRegistry.registerComponent('albums', () => App);
