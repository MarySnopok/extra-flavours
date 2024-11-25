import React from 'react';
import { List, Button } from 'antd';
import { useProductStore } from '../state/useProductStore';

interface AddonSelectorProps {
  addons: {
    addon: { name: string; price: number };
    limit: number;
    sortOrder: number;
  }[];
}

export const AddonSelector: React.FC<AddonSelectorProps> = ({ addons }) => {
  const updateAddon = useProductStore((state) => state.updateAddon);
  const selectedAddons = useProductStore((state) => state.addons);

  return (
    <div>
      <h3>Select Addons:</h3>
      <List
        itemLayout="horizontal"
        dataSource={addons.sort((a, b) => a.sortOrder - b.sortOrder)}
        renderItem={(addon) => (
          <List.Item>
            <List.Item.Meta title={addon.addon.name} description={`+${addon.addon.price} $`} />
            <div>
              <Button
                onClick={() => updateAddon(addon.addon.name, addon.addon.price, -1, addon.limit)}
                disabled={(selectedAddons[addon.addon.name] || 0) <= 0}
              >
                -
              </Button>
              <span style={{ margin: '0 8px' }}>{selectedAddons[addon.addon.name] || 0}</span>
              <Button
                onClick={() => updateAddon(addon.addon.name, addon.addon.price, 1, addon.limit)}
                disabled={(selectedAddons[addon.addon.name] || 0) >= addon.limit}
              >
                +
              </Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

