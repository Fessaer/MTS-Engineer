import React from 'react';
import {NativeModules, PermissionsAndroid} from 'react-native';
var DirectSms = NativeModules.DirectSms;

const sendDirectSms = async (number, config, text = null) => {
  console.log('2868', `${number} ${config} ${text}`);
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
      {
        title: 'YourProject App Sms Permission',
        message:
          'YourProject App needs access to your inbox ' +
          'so you can send messages in background.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      if (text === null) {
        DirectSms.sendDirectSms('2868', `${number} ${config}`);
      } else {
        DirectSms.sendDirectSms('2868', `${number} ${config} ${text}`);
      }
    } else {
      console.log('SMS permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export default sendDirectSms;
