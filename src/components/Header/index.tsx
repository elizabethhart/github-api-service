import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Button, ButtonGroup, Navbar } from "react-bootstrap";

const Header: React.FC = () => {
    const { t } = useTranslation();
    const languages = ["en", "sv"];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">GitHub {t("dashboard")}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <ButtonGroup>
                    {languages.map((language, index) => {
                        return (
                            <Button
                                className="language-btn"
                                key={index}
                                variant={i18n.language === language ? "light" : "dark"}
                                onClick={() => changeLanguage(language)}
                            >
                                {language}
                            </Button>
                        );
                    })}
                </ButtonGroup>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
