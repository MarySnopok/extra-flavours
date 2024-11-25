import { useMemo } from 'react';
import { exampleAddonGroup, exampleProduct } from '../types/ExampleData';

const productsStab = {
  products: [exampleProduct],
  addonGroups: [exampleAddonGroup],
};

export const useFetchProducts = () => {
  // can be a React-Query hook or a SWR hook
  // which loads real data from the server
  return productsStab;
};

export const useProduct = (productId: string) => {
  const { products } = useFetchProducts();
  return useMemo(
    () => products.find((product) => product.id === productId),
    [productId],
  );
};

export const useProductAddons = (productId: string) => {
  const { addonGroups } = useFetchProducts();
  return useMemo(
    () => addonGroups.find((group) => group.refProductIds.includes(productId)),
    [productId],
  );
};
