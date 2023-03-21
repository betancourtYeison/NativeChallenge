import React from 'react';
import { View, Image, Text } from 'react-native';

import style from './Header.Style';

export const Header = () => (
  <View style={style.container}>
    <Image style={style.logo} source={require('./../../assets/images/logo.png')} />
    <Text style={style.title}>Bank List</Text>
  </View>
);
