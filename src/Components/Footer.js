/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default function Footer() {
  return (
    <SafeAreaView>
      <View style={{marginBottom: 5}}>
        <Text style={{alignSelf: 'center', fontSize: 10}}>
          developer Verzakov D.A. nwtimon@yandex.ru
        </Text>
      </View>
    </SafeAreaView>
  );
}
