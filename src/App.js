import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { FIREBASE_API_KEY } from 'react-native-dotenv';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: `${FIREBASE_API_KEY}`,
      authDomain: 'authentication-d7e93.firebaseapp.com',
      databaseURL: 'https://authentication-d7e93.firebaseio.com',
      projectId: 'authentication-d7e93',
      storageBucket: 'authentication-d7e93.appspot.com',
      messagingSenderId: '673440870252'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
