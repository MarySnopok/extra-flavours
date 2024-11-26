import { Button } from 'antd';
import { CartItem } from '../state/useCartStore';
import { useProduct } from '../state/useProducts';

interface CartItemShowroomProps {
  item: CartItem;
  onChangeModifications: (item: string) => void;
  onChangeAddons: (productId: string) => void;
}

export const CartItemShowroom = ({
  item,
  onChangeAddons,
  onChangeModifications,
}: CartItemShowroomProps) => {
  // get data for actual product
  const product = useProduct(item.id);

  return (
    <div>
      CartItem
      <div>
        name: {product?.name} price: {product?.price}
      </div>
      <Button onClick={() => onChangeModifications(item.id)}>
        Change modifications
      </Button>
      <Button onClick={() => onChangeAddons(item.id)}>Change addons</Button>
    </div>
  );
};
