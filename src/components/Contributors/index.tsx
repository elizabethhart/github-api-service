import React, { useEffect } from "react";

const Contributors: React.FC = () => {
    useEffect(() => {
        getContributors();
    }, []);

    async function getContributors() {
        // TODO
    }

    return <h1>Contributors</h1>;
};

export default Contributors;
