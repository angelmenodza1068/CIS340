import React, { useState }from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-piker' 
export default function App() {


const [selectedImage, setSelectedImage]
 = Teact.useState(null)

let openImagePickerAsync = async() => {
let permissionResult = await ImagerPicker.requestCammeraRollPermissionsAsync();
if(permissionResult.granted === false){

  alert("Permision is required!");
  return;
}
let pickerResult = await ImagePicker.lauchImageLibaryAsync();
if(pickerResult.cancelled ===ture) {
  return;
}
setSelectedImagae({localuri: pickerTesult.uri});


};
if(selectedImage !== null) {
  return (
    <View style={StyleSheet.contanier}>
      <Image source={{uri: selectedImage.localuri}} />style={styles.selImage}
    </View>
  )
}

  return (
    <View style={styles.container}>
      <Image source={{uri: 'nodejs\CIS340\MySixthProject\assets'}}
                style={styles.logo} />
      <Text style = {styles.insts}>
        Press the button below to selct an image on your phone!
      </Text>
      
<View style={styles.counterText}>
  
  </View>

    <TouchableOpacity
    style={styles.button}
    onPress={openImagePickerAsync}
    >
      <Text style= {styles.buttonText} > Pick Image 
      </Text>
    </TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0", 
  },
  button: {
      alignItmes: "center",
      backgroundColor: "#FFFFE0", 
      padding: 10

  },
  insts:{
    fontSize: 18,
    color: "#888",
    marginHorizontal:15,
    marginBottom: 10

  },

  logo: {
    width: 310,
    Height: 300,
    marginBottom: 20
  },
  buttonText: {
   fontSize: 20,
   color: "#fff"
  },
  slImage:{
    width:300,
    height:300,
    resizeMode: 'contain'
  }
});
