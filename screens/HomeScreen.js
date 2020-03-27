import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import EyeScreen1 from './EyeScreen1';

function HomeScreen({ navigation }) {

  navigation.setOptions({ headerTitleStyle: {color: "#fff"} });
  navigation.setOptions({ headerStyle: {backgroundColor: "#B5E1FF"} });

  return (
    <View style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.topText}>
        Eye Training
      </Text>
    </View>
    <View style={styles.imgContainer}>
      <Image source={require('../assets/images/blueEye.png')} style={styles.welcomeImage}/>
    </View>
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Eye Training1')}>
        <Text style={{color: "#2F6387", fontWeight: "550", fontSize: 20}}>Begining Training</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Daily Training" component={HomeScreen} />
      <HomeStack.Screen name="Eye Training1" component={EyeScreen1} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2DAFF',
  },
  topContainer: {
    flex: 0.25
  },
  topText: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: 30,
    textAlign: 'center',
    color: '#fff'
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeImage: {
    width: 300,
    height: 150,
    marginLeft: 30,
    resizeMode: 'contain'
  },
  btnContainer: {
    flex: 1,
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
    backgroundColor: "#fff"
  }
});