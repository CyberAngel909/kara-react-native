import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import firebase from "../database/firebaseDb";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";

export default class Login extends Component {
    
    constructor() {
        super();
        this.state = { 
          email: '', 
          password: '',
          isLoading: false
        }
    }
    
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    userLogin = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signin!')
        } else {
          this.setState({
            isLoading: true,
          })
          firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
            this.setState({
              isLoading: false,
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Mainapp')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
    }

    render() {
        if(this.state.isLoading){
            return(
              <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
              </View>
            )
          }
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require("../assets/logo_youtobe.png")} />

                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#003f5c"
                        value={this.state.email}
                        onChangeText={(val) => this.updateInputVal(val, 'email')}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        value={this.state.password}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                        maxLength={15}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot_button}
                        onPress={() => this.props.navigation.navigate('Reset')}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}
                        onPress={() => this.userLogin()}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.loginBtn, {
                    marginTop: 20,
                    backgroundColor: "#6699FF",
                }]}>
                    <Text style={styles.loginText}
                        onPress={() => this.props.navigation.navigate('Signup')}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 50,
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
    loginText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600"
    }
});