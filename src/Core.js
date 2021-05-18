/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SmsAndroid from 'react-native-get-sms-android';
import {Context} from './Components/Store';
import {styleButtons, stylesDetail} from './Components/Styles/styles';
import agregatedSms from './Components/agregateSms';
import sendSmsPackedg from './Components/sendSmsPackege';
import Footer from './Components/Footer';

const Test = () => {
  const [isStateTextSms, setStateSms] = useState(true);
  const [inState, inSetState] = useContext(Context);
  useEffect(() => {
    let filter = {
      address: 'Remedy_tb',
      maxCount: 40,
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      fail => {
        console.log('Failed with this error: ' + fail);
      },
      (count, smsList) => {
        let arr = JSON.parse(smsList);
        let texts = arr.map(function (object) {
          const id = object._id;
          const body = object.body;
          const date = object.date;
          return {body, date, id};
        });
        let dataResult = [];
        texts.forEach(targetText => {
          //TARGET MSK
          const resultMsk = () => {
            try {
              const msk = targetText.body.match(/MSK0000\d+/g)[0];
              return msk.replace(/\.$/, '');
            } catch (err) {
              return 'Data Undefined';
            }
          };
          const number = resultMsk();

          //TARGET KAT
          const resultKat = () => {
            try {
              let katTarget = targetText.body.match(/Кат.\S+/g)[0];
              let kat = katTarget[katTarget.length - 1];
              return kat;
            } catch (err) {
              return 'Data Undefined';
            }
          };
          const cat = resultKat();

          //STATUS
          const resultStatus = () => {
            try {
              let statusTarget = targetText.body.match(/Статус\W\S+/g)[0];
              let status = statusTarget.replace(/"/g, '').slice(7);
              return status;
            } catch (err) {
              return 'Data Undefined';
            }
          };
          const status = resultStatus();
          let text = targetText.body;
          let date = targetText.date;
          let id = targetText.id;
          dataResult.push({text, number, cat, status, date, id});
        });
        let data = agregatedSms(dataResult);
        inSetState({data});
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DetailsScreen = () => {
    const [state, setState] = useState(true);
    // console.log(isStateTextSms, 'targetData');
    let {number} = isStateTextSms;
    // console.log(isStateTextSms);
    const targetNumber = () => {
      try {
        return number.slice(7);
      } catch {
        return 0;
      }
    };
    let num = targetNumber();
    const statusButtonDisabled = () =>
      state.valueEnd === undefined ||
      state.valueExit === undefined ||
      state.valueEnd === '' ||
      state.valueExit === ''
        ? true
        : false;
    const changeText = e => {
      let valueEnd = e;
      setState({...state, valueEnd});
    };
    const changeText2 = e => {
      let valueExit = e;
      setState({...state, valueExit});
    };
    return (
      <SafeAreaView style={stylesDetail.container}>
        <ScrollView style={stylesDetail.scrollView}>
          <TouchableOpacity
            style={{marginVertical: 10}}
            onPress={() => {
              sendSmsPackedg(num, 'i s');
            }}>
            <View
              style={{
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                height: 40,
                elevation: 5,
              }}>
              <Text style={{color: 'white'}}>Взять в работу</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={statusButtonDisabled()}
            onPress={() => {
              sendSmsPackedg(
                num,
                'i e',
                `${state.valueEnd}#${state.valueExit}`,
              );
            }}>
            <View
              style={{
                backgroundColor:
                  statusButtonDisabled() === false ? 'red' : 'grey',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                height: 40,
                elevation: 5,
              }}>
              <Text style={{color: 'white'}}>Закрыть МИ</Text>
            </View>
          </TouchableOpacity>
          <TextInput
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              height: 40,
              marginVertical: 10,
              elevation: 5,
            }}
            onChangeText={changeText}
            value={state.valueEnd}
            placeholder="причина"
          />
          <TextInput
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              height: 40,
              elevation: 5,
              marginBottom: 14,
            }}
            onChangeText={changeText2}
            value={state.valueExit}
            placeholder="решение"
          />
          <Text>Категория: {isStateTextSms.cat}</Text>
          <Text>Статус: {isStateTextSms.status}</Text>
          <Text>{isStateTextSms.text}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  };

  const func = props => {
    return setStateSms(props);
  };

  const HomeScreen = ({navigation}) => {
    const renderItem = ({item}) => {
      // console.log(item.text.match(/г. Пермь\S+\W+\d+/)); //.match(/г. Пермь, \S+/g)[0]);
      const colorsStatus = {
        1: () => {
          try {
            return (item.status !== 'Решен' &&
              item.status !== 'Исследование') ||
              item.status === 'Data Undefined'
              ? styleButtons.appButtonContainer1
              : styleButtons.appButtonContainerClose;
          } catch {
            return styleButtons.appButtonContainer6;
          }
        },
        2: () => {
          try {
            return (item.status !== 'Решен' &&
              item.status !== 'Исследование') ||
              item.status === 'Data Undefined'
              ? styleButtons.appButtonContainer2
              : styleButtons.appButtonContainerClose;
          } catch {
            return styleButtons.appButtonContainer6;
          }
        },
        3: () => {
          try {
            return (item.status !== 'Решен' &&
              item.status !== 'Исследование') ||
              item.status === 'Data Undefined'
              ? styleButtons.appButtonContainer3
              : styleButtons.appButtonContainerClose;
          } catch {
            return styleButtons.appButtonContainer6;
          }
        },
        4: () => {
          try {
            return (item.status !== 'Решен' &&
              item.status !== 'Исследование') ||
              item.status === 'Data Undefined'
              ? styleButtons.appButtonContainer4
              : styleButtons.appButtonContainerClose;
          } catch {
            return styleButtons.appButtonContainer6;
          }
        },
        5: () => {
          try {
            return (item.status !== 'Решен' &&
              item.status !== 'Исследование') ||
              item.status === 'Data Undefined'
              ? styleButtons.appButtonContainer5
              : styleButtons.appButtonContainerClose;
          } catch {
            return styleButtons.appButtonContainer6;
          }
        },
        6: () => {
          try {
            return (item.status !== 'Решен' &&
              item.status !== 'Исследование') ||
              item.status === 'Data Undefined'
              ? styleButtons.appButtonContainer6
              : styleButtons.appButtonContainerClose;
          } catch {
            return styleButtons.appButtonContainer6;
          }
        },
        'Data Undefined': () => styleButtons.appButtonUndefined,
      };
      let categories = item.cat;
      const buttonStyle = colorsStatus[categories]();
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', func(item))}
          style={({width: '100%'}, buttonStyle)}>
          <Text style={styleButtons.appButtonText}>{`Номер: ${
            item.number
          } Категория ${
            item.cat === 'Data Undefined' ? '...' : item.cat
          }`}</Text>
          <Text style={{alignSelf: 'center'}}>
            {item.text.match(/г. Пермь\S+\W+\d+/)}
          </Text>
        </TouchableOpacity>
      );
    };
    const {data} = inState;
    return (
      <View
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'powderblue',
          paddingHorizontal: 3,
        }}>
        <UpdateDataButton />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={Footer}
        />
      </View>
    );
  };

  const HomeStack2 = createStackNavigator();
  const HomeStack = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 14, marginTop: 20},
          tabStyle: {width: 130},
          style: {backgroundColor: 'powderblue'},
        }}>
        <HomeStack2.Screen name="incidents" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default Test;

