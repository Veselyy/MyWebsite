import { useState, type MouseEvent as ReactMouseEvent } from 'react';
import { navSections } from '../config/navSections';
import { ICON_SIZE } from '../config/constants';
import Container from '@mui/material/Container';
import { useTheme, useMediaQuery } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

type NavClickHandler = (e: ReactMouseEvent<HTMLAnchorElement>, href: string) => void;

type NavLinksProps = {
    onNavClick: NavClickHandler;
    isMobile?: boolean;
};

const NavLinks = ({ onNavClick, isMobile }: NavLinksProps) => {
    return (
        <ul
            className={
                'navbar-block__menu ' + (isMobile ? 'navbar-mobile__menu' : 'navbar-desktop__menu')
            }
        >
            {navSections.map((section) => (
                <li key={section.id}>
                    <a href={section.href} onClick={(e) => onNavClick(e, section.href)}>
                        <div className="nav-link-content">
                            <span className="nav-icon">
                                <section.icon sx={{ fontSize: ICON_SIZE }} />
                            </span>
                            <span>{section.label}</span>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
};

type NavbarProps = {
    darkMode: boolean;
    onToggleTheme: () => void;
};

const Navbar = ({ darkMode, onToggleTheme }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleBurgerClick = () => setIsMenuOpen((prev) => !prev);
    const handleClose = () => setIsMenuOpen(false);

    const handleNavClick: NavClickHandler = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <nav className="navbar">
            <Container>
                <div className="navbar-block">
                    {isSmallScreen && isMenuOpen ? (
                        <div className="navbar-mobile__overlay" onClick={handleClose}>
                            <NavLinks onNavClick={handleNavClick} isMobile />
                        </div>
                    ) : (
                        <>
                            {/* Dark Mode Button */}
                            <button id="toggle-theme" onClick={onToggleTheme}>
                                {darkMode ? (
                                    <LightModeIcon sx={{ fontSize: ICON_SIZE }} />
                                ) : (
                                    <DarkModeIcon sx={{ fontSize: ICON_SIZE }} />
                                )}
                            </button>
                            <NavLinks onNavClick={handleNavClick} />
                        </>
                    )}

                    {/* HAMBURGER (jen mobil – řeší CSS) */}
                    <button className="navbar-burger" onClick={handleBurgerClick}>
                        {isMenuOpen ? (
                            <CloseIcon sx={{ fontSize: ICON_SIZE }} />
                        ) : (
                            <MenuIcon sx={{ fontSize: ICON_SIZE }} />
                        )}
                    </button>

                    {/* Social Icons */}
                    <div className="navbar-block__socials">
                        <a
                            target="_blank"
                            href="https://github.com/Veselyy"
                            className="social-icon"
                            rel="noreferrer"
                        >
                            <GitHubIcon sx={{ fontSize: ICON_SIZE }} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/veselymartin-online"
                            className="social-icon"
                            rel="noreferrer"
                        >
                            <LinkedInIcon sx={{ fontSize: ICON_SIZE }} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/imthemartas/"
                            className="social-icon"
                            rel="noreferrer"
                        >
                            <FacebookIcon sx={{ fontSize: ICON_SIZE }} />
                        </a>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
