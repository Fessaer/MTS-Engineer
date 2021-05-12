import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Alert, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import sms from './data';


// import { styleButtons } from './styles';

// const HistoryScreen = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>History</Text>
//     </View>
//   )
// }
export default Test = () => {
  const [isStateTextSms, setStateSms] = useState(true);

const DetailsScreen = () => {
  // console.log(isStateTextSms, 'state')
  // const state = isStateTextSms.cat
  // const { isStateTextSms.cat } = data
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'powderblue'  }}>
      <Text>{isStateTextSms.cat}</Text>
      <Text>{isStateTextSms.status}</Text>
      <Text>{isStateTextSms.text}</Text>
    </View>
  );
}

const func = (props) =>  {
  return setStateSms(props)
}

function HomeScreen({ navigation }) {
  
  const renderItem = ({ item }) => {
    // setStateSms({item})
    const colorsStatus = {
      1: () => item.status === "open" ? styleButtons.appButtonContainer1 : styleButtons.appButtonContainerClose,
      2: () => item.status === "open" ? styleButtons.appButtonContainer2 : styleButtons.appButtonContainerClose,
      3: () => item.status === "open" ? styleButtons.appButtonContainer3 : styleButtons.appButtonContainerClose,
      4: () => item.status === "open" ? styleButtons.appButtonContainer4 : styleButtons.appButtonContainerClose,
      5: () => item.status === "open" ? styleButtons.appButtonContainer5 : styleButtons.appButtonContainerClose,
      6: () => item.status === "open" ? styleButtons.appButtonContainer6 : styleButtons.appButtonContainerClose
    }
    let categories = item.cat
    const buttonStyle = colorsStatus[categories]()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', func(item))} style={{ width: '100%' }, buttonStyle}>
      <Text style={styleButtons.appButtonText}>{`Номер: ${item.text} Категория ${item.cat}`}</Text>
    </TouchableOpacity>
  )};
  return (
    <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'powderblue' }}>
      <FlatList
        data={sms}
        renderItem={renderItem}
        keyExtractor={item => item.number}
      />
    </View>
  );
}

const HomeStack2 = createStackNavigator();
const HomeStack = createMaterialTopTabNavigator();


  return (
    
    <NavigationContainer>
      <HomeStack.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 14, marginTop: 20 },
          tabStyle: { width: 130 },
          style: { backgroundColor: 'powderblue' },
        }}>
        <HomeStack2.Screen name="incidents" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  
  );
}

const styleButtons = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
    paddingVertical: 10,
  },
  
  items: {
    backgroundColor: '#f9c2ff',
    height: 50,
    marginVertical: 8,
    // marginHorizontal: 16,
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
