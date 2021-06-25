/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/screens/HomeScreen';
import Videoscreen from './src/screens/VideoScreen/Videoscreen'




function App() {
  console.log('imefika');


  return(
           <Videoscreen/>
    
  );
 /* return (
    <SafeAreaView>

       <Navigator/>
    
    </SafeAreaView>


  );*/


}
export default App;
