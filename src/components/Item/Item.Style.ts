/** Import Styles **/
import { StyleSheet } from 'react-native';

import { theme } from '../../assets/colors/theme';

/** Create an object style **/
const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: theme.white,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    height: 100,
  },
  itemLeft: {
    flexDirection: 'column',
    flex: 3,
  },
  itemRight: {
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 5,
  },
});

/** Export component style **/
export default style;
