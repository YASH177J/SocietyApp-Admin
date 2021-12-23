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
import db from "../config"
export default class ViewComplaintsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: firebase.auth().currentUser.email,
      studentId: '',
      studentName: '',
      studentCurriculum: '',
      studentCurriculumLevel: '',
      studentClassNo: '',
      teacherId: firebase.auth().currentUser.uid,
    };
  }

//Function to add student details in db
  addStudentDetails = () => {
    db.collection('allStudents').add({
      teacherId: this.state.teacherId,
      studentName: this.state.studentName,
      studentCurriculum: this.state.studentCurriculum,
      studentCurriculumLevel: this.state.studentCurriculumLevel,
      studentClassNo: this.state.studentClassNo,
      teacherEmail: this.state.emailId,
    });
    alert('Complaint Added');
    Alert.alert('Complaint Added');
    this.props.navigation.navigate('StudentListScreen');
  };

  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Header
            centerComponent={{
              text: 'Add A Complaint',
              style: {
                fontWeight: 'bold',
                fontSize: 19,
                color: 'white',
              },
            }}
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#ffffff"
                onPress={() => this.props.navigation.goBack()}></Icon>
            }
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
              placeholder={'Please Let Us know the Complaint in detail...'}
              multiline = 'true'
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
                this.addStudentDetails();
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
