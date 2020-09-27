import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, FormControl, InputGroup, Jumbotron } from "react-bootstrap";
import { getRepositories } from "../../api/GitHubApi";
import { GitHubRepository } from "../../types";

interface SearchProps {
    repository: GitHubRepository | null;
    onRepositoryChange: (repository: GitHubRepository) => void;
    clearSelection: () => void;
}

const Search: React.FC<SearchProps> = ({ repository, onRepositoryChange, clearSelection }) => {
    const { t } = useTranslation();
    const [searchString, setSearchString] = useState<string>("");
    const [repositories, setRepositories] = useState<GitHubRepository[]>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (searchString !== "") {
                getRepositories(searchString).then((response) => {
                    if (response.data && response.data.items && response.data.items.length) {
                        setRepositories(response.data.items);
                    }
                });
            }
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, [searchString]);

    return (
        <Jumbotron>
            <h1>{t("search-repositories")}</h1>
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
                        setSearchString("");
                        setSearchString(event.target.value);
                    }}
                />
                {repositories.length > 0 && (
                    <InputGroup.Append>
                        <InputGroup.Text
                            id="basic-addon2"
                            onClick={() => {
                                setRepositories([]);
                                clearSelection();
                            }}
                        >
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </InputGroup.Text>
                    </InputGroup.Append>
                )}
            </InputGroup>
            {repositories.length > 0 && (
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        {repository ? repository.full_name : "Select Repository"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {repositories.map((repository, index) => {
                            return (
                                <Dropdown.Item
                                    onClick={() => {
                                        console.log(repository);
                                        onRepositoryChange(repository);
                                    }}
                                    key={index}
                                >
                                    {repository.full_name}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            )}
        </Jumbotron>
    );
};

export default Search;
