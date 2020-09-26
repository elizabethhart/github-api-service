import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Contributors: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        getContributors();
    }, []);

    async function getContributors() {
        // TODO
    }

    return <h1>{t("contributors")}</h1>;
};

export default Contributors;
