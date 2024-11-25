/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button } from 'antd';
import { ProductModificationModal } from '../components/ProductModificationModal';
import { AddonSelector } from '../components/AddonSelector';
import { PriceDisplay } from '../components/PriceDisplay';
import { useProductStore } from '../state/useProductStore';

export const Page: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const selectProduct = useProductStore((state) => state.selectProduct);

  const exampleProduct = {
    id: 'a_very_unique_soda_id',
    name: 'Soda',
    price: 75,
    modifications: {
      sizes: [
        { name: 'Normal', addonPrice: 0 },
        { name: 'Extra large', addonPrice: 15 },
      ],
      flavours: [
        { name: 'Coca Cola', addonPrice: 0 },
        { name: 'Sprite', addonPrice: 0 },
      ],
    },
    addons: [
      {
        addon: { name: 'Whipped cream', price: 15 },
        limit: 1,
        sortOrder: 2,
      },
      {
        addon: { name: 'Vanilla ice cream', price: 5 },
        limit: 2,
        sortOrder: 1,
      },
    ],
  };

  const handleSelectProduct = () => {
    selectProduct(exampleProduct.id, exampleProduct.price);
    setModalVisible(true);
  };

  return (
    <div style={{ padding: 16 }}>
      <Button type="primary" onClick={handleSelectProduct}>
        Select Product
      </Button>
      <ProductModificationModal
        open={isModalVisible}
        onClose={() => setModalVisible(false)}
        modifications={exampleProduct.modifications}
      />
      <AddonSelector addons={exampleProduct.addons} />
      <PriceDisplay />
    </div>
  );
};
