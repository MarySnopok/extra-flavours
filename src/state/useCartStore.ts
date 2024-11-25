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
}

export const useCartStore = create<CartState>((set) => ({
  items: [
    {
      id: 'a_very_unique_soda_id',
      selectedModifications: {
        sizes: 'size-normal', // default values
        flavours: 'flavour-coca-cola',
      },
      selectedAddons: [],
    },
  ],

  //   selectProduct: (id, basePrice) =>
  //     set({
  //       selectedProductId: id,
  //       modifications: {},
  //       addons: {},
  //       basePrice,
  //       totalPrice: basePrice,
  //     }),
}));
