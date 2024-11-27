import { Button, Tag, Card, Space } from 'antd';
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

  if (!product) {
    throw new Error('Invalid product id');
  }

  return (
    <Card
      title={product.name}
      style={{ width: 300, justifyContent: 'center' }}
      bordered={true}
    >
      <Space direction="vertical" align="start" style={{ width: '100%' }}>
        <div style={{ marginBottom: 4 }}>
          <Tag color="green">price: {product.price}$</Tag>
        </div>
        <Button onClick={() => onChangeModifications(item.id)}>
          Change modifications
        </Button>
        <Button onClick={() => onChangeAddons(item.id)}>Change addons</Button>
      </Space>
    </Card>
  );
};
