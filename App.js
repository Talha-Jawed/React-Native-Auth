import React from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { black } from 'ansi-colors';
import Navigation from './Navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
    };
  }

 
  render() {

    return (
      // <View style={styles.container} >
      <Navigation/>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#7FB3D5',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
    // opacity:0.9
  },
  
  
});
