import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 500,
    color: '#FFF',
    textAlign: 'center',
  },
  progressBar: {
    height: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    width: 80,
  },
  progressInnerBar: {
    backgroundColor: '#CCC',
    height: '100%',
    borderRadius: 20,
  },
});
