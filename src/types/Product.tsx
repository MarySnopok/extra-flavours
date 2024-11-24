import {Modifications} from "./Modifications";

// Represents a single product with modifications and associated addons
export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Product name (e.g., "Soda")
    price: number; // Base price of the product
    modifications: Modifications; // Available modifications (sizes and flavours)
}
