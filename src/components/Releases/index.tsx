import React, { useEffect } from "react";

const Releases: React.FC = () => {
    useEffect(() => {
        getReleases();
    }, []);

    async function getReleases() {
        // TODO
    }

    return <h1>Releases</h1>;
};

export default Releases;
