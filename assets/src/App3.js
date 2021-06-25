

import React from 'react';
import {
  View,Text,StyleSheet
} from 'react-native';

import Homescreen from './screens/HomeScreen'


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
    backgroundColor:'#d2d2d2',
  },

});


