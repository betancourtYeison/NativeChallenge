import React from 'react';
import { View, Text, Image } from 'react-native';

import { Bank } from '../../models';
import style from './Item.Style';

export const Item = ({ age, bankName, description, url }: Bank) => (
  <View style={style.item}>
    <View style={style.itemLeft}>
      <Text style={style.title}>{`${age} - ${bankName}`}</Text>
      <Text style={style.subtitle}>{description}</Text>
    </View>
    <View style={style.itemRight}>
      <Image testID="logo" style={style.logo} source={{ uri: url }} />
    </View>
  </View>
);
