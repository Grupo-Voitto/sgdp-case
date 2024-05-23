import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: '#FFF',
    marginBottom: 16,
  },
  rowsContainer: {},
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  cell: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
  },
  list: {},
  headerText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#87888C',
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    color: '#FFF',
  },
});
