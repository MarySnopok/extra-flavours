import { Tag, Typography } from 'antd';
import { useCartStore } from '../state/useCartStore';
import { useFetchProducts } from '../state/useProducts';
export const CartTotal = () => {
  const { items } = useCartStore();
  const { products } = useFetchProducts();
  const total = items.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);
    if (!product) {
      throw new Error(`Product with id ${item.id} not found`);
    }
    const modificationPrice = Object.entries(item.selectedModifications).reduce(
      (acc, [modKey, modId]) => {
        const mod = product.modifications[modKey].find(
          (mod) => mod.id === modId,
        );
        if (!mod) {
          throw new Error(`Modification with id ${modId} not found`);
        }
        return acc + mod.addonPrice;
      },
      0,
    );
    return acc + product.price + modificationPrice;
  }, 0);

  return (
    <div
      className="cart-total"
      style={{ padding: 20, textAlign: 'right', width: 300, margin: '0 auto' }}
    >
      <Tag color="gold">Total: {total}$</Tag>
    </div>
  );
};
