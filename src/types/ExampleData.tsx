import { Product } from './Product';
import { AddonGroup } from './AddonGroup';

// Example Data
export const exampleProduct: Product = {
  id: 'a_very_unique_soda_id',
  name: 'Soda',
  price: 75,
  modifications: {
    sizes: [
      { id: 'size-normal', name: 'Normal', addonPrice: 0 },
      { id: 'size-extra-large', name: 'Extra large', addonPrice: 15 },
    ],
    flavours: [
      { id: 'flavour-coca-cola', name: 'Coca Cola', addonPrice: 0 },
      { id: 'flavour-fanta', name: 'Fanta', addonPrice: 0 },
      { id: 'flavour-sprite', name: 'Sprite', addonPrice: 0 },
    ],
  },
};
export const exampleAddonGroup: AddonGroup = {
  name: 'Extra toppings',
  limit: 2,
  sortOrder: 1,
  refProductIds: ['a_very_unique_soda_id'],
  addons: [
    {
      id: 'addon-whipped-cream',
      addon: { name: 'Whipped cream', price: 15 },
      limit: 1,
      sortOrder: 2,
    },
    {
      id: 'addon-vanilla-ice-cream',
      addon: { name: 'Vanilla ice cream', price: 5 },
      limit: 1,
      sortOrder: 0,
    },
    {
      id: 'addon-marshmallow',
      addon: { name: 'Marshmallow', price: 10 },
      limit: 1,
      sortOrder: 1,
    },
  ],
};
