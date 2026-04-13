export type Slot = 'hat' | 'top' | 'bottom' | 'shoes';

export const SLOT_ORDER: Slot[] = ['bottom', 'top', 'shoes', 'hat'];

export type Item = {
  id: string;
  name: string;
  slot: Slot;
  color: string;
  // image: require('../assets/items/<file>.png'); // swap placeholders for real art later
};

export const ITEMS: Item[] = [
  { id: 'hat_red', name: 'Red Hat', slot: 'hat', color: '#e74c3c' },
  { id: 'hat_blue', name: 'Blue Cap', slot: 'hat', color: '#3498db' },
  { id: 'top_green', name: 'Green Shirt', slot: 'top', color: '#2ecc71' },
  { id: 'top_yellow', name: 'Yellow Tee', slot: 'top', color: '#f1c40f' },
  { id: 'bottom_blue', name: 'Blue Jeans', slot: 'bottom', color: '#2c3e50' },
  { id: 'bottom_pink', name: 'Pink Skirt', slot: 'bottom', color: '#e91e63' },
  { id: 'shoes_black', name: 'Black Boots', slot: 'shoes', color: '#1a1a1a' },
  { id: 'shoes_white', name: 'White Sneakers', slot: 'shoes', color: '#ecf0f1' },
];

export type Equipped = Record<Slot, string | null>;

export const EMPTY_EQUIPPED: Equipped = {
  hat: null,
  top: null,
  bottom: null,
  shoes: null,
};
