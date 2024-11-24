/* eslint-disable prettier/prettier */
import React from 'react';
import { Typography } from 'antd';
import { useProductStore } from '../state/useProductStore';

const { Text } = Typography;

export const PriceDisplay: React.FC = () => {
  const totalPrice = useProductStore((state) => state.totalPrice);

  return (
    <div style={{ marginTop: 16 }}>
      <Text strong>Total Price: {totalPrice} $</Text>
    </div>
  );
};

