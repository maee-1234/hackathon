import React from "react";
import {
  Image,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { WebView } from 'react-native-webview';
import { notificationFeed } from "../../mock";
import { width, colors } from "../../utils";

import NavigationWraper from "../../components/NavigationWraper";
import Tweet from "../../components/Tweet";
import NotificationCard from "./NotificationCard";

class Notification extends React.Component {
  constructor(props){
    super(props);
    this.state={
      a:true,
      link:''
    };
  }
  state = { sec: 0, pos: 0 };

  mappingNumber(x, in_min, in_max, out_min, out_max) {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  animateHeader = event => {
    let x = event.nativeEvent.contentOffset.x / 2;
    this.setState({ pos: x });
    this.setState({ sec: x >= width / 4 ? 1 : 0 });
  };

  render() {
    return (
      <NavigationWraper
        navigation={this.props.navigation}
        selected={2}
        headerStyle={{ borderBottomWidth: 0 }}
        rightIcon={
          <TouchableOpacity style={{ padding: 5 }}>
            <Image
              style={{ height: 28, width: 28 }}
              source={require("../../../assets/topGear.png")}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        }
        title={
          <Button 
  title = '다른 링크로 바꾸기'
  onPress = {() => this.setState({a:!this.state.a})}
  />

          
        }
      >
        {this.state.a ? (<WebView 
    source={{
        uri:this.state.link,
    }}
    style={{
		opacity:0.99,
        minHeight:1,
    }}
     
/>) : (
  <View
  style = {styles.container}>
  <Button 
  title = 'convert'
  onPress = {() => this.setState({a:!this.state.a})}
  />
  <TextInput
        label="이 곳에 입력"
        value={this.state.link}
        onChangeText={(text) => this.setState({ link: text})}
      />
  </View>
)}
      </NavigationWraper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.exexlight_gray
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});

export default Notification;
