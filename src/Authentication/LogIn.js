import React from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { black } from 'ansi-colors';
import firebase from '../Config/Firebase';
import { StackActions, NavigationActions } from 'react-navigation';

var provider = new firebase.auth.FacebookAuthProvider();
export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
        };
    }

    logIn() {
        const { Email, Password } = this.state

        firebase.auth().signInWithEmailAndPassword(Email, Password)
            .then((success) => {
                // this.props.navigation.navigate('Home')
                // console.log('signin successfully', success.user);
                // localStorage.setItem('currentUserUid', success.user.uid)
                // location = './index.html';
                // this.props.history.push('/Dashboard')
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' }),
                        // NavigationActions.navigate({ routeName: 'LogIn' }),
                    ]
                })
                this.props.navigation.dispatch(resetAction)
            })
            .catch((error) => {
                // swal("Something went wrong", "", "error");
                alert('Invalid Email & Password')
                console.log('something went wrong', error)
            })
        console.log('log');

    }
    SignUp() {
        console.log("sign up page");
        this.props.navigation.navigate('SignUp')
        
    }
    static navigationOptions = { header: null }
    render() {
        const { Email, Password } = this.state
        

        return (
            <View style={styles.container} >
                <ScrollView style={styles.body} keyboardDismissMode="interactive">
                    <Text style={styles.Heading}>Log In</Text>
                    <TextInput
                        // style={{height: 40, borderColor: 'gray', borderWidth: 1 , width:'75%'}}
                        style={styles.input}
                        onChangeText={(e) => this.setState({ Email: e })}
                        value={Email}
                        returnKeyType='done'
                        placeholder={'Enter your Email'}
                        placeholderTextColor='rgba(255,255,255,0.7)'

                    />
                    <TextInput
                        // style={{height: 40, borderColor: 'gray', borderWidth: 1 , width:'75%'}}
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(e) => this.setState({ Password: e })}
                        value={Password}
                        placeholder={'Password'}
                        placeholderTextColor='rgba(255,255,255,0.7)'

                    />
                    <View>
                        <TouchableOpacity style={styles.buton} onPress={() => this.logIn()}>
                            <Text style={styles.ButtonText} >Log In</Text>
                        </TouchableOpacity>
                        {/* <Button
                            onPress={() => this.logIn()}
                            title="Sign In"
                            color='black'

                        /> */}
                    </View>
                    {/* <Button

                        onPress={() => this.SignUp()}
                        title="Creat Accout"
                        color='black'

                    /> */}
                    <TouchableOpacity style={styles.buton} onPress={() => this.SignUp()}>
                        <Text style={styles.ButtonText} >Create Account</Text>

                    </TouchableOpacity>
                </ScrollView>
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    
    Heading: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 60,
        marginBottom: 85,
        fontSize: 50,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: '#ffff',
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20,
        color: '#fff',
        height: 40,
        width: 300,
        paddingHorizontal: 10,
        fontSize: 18
    },
    buton: {
        alignItems: 'center',
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        marginBottom: 20,
        // width:150,
        // justifyContent: 'space-between',


    },
    ButtonText: {
        fontWeight: 'bold',
        color: "#ffff",
        // alignItems:'center'
        fontSize: 20
    }

});