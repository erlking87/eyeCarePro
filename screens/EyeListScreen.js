import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import EyeScreen1 from './EyeScreen1';

function EyeListScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Eye Training1')}>
          <Image source={require('../assets/images/list1.png')} style={{width:200, height:200}}/>
        </TouchableOpacity>
      </View>
    );
  }
  
  const EyeListStack = createStackNavigator();
  
  function EyeListStackScreen() {
    return (
      <EyeListStack.Navigator>
        <EyeListStack.Screen name="List" component={EyeListScreen} />
        <EyeListStack.Screen name="Eye Training1" component={EyeScreen1} />
      </EyeListStack.Navigator>
    );
  }

  export default EyeListStackScreen;

  const styles = StyleSheet.create({
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