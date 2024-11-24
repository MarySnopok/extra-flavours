import React from "react";
import {Modal, Select} from "antd";
import {useProductStore} from "../state/useProductStore";

const {Option} = Select;

interface ModificationModalProps {
    visible: boolean;
    onClose: () => void;
    modifications: {
        sizes?: {name: string; addonPrice: number}[];
        flavours?: {name: string; addonPrice: number}[];
    };
}

export const ProductModificationModal: React.FC<ModificationModalProps> = ({
    visible,
    onClose,
    modifications
}) => {
    const setModification = useProductStore((state) => state.setModification);

    const handleSizeChange = (value: string, addonPrice: number) => {
        setModification("size", value, addonPrice);
    };

    const handleFlavorChange = (value: string, addonPrice: number) => {
        setModification("flavor", value, addonPrice);
    };

    return (
        <Modal title="Select Modifications" visible={visible} onCancel={onClose} footer={null}>
            {modifications.sizes && (
                <div>
                    <p>Select Size:</p>
                    <Select
                        style={{width: "100%"}}
                        onChange={(value) => handleSizeChange(value.key, value.addonPrice)}
                    >
                        {modifications.sizes.map((size) => (
                            <Option
                                key={size.name}
                                value={{key: size.name, addonPrice: size.addonPrice}}
                            >
                                {size.name} (+{size.addonPrice} $)
                            </Option>
                        ))}
                    </Select>
                </div>
            )}
            {modifications.flavours && (
                <div style={{marginTop: 16}}>
                    <p>Select Flavor:</p>
                    <Select
                        style={{width: "100%"}}
                        onChange={(value) => handleFlavorChange(value.key, value.addonPrice)}
                    >
                        {modifications.flavours.map((flavor) => (
                            <Option
                                key={flavor.name}
                                value={{key: flavor.name, addonPrice: flavor.addonPrice}}
                            >
                                {flavor.name}
                            </Option>
                        ))}
                    </Select>
                </div>
            )}
        </Modal>
    );
};
