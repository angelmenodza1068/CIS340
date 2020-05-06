import React, { Component}from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class myApp extends Component {

constructor(props)
{
  super(propers);
  this.state ={count: 0};
}
onTap = () => {

  this.setState({count: this.state.count +1});
}
   render() {
     const {count} = this.state;
   
  return (
    <View style={styles.container}>
<View style={styles.counterText}>
  <Text> Tap Counter: {count} </Text>
  </View>

    <TouchableOpacity
    style={styles.button}
    onPress={this.onTap}
    >
      <Text>
           Touch Me
      </Text>
    </TouchableOpacity>
</View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#FFFFE0", 
  },
  button: {
      alignItmes: "center",
      backgroundColor: "#FFFFE0", 
      padding: 10

  },

  counterText: {
alignItems: "center",
padding:10

  }
});
