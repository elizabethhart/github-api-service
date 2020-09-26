import React, {useEffect} from "react";
import axios from "axios";

const Contributors: React.FC = () => {
    useEffect(() => {
        getContributors();
    }, []);

    async function getContributors() {
        try {
            // fetch data from a url endpoint
            const repoResponse = await axios.get(
                "https://api.github.com/repos/facebook/react/contributors?sort=popularity&direciton=desc"
            );
            console.log("Contributors", repoResponse);
        } catch (error) {
            console.log(error); // catches both errors
        }
    }

    return <div>Hello World</div>;
};

export default Contributors;
