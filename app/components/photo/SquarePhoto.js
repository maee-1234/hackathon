import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class SquarePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
      ress: ""
    };
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        
        this.setState({
          resourcePath: source,
          ress: source["assets"][0]["uri"]
        });
      }
    });
  };

  // Launch Camera
  cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        console.log('response', JSON.stringify(res));
        console.log(source["assets"][0]["uri"])
        this.setState({
          resourcePath: source,
          ress: source["assets"][0]["uri"]
        });
      }
    });
  }

  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
        launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        console.log('response', JSON.stringify(res));
        console.log(source["assets"][0]["uri"])
        this.setState({
          resourcePath: source,
          ress: source["assets"][0]["uri"]
        });
      }
    });
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.ress,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.ress}}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.ress}
          </Text>

          <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.cameraLaunch} style={styles.button}  >
              <Text style={styles.buttonText}>Launch Camera Directly</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.imageGalleryLaunch} style={styles.button}  >
              <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }
});