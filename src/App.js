import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { FIREBASE_API_KEY } from 'react-native-dotenv';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: `${FIREBASE_API_KEY}`,
      authDomain: 'authentication-d7e93.firebaseapp.com',
      databaseURL: 'https://authentication-d7e93.firebaseio.com',
      projectId: 'authentication-d7e93',
      storageBucket: 'authentication-d7e93.appspot.com',
      messagingSenderId: '673440870252'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button text="Log Out" onPress={() => firebase.auth().signOut()} />
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
