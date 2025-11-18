import type { ModalId } from "../App";

interface Props {
    onOpenModal: (id: ModalId) => void;
}

const ProjectsSection: React.FC<Props> = ({ onOpenModal }) => {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="projects__title">Projekty</h2>
                <div className="projects-block">
                    <div className="project-card">
                        <h3>Sledovač návyků</h3>
                        <span className="project-card__status">
                            <i className="fa-solid fa-circle fa-2xs"></i>
                            Vlastní projekt (rozdělaný)
                        </span>
                        <div className="project-card-links">
                            <a
                                className="github-link"
                                target="_blank"
                                href="https://github.com/Veselyy/HabitTracker"
                                rel="noreferrer"
                            >
                                Odkaz na GitHub
                            </a>
                            <button id="pi1-link" className="picture-link" type="button" onClick={() => onOpenModal("pi1")} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
>
                                Zobrazit obrázek
                            </button>
                        </div>
                        <p className="project-card__desc">
                            - Tato webová aplikace slouží ke sledování denních návyků. <br />
                            <br />- Uživatelé si mohou jednoduše přidávat nové návyky, upravovat je podle potřeby a
                            každodenně zaznamenávat jejich plnění. <br />
                            <br />- Aplikace zároveň nabízí přehledné statistiky, které ukazují úspěšnost plnění
                            jednotlivých návyků v čase, a pomáhá tak budovat pozitivní rutiny.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Myšlenkové mapy</h3>
                        <span className="project-card__status">
                            <i className="fa-solid fa-circle fa-2xs"></i>
                            Maturitní projekt (hotový)
                        </span>
                        <div className="project-card-links">
                            <a
                                className="github-link"
                                target="_blank"
                                href="https://github.com/Veselyy/MATURITA"
                                rel="noreferrer"
                            >
                                Odkaz na GitHub
                            </a>
                            <a
                                className="page-link"
                                target="_blank"
                                href="https://myslenkovemapy.netlify.app"
                                rel="noreferrer"
                            >
                                Přejít na stránku
                            </a>
                            <button id="pi2-link" className="picture-link" type="button" onClick={() => onOpenModal("pi2")} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                                Zobrazit obrázek
                            </button>
                        </div>
                        <p className="project-card__desc">
                            - Tato stránka se věnuje myšlenkovým mapám jako efektivnímu nástroji pro organizaci myšlenek,
                            plánování a rozvoj kreativity. <br />
                            <br />- Návštěvníci zde najdou vysvětlení principů tvorby myšlenkových map, praktické ukázky
                            a videa s návody na tvorbu map v několika online nástrojích. <br />
                            <br />- Cílem je ukázat, jak jednoduše lze myšlenkové mapy začlenit do každodenního studia,
                            práce i osobního rozvoje.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Koloběžky</h3>
                        <span className="project-card__status">
                            <i className="fa-solid fa-circle fa-2xs"></i>
                            Design
                        </span>
                        <div className="project-card-links">
                            <a
                                className="github-link"
                                target="_blank"
                                href="https://github.com/Veselyy/Kolobezky"
                                rel="noreferrer"
                            >
                                Odkaz na GitHub
                            </a>
                            <a
                                className="page-link"
                                target="_blank"
                                href="https://veselyy.github.io/Kolobezky/src/"
                                rel="noreferrer"
                            >
                                Přejít na stránku
                            </a>
                            <button id="pi3-link" className="picture-link" type="button" onClick={() => onOpenModal("pi3")} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                                Zobrazit obrázek
                            </button>
                        </div>
                        <p className="project-card__desc">
                            - Stránka představuje online katalog elektro-koloběžek. <br />
                            <br />- Nabízí přehled X modelů s cenami, rychlým doručením a doprovodnými informacemi.{" "}
                            <br />
                            <br />- Obsahuje sekce o výhodách nákupu, zákaznické recenze a jednoduchou navigaci s
                            možností vyhledávání a nákupního košíku.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Služba HouseFix</h3>
                        <span className="project-card__status">
                            <i className="fa-solid fa-circle fa-2xs"></i>
                            Design
                        </span>
                        <div className="project-card-links">
                            <a
                                className="github-link"
                                target="_blank"
                                href="https://github.com/Veselyy/HouseFix_Build"
                                rel="noreferrer"
                            >
                                Odkaz na GitHub
                            </a>
                            <a
                                className="page-link"
                                target="_blank"
                                href="https://veselyy.github.io/HouseFix_Build/src/"
                                rel="noreferrer"
                            >
                                Přejít na stránku
                            </a>
                            <button id="pi4-link" className="picture-link" type="button" onClick={() => onOpenModal("pi4")} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                                Zobrazit obrázek
                            </button>
                        </div>
                        <p className="project-card__desc">
                            - Stránka představuje službu HouseFix zaměřenou na kompletní renovace bytů, domů a kanceláří
                            "na klíč" v Praze. <br />
                            <br />- Nabízí bezplatné vypracování designového projektu, rychlý výpočet nákladů, flexibilní
                            slevy, garanci kvality a dodržení termínů. <br />
                            <br />- Obsahuje také přehled služeb, ukázky realizací, popis postupu spolupráce a kontaktní
                            informace.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;