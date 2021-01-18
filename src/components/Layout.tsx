import React, { Component } from "react";
import { View } from "react-native";
import HeaderComponent from "./HeaderComponent";
import SelectOffice from './SelectOffice';




export default class Layout extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          height: "auto",
          padding: 0,
          width:"100%",         
        }}
      >
        <HeaderComponent/>
        <SelectOffice />
       {/* <CalenderMain />  */}
      </View>
    );
  }
}
