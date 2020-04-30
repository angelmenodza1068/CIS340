import React from 'react';
import { StyleSheet, Text, View, button, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
           <Button
             OnPress={() => {
               alert('you tapped a button');
             }}
             title ="Press Button 1"

      />
    </View>


    <View style={Styles.containerLayoutButton}>
    <Button
             OnPress={() => {
               alert('you tapped a button');
             }}
             title ="Press Button 2"

      />

<Button
             OnPress={() => {
               alert('you tapped a button Great!');
             }}
             title ="Great!"
            color='green'
      />
    </View>

    <View style={styles.containerButton}>

    <Button
             OnPress={() => {
               alert('you tapped a button Tap Me!');
             }}
             title ="TAp Me!"

      />
         </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 25,
  },

  containerLayoutButton: {
       margin: 20,
       flexDirection: 'row',
       justifyContent: 'Spave-between'

  }

});
