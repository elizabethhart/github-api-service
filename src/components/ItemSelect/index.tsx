import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { GitHubRepository } from "../../types";

interface ItemSelectProps {
    selectedItem: GitHubRepository | null;
    items: GitHubRepository[];
    selectItem: (item: GitHubRepository) => void;
}

/**
 * Reusable component for displaying a list of selectable items
 */
const ItemSelect: React.FC<ItemSelectProps> = ({ selectedItem, items, selectItem }) => {
    const { t } = useTranslation();

    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {selectedItem ? selectedItem.full_name : t("select")}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items.map((item, index) => {
                    return (
                        <Dropdown.Item onClick={() => selectItem(item)} key={index}>
                            {item.full_name}
                        </Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ItemSelect;
