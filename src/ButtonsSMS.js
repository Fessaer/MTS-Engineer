import * as React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import sms from './data';
import { createStackNavigator } from '@react-navigation/stack';
import ViewSMS from './ViewSMS';

const Tab = createMaterialBottomTabNavigator();

const ButtonsSMS = () => {
  const renderItem = ({ item }) => {
    const colorsStatus = {
      1: styles.appButtonContainer1,
      2: styles.appButtonContainer2,
      3: styles.appButtonContainer3,
      4: styles.appButtonContainer4,
      5: styles.appButtonContainer5,
      6: styles.appButtonContainer6
    }
    let categories = item.cat
    const buttonStyle = colorsStatus[categories]
    // console.log(ViewSMS)
  return (
    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed1')} style={buttonStyle}>
      <Text style={styles.appButtonText}>{`Номер: ${item.text} Категория ${item.cat}`}</Text>
    </TouchableOpacity>
  )};
  return (
    <SafeAreaView style={styles.container, {width: "90%"}}>
      <FlatList
        data={sms}
        renderItem={renderItem}
        keyExtractor={item => item.number}
      />
    </SafeAreaView>
  )
}

export default ButtonsSMS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 19,
    paddingVertical: 10,
  },
  
  items: {
    backgroundColor: '#f9c2ff',
    height: 50,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  appButtonContainer6: {
    elevation: 8,
    backgroundColor: "#808080",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer5: {
    elevation: 8,
    backgroundColor: "#DEB887",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer4: {
    elevation: 8,
    backgroundColor: "#DAA520",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer3: {
    elevation: 8,
    backgroundColor: "#FF00FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#FF0000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer1: {
    elevation: 8,
    backgroundColor: "#800000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainerClose: {
    elevation: 8,
    backgroundColor: "#00FF00",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});