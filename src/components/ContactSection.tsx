import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ICON_SIZE } from '../config/constants';

const ContactSection = () => {
    return (
        <div className="footer-block-links">
            <div className="footer-block-links__text">
                <p className="footer-contact-row">
                    <EmailIcon sx={{ fontSize: ICON_SIZE }} />
                    <a href="mailto:veselymartin.online@gmail.com" className="footer-link">
                        veselymartin.online@gmail.com
                    </a>
                </p>
                <p className="footer-contact-row">
                    <PhoneIcon sx={{ fontSize: ICON_SIZE }} />
                    <a href="tel:+420732424435" className="footer-link">
                        +420 732 424 435
                    </a>
                </p>
            </div>
            <div className="footer-block-links__socials">
                <a
                    href="https://github.com/Veselyy"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link"
                    aria-label="GitHub"
                >
                    <GitHubIcon sx={{ fontSize: ICON_SIZE }} />
                </a>
                <a
                    href="https://www.linkedin.com/in/veselymartin-online"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link"
                    aria-label="LinkedIn"
                >
                    <LinkedInIcon sx={{ fontSize: ICON_SIZE }} />
                </a>
                <a
                    href="https://www.facebook.com/imthemartas/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link"
                    aria-label="Facebook"
                >
                    <FacebookIcon sx={{ fontSize: ICON_SIZE }} />
                </a>
            </div>
        </div>
    );
};

export default ContactSection;
