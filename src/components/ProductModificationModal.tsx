import { Modal, Select, message } from 'antd';
import { useProductStore } from '../state/useProductStore';
import { CartItem } from '../state/useCartStore';
import { useProduct } from '../state/useProducts';

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

  const keys = Object.entries(product.modifications);

  return keys;
};

export const ProductModificationModal = ({
  item,
  onClose,
}: ModificationModalProps) => {
  const product = useProduct(item.id);

  const availableModifications = useAvailableModifications(item);

  const setModification = useProductStore((state) => state.setModification);
  // const selectedModifications = useProductStore((state) => state.modifications);

  // const handleChange = (key: 'size' | 'flavor', addonId: string) => {
  //   const addon = modifications[key === 'size' ? 'sizes' : 'flavours']?.find(
  //     (addon) => addon.name === addonId,
  //   );
  //   if (!addon || addon.addonPrice < 0) {
  //     console.error('Invalid modification selected', key, addonId, addon);
  //     message.warning(
  //       'Unfortunately we cant set this selection. Please try different modification.',
  //     );
  //     return;
  //   }
  //   setModification(key, addon.name, addon.addonPrice);
  // };

  const handleChange = (key: string, value: string) => {
    console.log('handleChange', key, value);
  };

  return (
    <Modal
      title={`Select Modifications for ${product?.name}`}
      open
      onCancel={onClose}
      footer={null}
    >
      {availableModifications &&
        availableModifications.map(([key, options]) => (
          <Select<string>
            key={key}
            style={{ width: '100%' }}
            onChange={(value) => handleChange(key, value)}
            value={item.selectedModifications[key]}
          >
            {options.map((option) => (
              <Option key={option.name} value={option.name}>
                {option.name} (+{option.addonPrice} $)
              </Option>
            ))}
          </Select>
        ))}
    </Modal>
  );
};
