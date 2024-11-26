import { Modal, Select, message } from 'antd';
import { useProductStore } from '../state/useProductStore';
import { CartItem, useCartStore } from '../state/useCartStore';
import { useProduct } from '../state/useProducts';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { getPrice } from '../utils/getPrice';

const { Option } = Select;

interface ModificationModalProps {
  item: CartItem;
  onClose: () => void;
}

const useAvailableModifications = (item: CartItem) => {
  const product = useProduct(item.id);

  if (!product) {
    console.error('Invalid product id', item.id);
    return null;
  }

  const entries = Object.entries(product.modifications);

  return entries;
};

export const ProductModificationModal = ({
  item,
  onClose,
}: ModificationModalProps) => {
  const product = useProduct(item.id);
  const updateItem = useCartStore((state) => state.updateModificationForItem);

  const availableModifications = useAvailableModifications(item);

  const handleChange = (key: string, value: string) => {
    updateItem(item.id, key, value);
    console.log('updateItem', item.id, key, value);
  };

  return (
    <Modal
      title={`Select Modifications for ${product?.name}`}
      open
      onCancel={onClose}
      footer={null}
    >
      <Form>
        {availableModifications &&
          availableModifications.map(([key, options]) => (
            <Form.Item
              label={key}
              key={key}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <Select<string>
                style={{ width: '100%' }}
                onChange={(value) => handleChange(key, value)}
                value={item.selectedModifications[key]}
              >
                {options.map((option) => (
                  <Option key={option.name} value={option.id}>
                    {option.name} ({getPrice(option.addonPrice)})
                  </Option>
                ))}
              </Select>
            </Form.Item>
          ))}
      </Form>
    </Modal>
  );
};
