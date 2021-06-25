import React,{ Component } from 'react';
import { View, Text, Stylesheet, Image, useColorScheme } from 'react-native';
import styles from './styles';
import { StackNavigation } from 'react-navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';

console.log('imefika3');
export default class LoadingScreen extends Component {
   
   componentDidMount(){
        setInterval(() => {
            this.props.navigation.navigate('Profile')
        }, 3000);
     }


 
     render(){
       
         return(
    

           
            <View style = {styles.container}>  
                 <Image source={require('../images/logo.png')}
                
                style = {styles.image} />
          
             </View>
         
         );
        
   }
 }
 
 

