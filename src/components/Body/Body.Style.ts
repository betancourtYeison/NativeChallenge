import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../assets/colors/theme';

const { height: windowHeight } = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.lighter,
    width: '100%',
    height: windowHeight - 250,
  },
  item: {
    backgroundColor: theme.white,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 32,
    textAlign: 'center',
    width: '100%',
    color: theme.error,
  },
});

export default style;
