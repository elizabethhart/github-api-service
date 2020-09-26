import React, {useEffect} from "react";
import axios from "axios";

const Pulls: React.FC = () => {
    useEffect(() => {
        getPulls();
    }, []);

    async function getPulls() {
        try {
            // fetch data from a url endpoint
            const repoResponse = await axios.get(
                "https://api.github.com/repos/facebook/react/pulls?sort=popularity&direciton=desc"
            );
            console.log("response", repoResponse);
        } catch (error) {
            console.log(error); // catches both errors
        }
    }

    return <div>Hello World</div>;
};

export default Pulls;
