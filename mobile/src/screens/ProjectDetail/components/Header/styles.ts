import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressContainer: {},
  progressText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#FFF',
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  progressInnerBar: {
    backgroundColor: '#CCC',
    height: '100%',
    borderRadius: 8,
  },
});
