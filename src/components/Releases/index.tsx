import React, {useEffect} from "react";
import axios from "axios";

const Releases: React.FC = () => {
    useEffect(() => {
        getReleases();
    }, []);

    async function getReleases() {
        try {
            // fetch data from a url endpoint
            const repoResponse = await axios.get(
                "https://api.github.com/repos/facebook/react/releases?sort=popularity&direciton=desc"
            );
            console.log("response", repoResponse);
        } catch (error) {
            console.log(error); // catches both errors
        }
    }

    return <div>Hello World</div>;
};

export default Releases;
