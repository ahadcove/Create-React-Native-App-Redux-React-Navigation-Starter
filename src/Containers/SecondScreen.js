import React,{Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class SecondScreen extends Component{
    static navigationOptions = {
        title: 'Second',
    };
    
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={[styles.title, this.props.isActive && styles.activeTitle]}>Second Screen</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: 'slategrey'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white'
    },
    activeTitle: {
      color: 'red',
    },
  });

export default SecondScreen