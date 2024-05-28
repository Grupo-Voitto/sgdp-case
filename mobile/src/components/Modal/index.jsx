import React from 'react';
import {
  Pressable,
  Modal as RNModal,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from '../Text';
import {styles} from './styles';
import Button from '../Button';

export default function Modal({
  visible = false,
  title = 'Titulo',
  buttonText = 'Botão',
  children,
  onClose = () => {},
  onSubmit = () => {},
}) {
  return (
    <RNModal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <Pressable style={styles.backContainer} onPress={onClose}>
        <Pressable style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.closeButton}
            onPress={onClose}
            hitSlop={16}>
            <Ionicons name="close" size={24} color="#282828" />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.contentContainer}>
            {children}
            <Button mainColor="#282828" minorColor="#FFF" onPress={onSubmit}>
              {buttonText}
            </Button>
          </View>
        </Pressable>
      </Pressable>
    </RNModal>
  );
}
