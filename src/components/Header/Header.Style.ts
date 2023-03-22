import { StyleSheet } from 'react-native';

import { theme } from '../../assets/colors/theme';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: theme.white,
    height: 200,
    width: '100%',
  },
  logo: {
    width: '100%',
    height: 150,
  },
  title: {
    textAlign: 'center',
    color: theme.black,
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default style;
