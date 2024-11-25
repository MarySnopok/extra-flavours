import { Modal, Select, message } from 'antd';
import { useProductStore } from '../state/useProductStore';

const { Option } = Select;

interface ModificationModalProps {
  open: boolean;
  onClose: () => void;
  modifications: {
    sizes?: { name: string; addonPrice: number }[];
    flavours?: { name: string; addonPrice: number }[];
  };
}

export const ProductModificationModal = ({
  open,
  onClose,
  modifications,
}: ModificationModalProps) => {
  const setModification = useProductStore((state) => state.setModification);
  const selectedModifications = useProductStore((state) => state.modifications);

  if (!modifications || (!modifications.sizes && !modifications.flavours)) {
    console.error('Invalid modification selected', modifications);
    return null;
  }

  const handleChange = (key: 'size' | 'flavor', addonId: string) => {
    const addon = modifications[key === 'size' ? 'sizes' : 'flavours']?.find(
      (addon) => addon.name === addonId,
    );
    if (!addon || addon.addonPrice < 0) {
      console.error('Invalid modification selected', key, addonId, addon);
      message.warning(
        'Unfortunately we cant set this selection. Please try different modification.',
      );
      return;
    }
    setModification(key, addon.name, addon.addonPrice);
  };

  return (
    <Modal
      title="Select Modifications"
      open={open}
      onCancel={onClose}
      footer={null}
    >
      {modifications.sizes && (
        <div>
          <p>Select Size:</p>
          <Select<string>
            style={{ width: '100%' }}
            onChange={(value) => handleChange('size', value)}
            value={selectedModifications.size}
          >
            {modifications.sizes.map((size) => (
              <Option key={size.name} value={size.name}>
                {size.name} (+{size.addonPrice} $)
              </Option>
            ))}
          </Select>
        </div>
      )}
      {modifications.flavours && (
        <div style={{ marginTop: 16 }}>
          <p>Select Flavor:</p>
          <Select<string>
            style={{ width: '100%' }}
            onChange={(value) => handleChange('flavor', value)}
            value={selectedModifications.flavor}
          >
            {modifications.flavours.map((flavor) => (
              <Option key={flavor.name} value={flavor.name}>
                {flavor.name}
              </Option>
            ))}
          </Select>
        </div>
      )}
    </Modal>
  );
};
