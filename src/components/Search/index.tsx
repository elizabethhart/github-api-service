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

    const searchRepositories = async (searchString: string) => {
        try {
            setIsLoading(true);
            const response = await getRepositories(searchString);
            setRepositories(response.data?.items ?? []);
            setIsLoading(false);
        } catch (error) {
            // TODO: Alert when the API is unavailable
            setIsLoading(false);
        }
    };

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
                        selectItem={(repository: GitHubRepository) =>
                            onRepositoryChange(repository)
                        }
                    />
                )
            )}
        </Jumbotron>
    );
};

export default Search;
