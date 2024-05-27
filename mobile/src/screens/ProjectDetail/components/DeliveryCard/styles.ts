import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
    flexShrink: 1,
  },
  projectName: {
    fontSize: 16,
    fontWeight: 500,
    color: '#FFF',
    flexShrink: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  textContainer: {},
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
