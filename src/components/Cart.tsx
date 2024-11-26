import { Skeleton } from 'antd';
import { useCartStore } from '../state/useCartStore';

import { CartItemShowroom } from './CartItem';
import { useEffect, useState } from 'react';
import { ProductModificationModal } from './ProductModificationModal';
import { CartTotal } from './CartTotal';

export const Cart = () => {
  const items = useCartStore((state) => state.items);

  const [changeModificationsFor, setChangeModificationsFor] = useState<
    string | null
  >(null);
  const [changeAddonsFor, setChangeAddonsFor] = useState<string | null>(null);
  const modifyingItem = items.find(
    (item) => item.id === changeModificationsFor,
  );
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
