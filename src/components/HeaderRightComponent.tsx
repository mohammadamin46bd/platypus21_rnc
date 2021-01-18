import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default class HeaderRightComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          alert("Ska göra något");
        }}
      >
        <Icon name="menu" color="#fff" />
      </TouchableOpacity>
    );
  }
}