const UpdateDataButton = () => {
  const [inSetState] = useContext(Context);
  const updateState = () => {
    let filter = {
      address: 'Remedy_tb',
      maxCount: 40,
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      fail => {
        console.log('Failed with this error: ' + fail);
      },
      (count, smsList) => {
        let arr = JSON.parse(smsList);
        let texts = arr.map(function (object) {
          const id = object._id;
          const body = object.body;
          const date = object.date;
          return {body, date, id};
        });
        let dataResult = [];
        texts.forEach(targetText => {
          //TARGET MSK
          const resultMsk = () => {
            try {
              const msk = targetText.body.match(/MSK0000\S+/g)[0];
              return msk.replace(/\.$/, '');
            } catch (err) {
              return 'Data Undefined';
            }
          };
          const number = resultMsk();

          //TARGET KAT
          const resultKat = () => {
            try {
              let katTarget = targetText.body.match(/Кат.\S+/g)[0];
              let kat = katTarget[katTarget.length - 1];
              return kat;
            } catch (err) {
              return 'Data Undefined';
            }
          };
          const cat = resultKat();

          //STATUS
          const resultStatus = () => {
            try {
              let statusTarget = targetText.body.match(/Статус \S+/g)[0];
              let status = statusTarget.replace(/"/g, '').slice(7);
              return status;
            } catch (err) {
              return 'Data Undefined';
            }
          };
          const status = resultStatus();
          let text = targetText.body;
          let date = targetText.date;
          let id = targetText.id;
          dataResult.push({text, number, cat, status, date, id});
        });
        let data = agregatedSms(dataResult);
        inSetState({data});
      },
    );
  };
  return (
    <TouchableOpacity
      style={{marginVertical: 10}}
      onPress={() => {
        updateState();
      }}>
      <View
        style={{
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          height: 40,
          elevation: 5,
        }}>
        <Text style={{color: 'white'}}>Обновить СМС</Text>
      </View>
    </TouchableOpacity>
  );
};
