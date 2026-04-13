import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Equipped, ITEMS, Slot } from '../data/items';

type Props = { equipped: Equipped };

const SLOT_LAYOUT: Record<Slot, { top: string; height: string }> = {
  hat: { top: '2%', height: '15%' },
  top: { top: '25%', height: '25%' },
  bottom: { top: '52%', height: '30%' },
  shoes: { top: '84%', height: '12%' },
};

export default function Character({ equipped }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.body}>
        <Text style={styles.bodyLabel}>Character</Text>
        {(Object.keys(SLOT_LAYOUT) as Slot[]).map((slot) => {
          const id = equipped[slot];
          if (!id) return null;
          const item = ITEMS.find((i) => i.id === id);
          if (!item) return null;
          const pos = SLOT_LAYOUT[slot];
          return (
            <View
              key={slot}
              style={[
                styles.layer,
                { top: pos.top as any, height: pos.height as any, backgroundColor: item.color },
              ]}
            >
              <Text style={styles.layerLabel}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  body: {
    width: 220,
    height: '90%',
    backgroundColor: '#f5d6a0',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#7a5a2e',
    position: 'relative',
    overflow: 'hidden',
  },
  bodyLabel: {
    position: 'absolute',
    top: 8,
    alignSelf: 'center',
    color: '#7a5a2e',
    fontWeight: '600',
  },
  layer: {
    position: 'absolute',
    left: '5%',
    right: '5%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  layerLabel: { color: '#fff', fontWeight: '700' },
});
