import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Berita News',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center'}}>
        <View style={{width:50, height:50, backgroundColor: 'red'}} />
        <View style={{width:50, height:50, backgroundColor: 'orange'}} />
        <View style={{width:50, height:50, backgroundColor: 'yellow'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
