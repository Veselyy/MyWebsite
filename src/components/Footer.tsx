import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import ContactSection from './ContactSection';
import { defineStyles } from '../utils/defineStyles';
import { ICON_SIZE } from '../config/constants';

const styles = defineStyles({
    title: {
        color: 'text.primary',
    },
    contentStack: {
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        gap: 2,
    },
    form: {
        width: { xs: '100%', sm: '50%' },
    },
    sendIcon: {
        fontSize: ICON_SIZE,
    },
});

const FooterSection = () => {
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch('/', {
                method: 'POST',
                body: formData,
            });

            Swal.fire('Díky! Zpráva byla odeslána.');
            form.reset();
        } catch {
            Swal.fire('Nepodařilo se odeslat zprávu.');
        }
    };

    return (
        <footer id="footer">
            <Container>
                <Typography variant="h5" sx={styles.title}>
                    Kontakt na mě
                </Typography>
                <Stack sx={styles.contentStack}>
                    <ContactSection />
                    <Box
                        component="form"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        id="contact-form"
                        onSubmit={handleSubmit}
                        sx={styles.form}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <Stack spacing={2}>
                            <TextField
                                name="name"
                                label="Jméno"
                                placeholder="Martin"
                                required
                                fullWidth
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                name="email"
                                type="email"
                                label="E-mail"
                                placeholder="veselymartin.online@gmail.com"
                                required
                                fullWidth
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                name="message"
                                label="Zpráva"
                                placeholder="Zpráva"
                                required
                                multiline
                                rows={5}
                                fullWidth
                                variant="outlined"
                                size="small"
                            />
                            <Button
                                id="form-button"
                                type="submit"
                                variant="contained"
                                endIcon={<SendIcon sx={styles.sendIcon} />}
                            >
                                Odeslat
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </footer>
    );
};

export default FooterSection;
