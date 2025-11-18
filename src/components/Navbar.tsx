import {
    useEffect,
    useState,
    type MouseEvent as ReactMouseEvent,
} from "react";
import { navSections } from "../config/navSections";
import { useTheme, useMediaQuery } from "@mui/material";

type NavClickHandler = (
    e: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
) => void;

type NavLinksProps = {
    onNavClick: NavClickHandler;
    isMobile?: boolean;
};

const NavLinks = ({ onNavClick, isMobile }: NavLinksProps) => {
    return (
        <ul className={"navbar-block__menu " + (isMobile ? "navbar-mobile__menu" : "navbar-desktop__menu")}>
            {navSections.map((s) => (
                <li key={s.id}>
                    <a
                        href={s.href}
                        onClick={(e) => onNavClick(e, s.href)}
                    >
                        <span className="nav-icon">
                            <i className={s.iconClass} />
                        </span>
                        <span className="nav-text">{s.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Dark mode
    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    const handleToggleTheme = () => setDarkMode((prev) => !prev);
    const handleBurgerClick = () => setIsMenuOpen((prev) => !prev);
    const handleClose = () => setIsMenuOpen(false);

    const handleNavClick: NavClickHandler = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-block">

                    {(isSmallScreen && isMenuOpen) ? (
                            <div className="navbar-mobile__overlay" onClick={handleClose}>
                                <NavLinks onNavClick={handleNavClick} isMobile />
                            </div>
                    ) : (
                        <>
                            {/* Dark Mode Button */}
                            <button id="toggle-theme" onClick={handleToggleTheme}>
                                <i
                                    className={
                                        darkMode
                                            ? "fa-regular fa-sun fa-lg"
                                            : "fa-regular fa-moon fa-lg"
                                    }
                                />
                            </button>
                            <NavLinks onNavClick={handleNavClick} />
                        </>
                    )}

                    {/* HAMBURGER (jen mobil – řeší CSS) */}
                    <button
                        className="navbar-burger"
                        onClick={handleBurgerClick}
                    >
                        <i
                            className={
                                isMenuOpen
                                    ? "fa-solid fa-xmark fa-lg"
                                    : "fa-solid fa-bars fa-lg"
                            }
                        />
                    </button>

                    {/* Social Icons */}
                    <div className="navbar-block__socials">
                        <a
                            target="_blank"
                            href="https://github.com/Veselyy"
                            className="social-icon"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-github fa-lg" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/imthemartas/"
                            className="social-icon"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-instagram fa-lg" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/imthemartas/"
                            className="social-icon"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-facebook fa-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;