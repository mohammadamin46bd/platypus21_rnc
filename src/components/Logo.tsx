import React, { Component } from "react";
// import { Image } from 'react-native-elements';
import { Image } from 'react-native';


export default class Logo extends Component {
  render() {
    return (

      <Image
      style={{ width: 150, height: 44 }}
      source={require('../../assets/Platypus-logo.png')}
    />
    );
  }
}
