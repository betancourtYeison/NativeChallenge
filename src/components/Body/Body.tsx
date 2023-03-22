import React, { useCallback, useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, FlatList } from 'react-native';

import { addBanks } from '../../redux/features/banksSlice';
import { getBanks } from '../../redux/api';
import { Item } from '../Item/Item';
import { RootState } from '../../redux/store';
import { theme } from '../../assets/colors/theme';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import style from './Body.Style';

export const Body = () => {
  const dispatch = useAppDispatch();
  const banksData = useAppSelector((state: RootState) => state.banks.data);

  const [isLoading, setIsLoading] = useState(false);
  const [errorApi, setErrorApi] = useState('');

  /* A function that is called when the component is mounted. */
  const getDataFromApi = useCallback(async () => {
    try {
      setIsLoading(true);
      const banks = await getBanks();
      dispatch(addBanks(banks));
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setErrorApi(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    if (banksData.length === 0) {
      getDataFromApi();
    }
  }, [banksData, getDataFromApi]);

  if (isLoading) {
    return <ActivityIndicator size="large" color={theme.primary} />;
  }

  return (
    <View style={style.container}>
      {errorApi ? (
        <Text style={style.title}>{errorApi}</Text>
      ) : (
        <FlatList
          data={banksData}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item, index) => `${index}-${item.bankName}`}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
