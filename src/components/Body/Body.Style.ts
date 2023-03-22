import { StyleSheet } from 'react-native';

import { theme } from '../../assets/colors/theme';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.lighter,
    width: '100%',
    height: '100%',
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
