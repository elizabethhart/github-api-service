import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FormControl, InputGroup } from "react-bootstrap";

interface ItemSearchProps {
    onInputChange: (searchString: string) => void;
    clearSelection: () => void;
}

/**
 * Reusable component for text input searches
 */
const ItemSearch: React.FC<ItemSearchProps> = ({ onInputChange, clearSelection }) => {
    const [searchString, setSearchString] = useState<string>("");

    useEffect(() => {
        // Wait until the user has finished typing before emitting event
        const timeout = setTimeout(() => {
            if (searchString !== "") {
                onInputChange(searchString);
            }
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, [searchString]);

    const handleClear = () => {
        setSearchString("");
        clearSelection();
    };

    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                type="text"
                aria-label="search"
                aria-describedby="basic-addon1"
                value={searchString}
                onChange={(event) => {
                    setSearchString(event.target.value);
                }}
            />
            <InputGroup.Append>
                <InputGroup.Text id="basic-addon2" onClick={() => handleClear()}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default ItemSearch;
