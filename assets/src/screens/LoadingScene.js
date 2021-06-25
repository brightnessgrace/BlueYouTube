
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';


export default class LoadingScene extends Component{
   

   componentDidMount(){
      setInterval(() => {
          this.props.navigation.navigate('Profile')
      }, 3000);
   }

    render(){
        return(

            <View style = {styles.container}>
                <Image source={require('../images/logo.png')}
                  style = {styles.image}></Image>

            </View>
        );
       
  }
}