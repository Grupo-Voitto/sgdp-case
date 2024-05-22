import type {DrawerScreenProps} from '@react-navigation/drawer';

export type MainDrawerParamList = {
  Home: undefined;
  Projects: undefined;
};

export type MainDrawerScreenProps<T extends keyof MainDrawerParamList> =
  DrawerScreenProps<MainDrawerParamList, T>;
