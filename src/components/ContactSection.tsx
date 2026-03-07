import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { defineStyles } from '../utils/defineStyles';
import { ICON_SIZE } from '../config/constants';

const transition = 'all 0.3s ease-in-out';

const styles = defineStyles({
    root: {
        width: { xs: '100%', sm: '50%' },
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
    },
    contactLinksStack: {
        flexDirection: 'column',
    },
    contactLink: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        width: 'fit-content',
        position: 'relative',
        transition,
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -3,
            left: 0,
            height: '1px',
            width: 0,
            backgroundColor: 'text.primary',
            transition,
        },
        '&:hover::after': {
            width: '100%',
        },
    },
    socialsStack: {
        display: 'flex',
        gap: 1,
    },
    socialLink: {
        display: 'inline-flex',
        transition,
        '&:hover': { transform: 'scale(1.15)' },
    },
    icon: {
        fontSize: ICON_SIZE,
    },
});

const ContactSection = () => {
    return (
        <Box sx={styles.root}>
            <Stack spacing={1} sx={styles.contactLinksStack}>
                <Link
                    href="mailto:veselymartin.online@gmail.com"
                    underline="none"
                    sx={styles.contactLink}
                >
                    <EmailIcon sx={styles.icon} />
                    veselymartin.online@gmail.com
                </Link>
                <Link href="tel:+420732424435" underline="none" sx={styles.contactLink}>
                    <PhoneIcon sx={styles.icon} />
                    +420 732 424 435
                </Link>
            </Stack>
            <Stack direction="row" spacing={1} sx={styles.socialsStack}>
                <Link
                    href="https://github.com/Veselyy"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    sx={styles.socialLink}
                >
                    <GitHubIcon sx={styles.icon} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/veselymartin-online"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    sx={styles.socialLink}
                >
                    <LinkedInIcon sx={styles.icon} />
                </Link>
                <Link
                    href="https://www.facebook.com/imthemartas/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    sx={styles.socialLink}
                >
                    <FacebookIcon sx={styles.icon} />
                </Link>
            </Stack>
        </Box>
    );
};

export default ContactSection;
