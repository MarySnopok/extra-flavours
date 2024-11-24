// Represents a single size or flavor modification option
export interface ModificationOption {
    name: string; // Name of the modification option (e.g., "Normal", "Extra large")
    addonPrice: number; // Additional price for the modification option
}

// Represents the modifications available for a product
export interface Modifications {
    sizes?: ModificationOption[]; // Array of size options (optional)
    flavours?: ModificationOption[]; // Array of flavor options (optional)
}
