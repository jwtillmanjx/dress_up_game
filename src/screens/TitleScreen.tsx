import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Title'>;

export default function TitleScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dress Up!</Text>
      <Pressable
        onPress={() => navigation.navigate('Dressing')}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Play</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeef6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 72,
    fontWeight: '800',
    color: '#d6336c',
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#d6336c',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 50,
  },
  pressed: { opacity: 0.8 },
  buttonText: { color: '#fff', fontSize: 32, fontWeight: '700' },
});
