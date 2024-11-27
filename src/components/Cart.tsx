import { Badge, Space, Typography } from 'antd';
import { useCartStore } from '../state/useCartStore';

import { CartItemShowroom } from './CartItem';
import { useState } from 'react';
import { ProductModificationModal } from './ProductModificationModal';
import { CartTotal } from './CartTotal';

export const Cart = () => {
  const items = useCartStore((state) => state.items);

  const [changeModificationsFor, setChangeModificationsFor] = useState<
    string | null
  >(null);
  //TODO: complete addons
  const [changeAddonsFor, setChangeAddonsFor] = useState<string | null>(null);
  const modifyingItem = items.find(
    (item) => item.id === changeModificationsFor,
  );
  //TODO: find a better way for a line 25 :) this is hillarious
  return (
    <div>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        <Badge count={items.length} color="green">
          <span style={{ alignSelf: 'flex-start ' }}>
            Customer cart&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </Badge>
      </Typography.Title>

      <Space
        direction="vertical"
        align="center"
        size={16}
        style={{ justifyContent: 'center', width: '100%' }}
      >
        {items.map((item) => (
          <CartItemShowroom
            onChangeAddons={setChangeAddonsFor}
            onChangeModifications={setChangeModificationsFor}
            key={item.id}
            item={item}
          />
        ))}
      </Space>
      {modifyingItem && (
        <ProductModificationModal
          item={modifyingItem}
          onClose={() => setChangeModificationsFor(null)}
        />
      )}
      <CartTotal />
    </div>
  );
};
