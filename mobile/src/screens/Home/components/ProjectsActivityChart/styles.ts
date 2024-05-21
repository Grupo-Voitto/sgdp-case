import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 16,
  },
  barsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  outerBar: {
    width: 20,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  innerBar: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  legendsContainer: {
    flexDirection: 'row',
  },
  legendContentContainer: {
    flexDirection: 'row',
    columnGap: 8,
  },
  legendContainer: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
  },
  legendDivider: {
    width: 1,
    backgroundColor: '#FFF',
  },
  legendDot: {
    height: 12,
    width: 12,
    borderRadius: 16,
  },
  legendLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: '#A0A0A0',
  },
});
