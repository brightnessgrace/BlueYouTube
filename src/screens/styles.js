import { StyleSheet,useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const styles = StyleSheet.create ({
container:{
    width:'100%',
    height: '100%',
    alignItems:'center'
  
},

 text:{
    color:'white',
    alignItems:'center',
    justifyContent:'center',
},
profiletext:{

    backgroundColor: 'rgba(52, 52, 52, 0.8)'
},
containment:{

    width:'100%',
    height: '100%',
    alignItems:'center',
    backgroundColor: '#d2d2d2',
    justifyContent:'center',
    flex:1,
},

image:{
    marginTop:250,
    alignItems:'center',
    justifyContent:'center',
},
buttoncontainer:{
    marginTop:20,
},
item: {
    padding:16,
    marginTop:16,
    borderColor:'#000',
    borderWidth:1,
    borderStyle:'dashed',
    borderRadius:20,
    flexDirection:'row',
},

input:{
    marginBottom:10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'#000'
},
itemText:{
    marginLeft:10,
}


});



export default styles;