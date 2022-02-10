import React from "react";
import Header from "../Header";

/**
 * Layout component
 */
const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
