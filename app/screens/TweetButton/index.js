import React, { Component, useEffect} from 'react';
import { TextInput, StyleSheet, View, Text, Alert, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import SquarePhoto from "../../components/photo/SquarePhoto";
export default class TweetButton extends Component {
 
  state = {
    text: '',
    inputText: '',
    dat: ''
  }
 
  submitBtn = () => {
    this.setState({text: this.state.inputText});
  }

  
  getMoviesFromApi = (url) => {
    fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
}).then((response) => console.log(response));
  };



  render() {


  

    return (
      <Posting text={this.state.text} inputText={this.state.inputText} submitBtn={this.submitBtn}/>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEAD0',
    paddingHorizontal: 30,
    flex: 1,
  },
  headerText: {
    paddingTop: 50,
    alignItems: 'center',
    fontSize: 30,
  },
  bodyContainer: {
    backgroundColor: '#FDF5DC',
    paddingHorizontal: 20,
    marginVertical: 30,
    flex: 1
  },
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  showText: {
    marginTop: 10,
    fontSize: 25,
  }
})

function Posting(props) {
  /*const [selected, setSelected] = useState();
  // 로딩 
  const [loading, setLoading] = useState(false);
  //접근 권한 허용했는지 
  const [hasAllow , setHasAllow] = useState(false);*/
  const requestPermisison = async () => {
    const response = await Permissions.askAsync(Permissions.CAMERA);
    console.log(response);
  };

  useEffect(() => {
    requestPermisison();
  }, []);

  return(<SquarePhoto />)
}