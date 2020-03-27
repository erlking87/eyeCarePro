import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { render } from 'react-dom';

class EyeScreen1 extends React.Component {
    
    constructor() {
        super();
        this.state = {
            btnContainerFlex : 0.2
        }
    }

    startEyeCare = () => {
        console.log('test');
        this.setState({btnContainerFlex : 0});

        setTimeout(() => {
            alert('완료하였습니다.');
            this.setState({btnContainerFlex : 0.2});
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/images/gabor-hann.png')} style={{width: 400, height: 400}}/>
            </View>
            <View style={ [styles.btnContainer, { flex: this.state.btnContainerFlex }]} >
                <TouchableOpacity style={styles.btn} onPress={this.startEyeCare}>
                    <Text style={{color: "white", fontWeight: "100", fontSize: 20}}>Start</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }

}

export default EyeScreen1;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    imgContainer: {
        flex: 1,
        alignItems: 'center',
    },
    btnContainer: {
      alignItems: 'center',
    },
    btn: {
      width: "50%",
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 1,
      marginTop: 10,
      borderRadius: 5,
      backgroundColor: "#8BC34A"
    }
  });