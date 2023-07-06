import { Pressable } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { ACCENT_COLOR } from '../../constants/colors';

interface Props {
  onPress: () => void;
  title: string;
}

const Button: React.FC<Props> = ({ title, onPress }) => (
  <Pressable
    style={({ pressed }: { pressed: boolean }) => [
      styles.button,
      { backgroundColor: pressed ? ACCENT_COLOR : 'black' },
    ]}
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

export default React.memo(Button);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    maxWidth: 180,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    lineHeight: 21,
  },
});
