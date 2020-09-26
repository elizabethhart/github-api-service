import React, { useEffect } from "react";

const Pulls: React.FC = () => {
    useEffect(() => {
        getPulls();
    }, []);

    async function getPulls() {
        // TODO
    }

    return <h1>Pulls</h1>;
};

export default Pulls;
