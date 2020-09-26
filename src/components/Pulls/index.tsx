import React, { useEffect } from "react";

const Pulls: React.FC = () => {
    useEffect(() => {
        getPulls();
    }, []);

    async function getPulls() {
        // TODO
    }

    return <div>Pulls</div>;
};

export default Pulls;
