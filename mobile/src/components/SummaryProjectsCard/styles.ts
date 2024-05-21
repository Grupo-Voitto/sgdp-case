import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    rowGap: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A0A0A0',
  },
  projectsContainer: {
    rowGap: 8,
  },
});

export const projectStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {},
  name: {
    fontSize: 12,
    fontWeight: '500',
    color: '#E8E8E8',
  },
  areaName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  leftContainer: {
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
  },
  progress: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFF',
  },
});
