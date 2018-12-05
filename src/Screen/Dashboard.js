import React from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import firebase from '../Config/Firebase'
import { StackActions, NavigationActions } from 'react-navigation';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

LogOut(){
    // this.props.navigation.navigate('LogIn')
    
    firebase.auth().signOut()
    .then(function () {
        
        
        console.log('logout***');
        
      })
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'LogIn' }),
            // NavigationActions.navigate({ routeName: 'LogIn' }),
        ]
    })
    this.props.navigation.dispatch(resetAction)

}
static navigationOptions = { header: null }
    render() {

        return (
            <View  >
                <Text>Home Page</Text>
                <Button
                    onPress={() => this.LogOut()}
                    title="Sign In"
                    color='black'

                />
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#7FB3D5',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginTop: 20,
//     // opacity:0.9
//   },


// });
