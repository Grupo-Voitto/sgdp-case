import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    rowGap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  expandableCell: {
    flexGrow: 1,
    flexShrink: 1,
  },
  progressCell: {
    width: 36,
    textAlign: 'center',
  },
  orderCell: {
    width: 24,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#87888C',
  },
  orderText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
  },
  nameText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFF',
  },
  progressContainer: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 4,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
    textAlign: 'center',
  },
});
