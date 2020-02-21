import React from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, View} from 'react-native';
import User from '../User';
import firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  UNSAFE_componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyCBD1WA76atfU-NK5oTbcNu91xftqKrk0k',
      authDomain: 'one-time-auth-17fea.firebaseapp.com',
      databaseURL: 'https://one-time-auth-17fea.firebaseio.com',
      projectId: 'one-time-auth-17fea',
      storageBucket: 'one-time-auth-17fea.appspot.com',
      messagingSenderId: '202257909488',
      appId: '1:202257909488:web:6f8ae714690313e6f4e435',
      measurementId: 'G-1L9VPLK7F3',
    };
    firebase.initializeApp(config);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    console.log(User.phone);
    this.props.navigation.navigate(User.phone ? 'Home' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
