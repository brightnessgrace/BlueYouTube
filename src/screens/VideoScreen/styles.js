import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
     container:{
       backgroundColor:'#303030',
      
     },
    videoPlayer:{
        width:'100%',
        aspectRatio:16/9,
     
    },
    videoInfoContainer:{
     margin:10,
    
    },
    title:{
        color:'#000',
        fontSize:18,
        fontWeight:"500",
        marginVertical:10,
    },
    subtitle:{
        color:'grey',
        fontSize:14,
        fontWeight:"500"
    },
    tags:{
        fontSize:16,
        fontWeight:"500",
        color:'#0094e3',
        
    },
    actionListContainer:{

     flexDirection:'row',
    },

    actionListItem:{
        width:60,
        height:60,
        justifyContent:'space-around',
        alignItems:'center',
    },
    actionText:{
        color:'black',
    }
});

export default styles;