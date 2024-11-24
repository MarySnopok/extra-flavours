import {create} from "zustand";

export interface ModificationSelection {
    size?: string;
    flavor?: string;
}

interface AddonSelection {
    [addonName: string]: number;
}

interface ProductState {
    selectedProductId: string | null;
    modifications: ModificationSelection;
    addons: AddonSelection;
    totalPrice: number;
    selectProduct: (id: string, basePrice: number) => void;
    setModification: (key: keyof ModificationSelection, value: string, addonPrice: number) => void;
    updateAddon: (name: string, price: number, quantity: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
    selectedProductId: null,
    modifications: {},
    addons: {},
    totalPrice: 0,
    selectProduct: (id, basePrice) =>
        set({selectedProductId: id, modifications: {}, addons: {}, totalPrice: basePrice}),
    setModification: (key, value, addonPrice) =>
        set((state) => ({
            modifications: {...state.modifications, [key]: value},
            totalPrice: state.totalPrice + addonPrice
        })),
    updateAddon: (name, price, quantity) =>
        set((state) => {
            const currentQty = state.addons[name] || 0;
            const newQty = Math.max(currentQty + quantity, 0);
            const deltaPrice = price * (newQty - currentQty);

            return {
                addons: {...state.addons, [name]: newQty},
                totalPrice: state.totalPrice + deltaPrice
            };
        })
}));
