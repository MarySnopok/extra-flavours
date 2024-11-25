import { create } from 'zustand';

interface ModificationSelection {
  size?: string;
  flavor?: string;
}

interface AddonSelection {
  [addonName: string]: number; // Addon name as key and quantity as value
}

interface ProductState {
  selectedProductId: string | null;
  modifications: ModificationSelection;
  addons: AddonSelection;
  totalPrice: number;
  basePrice: number;
  selectProduct: (id: string, basePrice: number) => void;
  setModification: (
    key: keyof ModificationSelection,
    value: string,
    addonPrice: number,
  ) => void;
  updateAddon: (
    name: string,
    price: number,
    quantity: number,
    limit: number,
  ) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  selectedProductId: null,
  modifications: {},
  addons: {},
  totalPrice: 0,
  basePrice: 0,

  selectProduct: (id, basePrice) =>
    set({
      selectedProductId: id,
      modifications: {},
      addons: {},
      basePrice,
      totalPrice: basePrice,
    }),

  setModification: (key, value, addonPrice) =>
    set((state) => ({
      modifications: { ...state.modifications, [key]: value },
      totalPrice:
        state.basePrice +
        addonPrice +
        Object.entries(state.addons).reduce(
          (acc, [addon, qty]) => acc + qty,
          0,
        ),
    })),

  updateAddon: (name, price, quantity, limit) => {
    // validate inputs
    if (quantity === 0 || limit < 0 || price < 0) {
      console.error('Invalid addon update');
      return;
    }

    set((state) => {
      const currentQty = state.addons[name] || 0;
      const newQty = Math.max(0, Math.min(currentQty + quantity, limit));
      const deltaPrice = price * (newQty - currentQty);

      return {
        addons: { ...state.addons, [name]: newQty },
        totalPrice: state.totalPrice + deltaPrice,
      };
    });
  },
}));
