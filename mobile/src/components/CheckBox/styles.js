import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  checkbox: {
    height: 18,
    width: 18,
    borderWidth: 1.5,
    borderColor: '#FFF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#FFF',
    borderWidth: 0,
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
  },
});
