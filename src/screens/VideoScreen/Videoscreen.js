
import React, { useRef } from 'react'
import { View, Text, Image, SafeAreaView, useColorScheme,
   ScrollView, FlatList, Pressable } from 'react-native'
import styles from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import video from '../../../assets/data/video.json';
import videos from '../../../assets/data/videos.json';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontsome from 'react-native-vector-icons/FontAwesome';
import Videolistitem from '../../components/Videolistitem';
import VideoPlayer from '../../components/VideoPlayer';
//import BottomSheet from '@gorhom/bottom-sheet';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const Videoscreen = () => {

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );
 
  const commentsSheetRef = useRef(null);


  const openComments = () => {
    commentsSheetRef.current?.present();
  };

 

    return (

        <View style={styles.container}>
     
            {/* video player */}
            < VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail}/>
           
                <View>  
               {/* video info */}

               <View style={styles.videoInfoContainer}>
                 <Text style={styles.tags}>{video.tags}</Text>
                 <Text style ={styles.title}>{video.title}</Text>
                 <Text style ={styles.subtitle}> {video.user.name} {video.createdAt}</Text> 
                 </View>  
                   {/*action list */}
           <View>
             <ScrollView horizontal showsHorizontalScrollIndicator = {false} style={styles.actionListContainer}>
                   <View style={styles.actionListItem}>
                   <Icon  name="like1" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
                    </View> 
                    
                    <View style={styles.actionListItem}>
                   <Icon  name="dislike2" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.dislikes} </Text>
                   </View> 
                   
                   <View style={styles.actionListItem}>
                   <Icon  name="export" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
                   </View> 
                   
                   <View style={styles.actionListItem}>
                   <Icon  name="download" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
                   </View>

                   <View style={styles.actionListItem}>
                   <Fontsome  name="share" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
                   </View>
                     
      
        </ScrollView>  
        </View>

                  {/* user info */}

                  <View style = {{flexDirection:'row', alignItems: 'center', paddingVertical:10, borderColor:'grey',
                                 borderTopWidth:1, borderBottomWidth:1}}>
                  <Image style = {styles.avatar} source={{uri:video.user.image}}/>
                  <View style = {{marginHorizontal:10, flex:1}}>
                    <Text style = {{color:'white', fontSize:18, fontWeight:'bold'}}>{video.user.name}</Text>
                    <Text style = {{color:'grey',fontSize:18}}>{video.user.subscribers} subscribers </Text>
                  </View>

                   <Text style = {{color:'red', fontSize:18, fontWeight:'bold', padding:10}}>Subscribe</Text>

                    </View>

                     {/* comments */}
                   
                     <Pressable onPress={openComments} styles = {{padding:10, marginVertical:10}}>
                       <Text style = {{color:'white', fontWeight:'bold'}}> Comments 333 </Text>
                        <View style = {{flexDirection:'row', alignItems:'center', marginVertical:10}}>
                         <Image style = {{width:35, height:35, borderRadius:20}} source={{uri:video.user.image}}/>
                         <Text style = {{color:'#fff', marginLeft:10}}>good job well done ooooooo</Text>
                         </View>
                 
                    </Pressable> 
                     {/* All Comments */}
                          <BottomSheet
                          ref={commentsSheetRef}
                          snapPoints={[0,'100%']}
                          index={-1}
                          renderContent={renderContent}>
                     </BottomSheet>
                  
                  </View>
   
      </View>  
    )
}

const VideoscreenWithRecommendation = () => {
 return (
 <SafeAreaView style = {{backgroundColor: '#141414', flex:1}}>
    <FlatList 
    data = {videos} 
    renderItem={({ item }) => < Videolistitem video={item} />}
   ListHeaderComponent={Videoscreen}
     />
</SafeAreaView>
 )
}

export default Videoscreen;
