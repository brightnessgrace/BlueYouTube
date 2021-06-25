import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert,
TouchableWithoutFeedback,Keyboard, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';



const Videolistitem = (props) => {
const{ video } = props;
  
    return (


        <View style ={styles.container}>
      
        <View style={styles.videoCard}>
             {/* thumbnail */}
        <View>
        <Image 
         source={{uri:video.thumbnail}}
         style = {styles.thumbnail}/>
         <View style={styles.timeContainer}>

                <Text style = {styles.time}>{video.duration} </Text>
         </View>
         </View>
             {/* titile row */}
         <View style = {styles.titleRow}>
          {/*avatar */}
          <Image 
            style = {styles.avatar}
           source={{uri:video.user.image}}
           />

           <View style= {styles.midleContainer}>
             <Text style ={styles.title}>{video.title}</Text>
             <Text style ={styles.subtitle}> {video.user.name}{video.views} {video.createdAt}</Text>
         
     
           </View>

           <Icon name="ellipsis-v" size = {16} color="#000" /> 
 
         
          </View>

          </View>
      </View>


      
    );

  
}

export default Videolistitem;