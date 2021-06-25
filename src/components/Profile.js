import React, {usestate} from 'react';
import {View, Text,StyleSheet, useColorScheme, FlatList}  from 'react-native';
import Videolistitem from '../components/Videolistitem';
import videos from '../../assets/data/videos.json';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Profile = () => {

  const isDarkMode = useColorScheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  
  };

    return (

      <View >
         <FlatList 
           data = {videos}
           renderItem={({ item }) => < Videolistitem video={item} />}
            />

    </View>
    );
}

export default Profile;