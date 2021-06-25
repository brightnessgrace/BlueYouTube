import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScene from './LoadingScene';
import Profile from './Profile';



const screens = {
  
    Home: {
     screen: LoadingScene,
     navigationOptions: {
     //  header: null,
     headerShown: false,
   },
    
   },
   
    Profile: {
     
     screen: Profile,
     navigationOptions: {
       headerShown: false, 
       //header: null,
   },
 }
 }
   
   const HomeStack = createStackNavigator(screens);
   
   
   export default createAppContainer(HomeStack);
   