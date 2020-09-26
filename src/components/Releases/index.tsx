import React, { useEffect } from "react";

const Releases: React.FC = () => {
    useEffect(() => {
        getReleases();
    }, []);

    async function getReleases() {
        // TODO
    }

    return <div>Releases</div>;
};

export default Releases;
