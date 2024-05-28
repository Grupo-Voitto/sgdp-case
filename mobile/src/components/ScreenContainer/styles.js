import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#171821',
  },
  container: {
    flex: 1,
  },
  logo: {
    width: 140,
    resizeMode: 'contain',
    aspectRatio: 6.4,
  },
  logoContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
