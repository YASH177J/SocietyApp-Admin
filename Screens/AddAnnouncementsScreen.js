import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
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
import db from '../config';
export default class AddAnnouncementsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: firebase.auth().currentUser.email,
      complaintTitle: '',
      complaintDescription: '',
      complaintImage: '#',
      
    };
  }

  addComplaints = () => {
    db.collection('complaints').add({
      userId: this.state.emailId,
      complaintTitle: this.state.complaintTitle,
      complaintDescription: this.state.complaintDescription,
      complaintImage: this.state.complaintImage,
      complaintReply:"Awaiting response"
    });
    alert('Announcement Added');
    Alert.alert('Announcement Added');
    this.props.navigation.navigate('StudentListScreen');
  };

  getUserDetails() {
    db.collection('users')
      .where('email', '==', this.state.emailId)
      .get()
      .then(() => {});
  }
  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Header
            centerComponent={{
              text: 'Add Announcements',
              style: {
                fontWeight: 'bold',
                fontSize: 19,
                color: 'white',
              },
            }}
            backgroundColor={'green'}
          />
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              style={styles.textinput}
              placeholder={'Title'}
              onChangeText={(text) => {
                this.setState({
                  studentName: text,
                });
              }}
              value={this.state.studentName}
            />
            <TextInput
              style={styles.textinput2}
              placeholder={'Details'}
              multiline="true"
              onChangeText={(text) => {
                this.setState({
                  studentCurriculum: text,
                });
              }}
              value={this.state.studentCurriculum}
            />
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => {
                this.addComplaints();
              }}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  updateButton: {
    width: '60%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
  },
  textinput: {
    marginTop: 5,
    marginBottom: 5,
    width: '80%',
    height: 50,
    borderColor: 'black',
    borderBottomWidth: 1.5,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  textinput2: {
    marginTop: 5,
    marginBottom: 5,
    width: '80%',
    height: 100,
    borderColor: 'black',
    borderBottomWidth: 1.5,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
});
