import React from 'react';
import {View} from 'react-native';
import Store from './Components/Store';
import Core from './Core';
// import image from './Components/Images/mts.png';

const App = () => {
  return (
    <Store>
      <Core />
    </Store>
  );
};

export default App;
