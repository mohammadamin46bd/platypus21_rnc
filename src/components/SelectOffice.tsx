import React, { Component } from "react";

import { SafeAreaView, ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import {officedata} from "../data/officedata"

export default class SelectOffice extends Component {
    
  render() {
      
    return (
     <SafeAreaView>
       <Text style={{padding: 0, margin:0, paddingLeft: 15, fontWeight:"500"}}>Välj kontor</Text> 
        <ScrollView horizontal={true}
                style={{
                  display: "flex",
                  
                  flexDirection: "row",
                  height: "auto",
                  padding: 0,
                  width: "100%",
                  flexWrap: "nowrap"
                  
                }}
        >

          {officedata.office.map((office) => {

              return (
                <Card containerStyle={{marginTop:5}} key = {office.name}>
                <Card.Image style={{ width: 150, height: 150, zIndex:1 }} source={office.avatar} />
                <Text style={{ marginBottom: 10, textAlign: "center" }}>
                {office.name}
                </Text>
              </Card>

              )
          })}


      </ScrollView>
     </SafeAreaView>
      
    );
  }
}
