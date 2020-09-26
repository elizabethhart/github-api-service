import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Pulls: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        getPulls();
    }, []);

    async function getPulls() {
        // TODO
    }

    return <h1>{t("pulls")}</h1>;
};

export default Pulls;
