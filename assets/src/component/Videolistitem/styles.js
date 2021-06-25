import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert,
    TouchableWithoutFeedback,Keyboard, Image } from 'react-native';

const styles = StyleSheet.create({ 

    thumbnail:{
    aspectRatio:16/9,
    width:'100%',  
  },
  timeContainer:{
    backgroundColor:'#00000099',
    height:25,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    position:'absolute',
    right:5,
    bottom:5,
  },
  time:{
    color:'#fff',
    fontWeight:'bold'
  },
  avatar:{
    width:50,
    height:50,
    borderRadius:25,
  
  },
  titleRow:{
    flexDirection: 'row',
    padding:10,
  },
  midleContainer:{
  marginHorizontal:10,
  flex:1,
  
  },
  title:{
    fontWeight:"500",
    fontSize:18,
    marginBottom:5,
  },
  subtitle:{
  color:'grey',
  fontSize:14,
  fontWeight:"500",
  }
  });

  export default styles;