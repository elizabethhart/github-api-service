import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Jumbotron, Spinner } from "react-bootstrap";
import { getRepositories } from "../../api/GitHubApi";
import { GitHubRepository } from "../../types";
import ItemSelect from "../ItemSelect";
import ItemSearch from "../ItemSearch";

interface SearchProps {
    repository: GitHubRepository | null;
    onRepositoryChange: (repository: GitHubRepository) => void;
    clearSelection: () => void;
}

/**
 * Search GitHub repositories via wildcard match
 */
const Search: React.FC<SearchProps> = ({ repository, onRepositoryChange, clearSelection }) => {
    const { t } = useTranslation();
    const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function searchRepositories(searchString: string) {
        setIsLoading(true);
        getRepositories(searchString).then((response) => {
            console.log("response", response);
            if (response.data && response.data.items && response.data.items.length) {
                setRepositories(response.data.items);
            }
            setIsLoading(false);
        });
    }

    return (
        <Jumbotron>
            <h1>{t("search-repositories")}</h1>
            <ItemSearch onInputChange={searchRepositories} clearSelection={clearSelection} />
            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                repositories.length > 0 && (
                    <ItemSelect
                        selectedItem={repository}
                        items={repositories}
                        selectItem={onRepositoryChange}
                    />
                )
            )}
        </Jumbotron>
    );
};

export default Search;
