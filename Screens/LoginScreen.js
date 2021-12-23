import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
} from 'react-native';
import firebase from 'firebase';
import {
  Entypo,
  Fontisto,
  FontAwesome5,
  Octicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';
import db from "../config"

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"a@t.com", 
      password:"qwertyui"
    };
  }

  login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('Tabs');
      })
      .catch((error) => {
        var errorcode = error.code;
        var errorM = error.message;
        console.log(errorM);
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
         <ImageBackground
          source={require('../assets/appbg.jpg')}
          style={styles.image}>
          <View
            style={{
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
              backgroundColor: "black"
            }}>
          </View>
          <KeyboardAvoidingView style={{ marginTop: 20, alignItems: 'center' }}>
            <View style={styles.inputContainer}>
              <View style={styles.iconStyle}>
                <Entypo name={'mail'} size={25} color="white" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="email id"
                placeholderTextColor="white"
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
                value={this.state.email}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconStyle}>
                <AntDesign name={'eye'} size={25} color="white" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="password"
                placeholderTextColor="white"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
                value={this.state.password}
              />
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                this.login(this.state.email, this.state.password);
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

         
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    width: '80%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '90%',
    height: 50,
    borderColor: 'black',
    borderRadius: 20,
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'white',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 5,
    flex: 1,
    fontSize: 18,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
