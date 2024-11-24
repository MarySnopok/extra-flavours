/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, Select, message } from 'antd';
import { useProductStore } from '../state/useProductStore';

const { Option } = Select;

interface ModificationModalProps {
  visible: boolean;
  onClose: () => void;
  modifications: {
    sizes?: { name: string; addonPrice: number }[];
    flavours?: { name: string; addonPrice: number }[];
  };
}

export const ProductModificationModal: React.FC<ModificationModalProps> | null = ({ visible, onClose, modifications }) => {
  const setModification = useProductStore((state) => state.setModification);

  if (!modifications || (!modifications.sizes && !modifications.flavours)) {
    console.error("Invalid modification selected", modifications);
    return null;
  }

  const handleChange = (key: 'size' | 'flavor', value: string, addonPrice: number) => {
    if (!value || addonPrice < 0) {
        console.error("Invalid modification selected", key, value, addonPrice);
        message.warning("Unfortunately we cant set this selection. Please try different modification.");
        return;
    }
    setModification(key, value, addonPrice);
  };

  return (
    <Modal title="Select Modifications" visible={visible} onCancel={onClose} footer={null}>
      {modifications.sizes && (
        <div>
          <p>Select Size:</p>
          <Select style={{ width: '100%' }} onChange={(value) => handleChange('size', value.key, value.addonPrice)}>
            {modifications.sizes.map((size) => (
              <Option key={size.name} value={{ key: size.name, addonPrice: size.addonPrice }}>
                {size.name} (+{size.addonPrice} $)
              </Option>
            ))}
          </Select>
        </div>
      )}
      {modifications.flavours && (
        <div style={{ marginTop: 16 }}>
          <p>Select Flavor:</p>
          <Select style={{ width: '100%' }} onChange={(value) => handleChange('flavor', value.key, value.addonPrice)}>
            {modifications.flavours.map((flavor) => (
              <Option key={flavor.name} value={{ key: flavor.name, addonPrice: flavor.addonPrice }}>
                {flavor.name}
              </Option>
            ))}
          </Select>
        </div>
      )}
    </Modal>
  );
};
