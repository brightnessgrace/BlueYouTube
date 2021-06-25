
import React from 'react';


import { StyleSheet, View, Text} from 'react-native';


import Homescreen from './screens/HomeScreen';


export default function App(){

  return (
  <View style = {styles.container}>
    
    <Homescreen />
      
    </View>
  );
  
  }
  
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      backgroundColor:'#fff',
    },
  
  });