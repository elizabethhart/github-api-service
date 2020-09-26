import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Button, ButtonGroup, Navbar } from "react-bootstrap";

const Header: React.FC = () => {
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">React {t("dashboard")}</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <ButtonGroup>
                    <Button onClick={() => changeLanguage("sv")}>sv</Button>
                    <Button onClick={() => changeLanguage("en")}>en</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
