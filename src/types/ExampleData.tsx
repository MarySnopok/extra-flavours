import {Product} from "./Product";
import {AddonGroup} from "./AddonGroup";

// Example Data
export const exampleProduct: Product = {
    id: "a_very_unique_soda_id",
    name: "Soda",
    price: 75,
    modifications: {
        sizes: [
            {name: "Normal", addonPrice: 0},
            {name: "Extra large", addonPrice: 15}
        ],
        flavours: [
            {name: "Coca Cola", addonPrice: 0},
            {name: "Fanta", addonPrice: 0},
            {name: "Sprite", addonPrice: 0}
        ]
    }
};
export const exampleAddonGroup: AddonGroup = {
    name: "Extra toppings",
    limit: 2,
    sortOrder: 1,
    refProductIds: ["a_very_unique_soda_id"],
    addons: [
        {
            addon: {name: "Whipped cream", price: 15},
            limit: 1,
            sortOrder: 2
        },
        {
            addon: {name: "Vanilla ice cream", price: 5},
            limit: 1,
            sortOrder: 0
        },
        {
            addon: {name: "Marshmallow", price: 10},
            limit: 1,
            sortOrder: 1
        }
    ]
};
