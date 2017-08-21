import React,{Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import {basicAction} from '../Services/Actions/BasicActions';

class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Welcome',
    };
    
    constructor(){
        super();
        this.state={
            title:"Welcome Home"
        }
    }

    pressed = () => {
        this.props.basicAction();
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style={[styles.title, this.props.isActive && styles.activeTitle]}>Welcome Home</Text>
                <Button
                    onPress={() => navigate('Second')}
                    title="Second Screen"
                />
                <Button
                    onPress={this.pressed}
                    title="Change Reducer"
                />
                <Text>{this.props.basic.message}</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      backgroundColor: 'white'
    },
    title: {
      marginTop:30,
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black'
    },
    activeTitle: {
      color: 'red',
    },
  });

  
  const mapState = (state = {}) => {
      return {...state};
  };
  
  const mapDispatch = (dispatch) => {
      return {
          basicAction:() => {
              dispatch(basicAction())
          }, 
      }
  };
  
export default connect(mapState, mapDispatch)(HomeScreen)
  