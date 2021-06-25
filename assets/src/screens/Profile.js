import React, { useState } from 'react';
import { View } from 'react-native';
import Videolistitem from '../component/Videolistitem';
import videos from '../../assets/data/videos.json';



export default function Profile() {

  
    return (

      <View>

        <Videolistitem video={videos[0]} />
        <Videolistitem video={videos[1]} />
        <Videolistitem video={videos[2]}/>

      </View>
    );
}