import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  rightContainer: {},
  iconContainer: {
    backgroundColor: '#FF0000',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    color: '#FFF',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 500,
    color: '#FFF',
  },
});
