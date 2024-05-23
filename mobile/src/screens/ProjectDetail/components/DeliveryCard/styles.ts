import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  projectName: {
    fontSize: 16,
    fontWeight: 500,
    color: '#FFF',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
  },
  text: {
    fontSize: 12,
    fontWeight: 500,
    flexShrink: 1,
    color: '#FFF',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 500,
    color: '#FFF',
  },
});
