import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Releases: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        getReleases();
    }, []);

    async function getReleases() {
        // TODO
    }

    return <h1>{t("releases")}</h1>;
};

export default Releases;
