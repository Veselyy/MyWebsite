import type { ModalId } from '../App';
import CircleIcon from '@mui/icons-material/Circle';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ICON_SIZE } from '../config/constants';

interface Props {
    onOpenModal: (id: ModalId) => void;
    darkMode: boolean;
}

const ProjectsSection: React.FC<Props> = ({ onOpenModal, darkMode }) => {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="projects__title">Projekty</h2>
                <div className="projects-block">
                    <div className="project-card">
                        <h3>Sledovač návyků</h3>
                        <div className="project-card__status">
                            <CircleIcon sx={{ fontSize: 8 }} />
                            Vlastní projekt (rozdělaný)
                        </div>
                        <div className="project-card-links">
                            <a
                                className="github-link"
                                target="_blank"
                                href="https://github.com/Veselyy/HabitTracker"
                                rel="noreferrer"
                            >
                                <GitHubIcon sx={{ fontSize: ICON_SIZE }} />
                                Odkaz na GitHub
                            </a>
                            {!darkMode && (
                                <a
                                    className="picture-link"
                                    onClick={() => onOpenModal('pi1')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    <VisibilityIcon sx={{ fontSize: ICON_SIZE }} />
                                    Zobrazit náhled
                                </a>
                            )}
                        </div>
                        <p className="project-card__desc">
                            - Tato webová aplikace slouží ke sledování denních návyků. <br />
                            <br />- Uživatelé si mohou jednoduše přidávat nové návyky, upravovat je
                            podle potřeby a každodenně zaznamenávat jejich plnění. <br />
                            <br />- Aplikace zároveň nabízí přehledné statistiky, které ukazují
                            úspěšnost plnění jednotlivých návyků v čase, a pomáhá tak budovat
                            pozitivní rutiny.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Myšlenkové mapy</h3>
                        <div className="project-card__status">
                            <CircleIcon sx={{ fontSize: 8 }} />
                            Maturitní projekt (hotový)
                        </div>
                        <div className="project-card-links">
                            <a
                                className="github-link"
                                target="_blank"
                                href="https://github.com/Veselyy/MATURITA"
                                rel="noreferrer"
                            >
                                <GitHubIcon sx={{ fontSize: ICON_SIZE }} />
                                Odkaz na GitHub
                            </a>
                            {!darkMode && (
                                <a
                                    className="picture-link"
                                    onClick={() => onOpenModal('pi2')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    <VisibilityIcon sx={{ fontSize: ICON_SIZE }} />
                                    Zobrazit náhled
                                </a>
                            )}
                        </div>
                        <p className="project-card__desc">
                            - Tato stránka se věnuje myšlenkovým mapám jako efektivnímu nástroji pro
                            organizaci myšlenek, plánování a rozvoj kreativity. <br />
                            <br />- Návštěvníci zde najdou vysvětlení principů tvorby myšlenkových
                            map, praktické ukázky a videa s návody na tvorbu map v několika online
                            nástrojích. <br />
                            <br />- Cílem je ukázat, jak jednoduše lze myšlenkové mapy začlenit do
                            každodenního studia, práce i osobního rozvoje.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Koloběžky</h3>
                        <div className="project-card__status">
                            <CircleIcon sx={{ fontSize: 8 }} />
                            Design
                        </div>
                        <div className="project-card-links">
                            <a
                                className="github-link"
                                target="_blank"
                                href="https://github.com/Veselyy/Kolobezky"
                                rel="noreferrer"
                            >
                                <GitHubIcon sx={{ fontSize: ICON_SIZE }} />
                                Odkaz na GitHub
                            </a>
                            {!darkMode && (
                                <a
                                    className="picture-link"
                                    onClick={() => onOpenModal('pi3')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    <VisibilityIcon sx={{ fontSize: ICON_SIZE }} />
                                    Zobrazit náhled
                                </a>
                            )}
                        </div>
                        <p className="project-card__desc">
                            - Stránka představuje online katalog elektro-koloběžek. <br />
                            <br />- Nabízí přehled X modelů s cenami, rychlým doručením a
                            doprovodnými informacemi. <br />
                            <br />- Obsahuje sekce o výhodách nákupu, zákaznické recenze a
                            jednoduchou navigaci s možností vyhledávání a nákupního košíku.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Služba HouseFix</h3>
                        <div className="project-card__status">
                            <CircleIcon sx={{ fontSize: 8 }} />
                            Design
                        </div>
                        <div className="project-card-links">
                            <a
                                className="github-link"
                                target="_blank"
                                href="https://github.com/Veselyy/HouseFix_Build"
                                rel="noreferrer"
                            >
                                <GitHubIcon sx={{ fontSize: ICON_SIZE }} />
                                Odkaz na GitHub
                            </a>
                            {!darkMode && (
                                <a
                                    className="picture-link"
                                    onClick={() => onOpenModal('pi4')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    <VisibilityIcon sx={{ fontSize: ICON_SIZE }} />
                                    Zobrazit náhled
                                </a>
                            )}
                        </div>
                        <p className="project-card__desc">
                            - Stránka představuje službu HouseFix zaměřenou na kompletní renovace
                            bytů, domů a kanceláří "na klíč" v Praze. <br />
                            <br />- Nabízí bezplatné vypracování designového projektu, rychlý
                            výpočet nákladů, flexibilní slevy, garanci kvality a dodržení termínů.{' '}
                            <br />
                            <br />- Obsahuje také přehled služeb, ukázky realizací, popis postupu
                            spolupráce a kontaktní informace.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
