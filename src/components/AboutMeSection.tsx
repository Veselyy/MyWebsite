import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PeopleIcon from '@mui/icons-material/People';
import CodeIcon from '@mui/icons-material/Code';
import { ICON_SIZE } from '../config/constants';

const AboutMeSection = () => {
    return (
        <section id="about-me">
            <div className="container">
                <h2 className="about-me__title">O mně</h2>
                <div className="about-me-block">
                    <p className="about-me-block__desc">
                        Zdravím, já jsem Martin, jsem z venkova a věnuji se <strong>IT</strong> 💻
                        už 4 rokem.
                        <br />
                        <br />
                        Jsem <strong>student,</strong> rád dělám <strong>sporty</strong> 🏃‍♂️ a rád se
                        bavím s lidmi, kteří mi mají <strong>co předat</strong>.
                        <br />
                        <br />
                        Můj silný zájem o <strong>učení</strong> a <strong>osobní rozvoj</strong> mě
                        motivuje využívat každou příležitost ke <strong>kariérnímu růstu</strong>.
                        <br />
                        <br />
                        Jsem připraven <strong>čelit</strong> novým výzvám a přispět ke společnému{' '}
                        <strong>úspěchu</strong>.
                    </p>
                    <img
                        src="/images/photo_about_me.jpg"
                        alt="Moje fotka"
                        className="about-me-block__photo"
                    />
                </div>

                <h3 className="skills__title">Dovednosti</h3>
                <div className="skills-block">
                    <table>
                        <tbody>
                            <tr>
                                <th>Začátečník</th>
                                <th>Pokročilý</th>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td>HTML, CSS</td>
                            </tr>
                            <tr>
                                <td>SQL</td>
                                <td>Design (FIGMA)</td>
                            </tr>
                            <tr>
                                <td>REST, API</td>
                                <td>Jazyk C</td>
                            </tr>
                            <tr>
                                <td>Jazyk SWIFT</td>
                                <td>Práce s AI</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="hobbies__title">Koníčky</h3>
                <div className="hobbies-block">
                    <div className="hobbies-card">
                        <div className="hobbies-card__content">
                            <DirectionsRunIcon sx={{ fontSize: ICON_SIZE }} />
                            <div>
                                <h4>Sport</h4>
                                <p>Jakýkoliv sport, který mě udržuje aktivním a fit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hobbies-card">
                        <div className="hobbies-card__content">
                            <LocalLibraryIcon sx={{ fontSize: ICON_SIZE }} />
                            <div>
                                <h4>Učení nových věcí</h4>
                                <p>
                                    Rád se učím nové technologie, dovednosti a rozšiřuji své
                                    znalosti.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hobbies-card">
                        <div className="hobbies-card__content">
                            <PeopleIcon sx={{ fontSize: ICON_SIZE }} />
                            <div>
                                <h4>Komunikace</h4>
                                <p>Komunikace s lidmi s podobným zájmem mě inspiruje a motivuje.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hobbies-card">
                        <div className="hobbies-card__content">
                            <CodeIcon sx={{ fontSize: ICON_SIZE }} />
                            <div>
                                <h4>Programování</h4>
                                <p>
                                    Věnuji se programování aplikací a hledání inovativních řešení.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
