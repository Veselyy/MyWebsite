import Swal from 'sweetalert2';
import ContactSection from './ContactSection';

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
            <div className="container">
                <h2 className="footer__title">Kontakt na mě</h2>
                <div className="footer-block">
                    <ContactSection />
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        id="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" name="name" placeholder="Martin" required />
                        <input
                            type="email"
                            name="email"
                            placeholder="imthemartinveselyap@gmail.com"
                            required
                        />
                        <textarea name="message" rows={5} placeholder="Zpráva" />
                        <button id="form-button" type="submit">
                            Odeslat
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
