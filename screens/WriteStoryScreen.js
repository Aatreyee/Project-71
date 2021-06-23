import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
import firebase from 'firebase/app';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
  submitStory = ()=>{ 
    console.log(db.collection("stories"))
     db.collection("stories").add({ 
       title: this.state.title, author: this.state.author, storyText: this.state.storyText, 
       date: firebase.firestore.FieldValue.serverTimestamp().now().toDate() })
       this.setState({
          title: '', author: '', storyText: '' 
        }) 
      } 
 render(){
 return(
   <View style={styles.inputView}>
  <TextInput
  style={styles.inputBox}
  placeholder="Story Title"
  />

<TextInput
  style={styles.inputBox}
  placeholder="Author Name"
  />

<TextInput
  style={styles.inputBox1} 
  multiline={true}
  placeholder="Write your story"
  />
  <TouchableOpacity style={styles.submitButton} onPress={()=>{
    this.submitStory();
  }}>
    <Text>
      SUBMIT
    </Text>
  </TouchableOpacity>

  </View>

  
 )
}
 

    
      
       
        
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  inputView:{
    flexDirection: 'column',
    margin: 20
  },
  inputBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 2,
    fontSize: 20,
    margin:20,
    backgroundColor:'#cfeb34',
    alignSelf:'center'
  },
  inputBox1:{
    width: 400,
    height: 250,
    borderWidth: 1.5,
    borderRightWidth: 2,
    fontSize: 20,
    margin:20,
    backgroundColor:'#cfeb34',
    alignSelf:'center'
  },
  scanButton:{
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
  },
  submitButton:{
    backgroundColor: '#ff9933',
    width: 100,
    height:50,
    alignSelf:'center',
    margin:40,
    justifyContent:'center',
    alignItem:'center'
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white',
    
  }
});
