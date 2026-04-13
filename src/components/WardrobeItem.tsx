import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Item } from '../data/items';

type Props = {
  item: Item;
  equipped: boolean;
  onPress: () => void;
};

export default function WardrobeItem({ item, equipped, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.tile,
        equipped && styles.equipped,
        pressed && styles.pressed,
      ]}
    >
      <View style={[styles.swatch, { backgroundColor: item.color }]} />
      <Text style={styles.name} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.slot}>{item.slot}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 120,
    padding: 10,
    margin: 6,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  equipped: { borderColor: '#27ae60', backgroundColor: '#eafaf1' },
  pressed: { opacity: 0.7 },
  swatch: { width: 80, height: 40, borderRadius: 6, marginBottom: 6 },
  name: { fontSize: 14, fontWeight: '600' },
  slot: { fontSize: 11, color: '#888', textTransform: 'uppercase' },
});
