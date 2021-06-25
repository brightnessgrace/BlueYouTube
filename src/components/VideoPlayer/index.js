import React, {useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  Video  from 'react-native-video';


  
    const VideoPlayer = ({videoURI,thumbnailURI}) => {
      
        //console.log(videoURI);
    return (
      <View>
     
     <Video
     source={{ uri: videoURI }}
    style={{ width:'100%', aspectRatio:16/9 }}
    posterSource={{
        uri: thumbnailURI,
      }}
      posterStyle={{
        resizeMode: "cover",
      }}
      usePoster={false}
    controls={true}
    resizeMode="contain"
 />
      </View>
    );
  };
  
  export default VideoPlayer;