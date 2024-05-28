import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  editDescriptionButtonText: {
    fontSize: 14,
    fontWeight: 500,
    textDecorationLine: 'underline',
    color: '#FFF',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFF',
    lineHeight: 24,
    marginBottom: 16,
  },
  membersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  memberChip: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    paddingRight: 4,
    paddingVertical: 4,
    alignItems: 'center',
    borderRadius: 100,
    gap: 4,
  },
  memberName: {
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
  },
  memberIcon: {},
  addMemberButton: {
    borderWidth: 1.5,
    borderColor: '#FFF',
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  addMemberButtonText: {
    fontSize: 14,
    fontWeight: 500,
    color: '#FFF',
  },
});

export const taskStyles = StyleSheet.create({
  container: {},
  topContainer: {
    gap: 16,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
  },
  titleChip: {
    height: 32,
    paddingHorizontal: 16,
    backgroundColor: '#333333',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleChipRounded: {
    height: 32,
    width: 32,
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleChipText: {
    fontSize: 14,
    fontWeight: 500,
    color: '#FFF',
  },
  tasksContainer: {
    gap: 16,
  },
  taskContainer: {
    backgroundColor: '#282828',
    flexDirection: 'row',
    padding: 16,
    gap: 8,
    justifyContent: 'space-between',
  },
  taskLeftContainer: {
    flexDirection: 'row',
    gap: 8,
    flexShrink: 1,
  },
  taskText: {
    fontSize: 14,
    fontWeight: 500,
    color: '#FFF',
    flexShrink: 1,
  },
  taskCompletedText: {
    textDecorationLine: 'line-through',
  },
  taskUnchecked: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskChecked: {
    height: 20,
    width: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIconContainer: {},
});
