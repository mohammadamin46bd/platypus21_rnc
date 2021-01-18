import React, { Component } from "react";
import { Header } from "react-native-elements";
import Logo from "./Logo";
import HeaderRightComponent from './HeaderRightComponent';
export default class HeaderComponent extends Component {
  render() {
    return (
      <Header
        placement="left"
        leftComponent={<Logo />}
        rightComponent={<HeaderRightComponent />}
        containerStyle={{
          width: "100%",
          backgroundColor: "gray",
          justifyContent: "space-around",
        }}
      />
    );
  }
}
