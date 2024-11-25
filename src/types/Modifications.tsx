// Represents a single size or flavor modification option
export interface ModificationOption {
  id: string;
  name: string;
  addonPrice: number;
}

// Represents the modifications available for a product
export type Modifications = Record<string, ModificationOption[]>;
