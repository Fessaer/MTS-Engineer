import SendSMS from 'react-native-sms';
// import SendSMS from 'react-native-sms-x';
import {ToastAndroid} from 'react-native';

const sendSMS = textInput => {
  console.log('sendSMS');
  // alert('clicked');
  SendSMS.send(
    {
      body: textInput,
      recipients: ['2868'],
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true,
    },
    (completed, cancelled, error) => {
      if (completed) {
        console.log('SMS Sent Completed');
      } else if (cancelled) {
        console.log('SMS Sent Cancelled');
      } else if (error) {
        console.log('Some error occured');
      }
    },
  );
};

export default sendSMS;
