import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Character from '../components/Character';
import WardrobeItem from '../components/WardrobeItem';
import { EMPTY_EQUIPPED, Equipped, ITEMS } from '../data/items';

export default function DressingScreen() {
  const [equipped, setEquipped] = useState<Equipped>(EMPTY_EQUIPPED);

  const toggle = (itemId: string) => {
    const item = ITEMS.find((i) => i.id === itemId);
    if (!item) return;
    setEquipped((prev) => ({
      ...prev,
      [item.slot]: prev[item.slot] === itemId ? null : itemId,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.characterPane}>
        <Character equipped={equipped} />
      </View>
      <View style={styles.wardrobePane}>
        <ScrollView contentContainerStyle={styles.wardrobeGrid}>
          {ITEMS.map((item) => (
            <WardrobeItem
              key={item.id}
              item={item}
              equipped={equipped[item.slot] === item.id}
              onPress={() => toggle(item.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', backgroundColor: '#fafafa' },
  characterPane: { flex: 3, padding: 16 },
  wardrobePane: {
    flex: 2,
    backgroundColor: '#f0f0f0',
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },
  wardrobeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 8,
  },
});
