import React from "react";
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
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {selectedItem ? selectedItem.full_name : "Select"}
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
