import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 28,
  },
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
  },
  contentContainer: {
    gap: 32,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#282828',
    marginBottom: 16,
  },
});
