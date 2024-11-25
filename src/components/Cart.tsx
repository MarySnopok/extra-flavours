import { Skeleton } from 'antd';
import { useCartStore } from '../state/useCartStore';

import { CartItemShowroom } from './CartItem';
import { useEffect, useState } from 'react';
import { ProductModificationModal } from './ProductModificationModal';

export const Cart = () => {
  const items = useCartStore((state) => state.items);

  const [changeModificationsFor, setChangeModificationsFor] = useState<
    string | null
  >(null);
  const [changeAddonsFor, setChangeAddonsFor] = useState<string | null>(null);

  return (
    <div>
      <h1>Cart: {items.length} items</h1>

      <div>
        {items.map((item) => (
          <CartItemShowroom
            onChangeAddons={setChangeAddonsFor}
            onChangeModifications={setChangeModificationsFor}
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {changeModificationsFor && (
        <ProductModificationModal
          item={items.find((item) => item.id === changeModificationsFor)}
        />
      )}

      <div>Total price: TODO $</div>
    </div>
  );
};
