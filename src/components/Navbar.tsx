import { useState, type MouseEvent as ReactMouseEvent } from 'react';
import { navSections } from '../config/navSections';
import { ICON_SIZE } from '../config/constants';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme, useMediaQuery } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { defineStyles } from '../utils/defineStyles';

const transition = 'all 0.3s ease-in-out';
const hoverScale = 1.15;

const styles = defineStyles({
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 3,
        backdropFilter: 'blur(10px)',
    },
    block: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBlock: '0.5rem',
    },
    menu: {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
    },
    menuMobile: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
    },
    menuItem: {
        position: 'relative',
        cursor: 'pointer',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-3px',
            left: 0,
            height: '1px',
            width: 0,
            backgroundColor: 'text.primary',
            transition,
        },
        '&:hover::after': {
            width: '100%',
            transition,
        },
    },
    linkContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    icon: {
        fontSize: ICON_SIZE,
    },
    themeButton: {
        transition,
        color: 'text.primary',
        '&:hover': {
            transform: `scale(${hoverScale})`,
        },
    },
    burger: {
        zIndex: 3,
        transition,
        color: 'text.primary',
        display: { xs: 'inline-flex', sm: 'none' },
        '&:hover': {
            transform: `scale(${hoverScale})`,
        },
    },
    socials: {
        display: { xs: 'none', sm: 'flex' },
        gap: 1,
    },
    socialLink: {
        color: 'text.primary',
        transition,
        '&:hover': {
            transform: `scale(${hoverScale})`,
        },
    },
});

type NavClickHandler = (e: ReactMouseEvent<HTMLAnchorElement>, href: string) => void;

type NavLinksProps = {
    onNavClick: NavClickHandler;
    isMobile?: boolean;
};

const NavLinks = ({ onNavClick, isMobile }: NavLinksProps) => {
    return (
        <Stack
            component="ul"
            sx={[styles.menu, isMobile ? styles.menuMobile : {}]}
            direction={isMobile ? 'column' : 'row'}
        >
            {navSections.map((section) => (
                <Box component="li" key={section.id} sx={styles.menuItem}>
                    <Link
                        href={section.href}
                        underline="none"
                        color="text.primary"
                        onClick={(e) => onNavClick(e as ReactMouseEvent<HTMLAnchorElement>, section.href)}
                        sx={{ '&:hover': { color: 'text.primary' } }}
                    >
                        <Stack component="span" direction="row" sx={styles.linkContent}>
                            <Box component="span" sx={{ display: 'flex' }}>
                                <section.icon sx={styles.icon} />
                            </Box>
                            <span>{section.label}</span>
                        </Stack>
                    </Link>
                </Box>
            ))}
        </Stack>
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
        <Box component="nav" sx={styles.nav}>
            <Container>
                <Stack direction="row" sx={styles.block}>
                    <IconButton
                        onClick={onToggleTheme}
                        aria-label={darkMode ? 'Světlý režim' : 'Tmavý režim'}
                        sx={styles.themeButton}
                        size="small"
                    >
                        {darkMode ? (
                            <LightModeIcon sx={styles.icon} />
                        ) : (
                            <DarkModeIcon sx={styles.icon} />
                        )}
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <NavLinks onNavClick={handleNavClick} />
                    </Box>

                    <IconButton
                        onClick={handleBurgerClick}
                        aria-label={isMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
                        sx={styles.burger}
                        size="small"
                    >
                        {isMenuOpen ? (
                            <CloseIcon sx={styles.icon} />
                        ) : (
                            <MenuIcon sx={styles.icon} />
                        )}
                    </IconButton>

                    <Stack direction="row" sx={styles.socials} component="div">
                        <IconButton
                            component="a"
                            href="https://github.com/Veselyy"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            size="small"
                            sx={styles.socialLink}
                        >
                            <GitHubIcon sx={styles.icon} />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/veselymartin-online"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            size="small"
                            sx={styles.socialLink}
                        >
                            <LinkedInIcon sx={styles.icon} />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.facebook.com/imthemartas/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            size="small"
                            sx={styles.socialLink}
                        >
                            <FacebookIcon sx={styles.icon} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>

            <Drawer
                anchor="top"
                open={isSmallScreen && isMenuOpen}
                onClose={handleClose}
            >
                <NavLinks onNavClick={handleNavClick} isMobile />
            </Drawer>
        </Box>
    );
};

export default Navbar;
