import React , {Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ListItem, Avatar, Header, Icon } from 'react-native-elements';
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
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.uid,
      email: firebase.auth().currentUser.email,
      allMessages: [],
      userName        : "",
    };
  }

  getMessages = () => {
    
  };



  componentDidMount() {
    this.getMessages();
  }
  renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => {
        
      }}>
      <ListItem.Content>
        <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
          
        </ListItem.Title>
        <ListItem.Subtitle></ListItem.Subtitle>
      </ListItem.Content>

      <Feather
        name="arrow-right"
        size={25}
        color="#60CC9A"
        style={{ alignSelf: 'center' }}
      />
    </ListItem>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
         <View style={{flex:0.3, backgroundColor:"green", justifyContent:"center", alignItems:"center"}}>
         <Text>Welcome</Text>
         </View>

          <View style={{ flex: 0.7 }}>
            <FlatList
              data={this.state.allMessages}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          </View>
           <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              this.props.navigation.navigate('AddAnnouncementsScreen');
            }}
            style={styles.touchableOpacityStyle}>
            <Text style={styles.fabText}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
   fabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 30,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: 25,
  },
});
