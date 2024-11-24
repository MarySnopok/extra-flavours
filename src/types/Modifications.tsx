// Represents a single size or flavor modification option
export interface ModificationOption {
    name: string;
    addonPrice: number;
}

// Represents the modifications available for a product
export interface Modifications {
    sizes?: ModificationOption[];
    flavours?: ModificationOption[];
}
