import React, { useEffect } from "react";

const Contributors: React.FC = () => {
    useEffect(() => {
        getContributors();
    }, []);

    async function getContributors() {
        // TODO
    }

    return <div>Contributors</div>;
};

export default Contributors;
