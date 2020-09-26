import React from "react";
import { Navbar } from "react-bootstrap";

const Header: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">React Dashboard</Navbar.Brand>
        </Navbar>
    );
};

export default Header;
