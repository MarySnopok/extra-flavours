import { create } from 'zustand';

export interface SelectedAddon {
  id: string;
  quantity: number;
}

export interface CartItem {
  id: string;
  selectedModifications: Record<string, string>;
  selectedAddons: SelectedAddon[];
}

export interface CartState {
  items: CartItem[];
  updateModificationForItem: (
    itemId: string,
    key: string,
    value: string,
  ) => void;
}

const initialItems: CartItem[] = [
  {
    id: 'a_very_unique_soda_id',
    selectedModifications: {
      sizes: 'size-normal', // default values
      flavours: 'flavour-coca-cola',
    },
    selectedAddons: [],
  },
  {
    id: 'a_very_unique_burger_id',
    selectedModifications: {
      sizes: 'size-tiny', // default values
      topings: 'pickles',
    },
    selectedAddons: [],
  },
];

export const useCartStore = create<CartState>((set) => ({
  items: initialItems,

  updateModificationForItem: (itemId, key, value) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              selectedModifications: {
                ...item.selectedModifications,
                [key]: value,
              },
            }
          : item,
      ),
    })),

  //   selectProduct: (id, basePrice) =>
  //     set({
  //       selectedProductId: id,
  //       modifications: {},
  //       addons: {},
  //       basePrice,
  //       totalPrice: basePrice,
  //     }),
}));
