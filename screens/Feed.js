import React, { Component } from 'react';
import { Text, View,Platform,SafeAreaView,StatusBar,Image,ImageBackground ,StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import {FlatList} from 'react-native-gesture-handler'
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import StoryCard from './StoryCard'

let customFonts = {"BubbleGum-Sans":require("../assets/fonts/BubblegumSans-Regular.ttf")}
let stories = require("../assets/temp_stories.json")

export default class Feed extends Component {
  
  constructor(props){
      super(props)
      this.state = {
          fontLoaded:false
      }
  }
async loadFontsAsync (){
    await Font.loadAsync(customFonts)
    this.setState({
        fontLoaded:true
    })
}
componentDidMount(){
    this.loadFontsAsync()
}
keyExtractor = (item,index)=>{index.toString()}
renderItem =({item:story})=>{
    <StoryCard story = {story}/>
}
    render() {
        if(!this.state.fontLoaded){
            return(
                <AppLoading/>
            )
        }
        else{
            return (
                <View style={styles.container}>
     <SafeAreaView style={styles.droidSafeArea} />
     <View style={styles.appTitle}>
       <View style={styles.appIcon}>
         <Image
           source={require("../assets/logo.png")}
           style={styles.iconImage}
         ></Image>
       </View>
       <View style={styles.appTitleTextContainer}>
         <Text style={styles.appTitleText}>Storytelling App</Text>
       </View>
     </View>
     <View style={styles.cardContainer}>
      <FlatList
      keyExtractor={this.keyExtractor}
      data = {stories}
      renderItem = {this.renderItem}
      />
     </View>
   </View>
       )}
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.93
    }
  });