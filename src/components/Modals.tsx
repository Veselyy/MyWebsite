import type { ModalId } from "../App";

interface ModalsProps {
    activeModal: ModalId;
    onClose: () => void;
}
const Modals: React.FC<ModalsProps> = ({ activeModal, onClose }) => {
    const handleOverlayClick = () => {
        onClose();
    };

    const stopClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };
    
    return (
        <>
            {/* Náhledy projektů */}
            <div
                className={`modal ${activeModal === "pi1" ? "modal-active" : ""}`}
                id="pi1-modal-box"
                onClick={handleOverlayClick}
            >
                <img
                    className="pi1-modal-box-block"
                    src="/images/img-project1.png"
                    alt="Náhled projektu 1"
                    onClick={(e) => e.stopPropagation()}

                />
            </div>
            <div className={`modal ${activeModal === "pi2" ? "modal-active" : ""}`} id="pi2-modal-box" onClick={handleOverlayClick}>
                <img
                    className="pi2-modal-box-block"
                    src="/images/img-project2.png"
                    alt="Náhled projektu 2"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
            <div className={`modal ${activeModal === "pi3" ? "modal-active" : ""}`} id="pi3-modal-box" onClick={handleOverlayClick}>
                <img
                    className="pi3-modal-box-block"
                    src="/images/img-project3.png"
                    alt="Náhled projektu 3"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
            <div className={`modal ${activeModal === "pi4" ? "modal-active" : ""}`} id="pi4-modal-box" onClick={handleOverlayClick}>
                <img
                    className="pi4-modal-box-block"
                    src="/images/img-project4.png"
                    alt="Náhled projektu 4"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>

            {/* Modaly pro školu / VUT / Commity */}
            <div
                className={`modal ${activeModal === "hs" ? "modal-active" : ""}`}
                id="hs-modal-box"
                onClick={handleOverlayClick}
            >
                <div className="hs-modal-box-block modal-block" onClick={stopClick}>
                    <h3 className="modal-block__title">SPŠ Žďár nad Sázavou</h3>
                    <a
                        target="_blank"
                        href="https://www.spszr.cz"
                        className="modal-block__link"
                        rel="noreferrer"
                    >
                        Odkaz na stránky školy
                    </a>
                    <p className="modal-block__desc">
                        - Studoval jsem obor <strong>IT</strong>, zaměřený na{" "}
                        <strong>programování</strong> a <strong>správu sítí</strong>...
                    </p>
                </div>
            </div>

            <div
                className={`modal ${activeModal === "college" ? "modal-active" : ""}`}
                id="college-modal-box"
                onClick={handleOverlayClick}
            >
                <div className="college-modal-box-block modal-block" onClick={stopClick}>
                    <h3 className="modal-block__title">Vysoké učení technické v Brně</h3>
                    <a
                        target="_blank"
                        href="https://www.vut.cz"
                        className="modal-block__link"
                        rel="noreferrer"
                    >
                        Odkaz na stránky školy
                    </a>
                    <p className="modal-block__desc">
                        - Studuji obor <strong>FIT(IT)</strong>, zaměřený především na vývoj{" "}
                        <strong>softwarových řešení</strong> od algoritmů a datových struktur, přes{" "}
                        <strong>umělou inteligenci</strong> až po softwarové inženýrství. <br /> <br />- Dále se věnuje{" "}
                        <strong>kybernetické bezpečnosti</strong>, vestavným systémům a{" "}
                        <strong>IoT</strong>, digitálnímu zpracování signálu a obrazu, telekomunikačním a síťovým
                        technologiím...
                    </p>
                </div>
            </div>

            <div className={`modal ${activeModal === "commity" ? "modal-active" : ""}`} id="commity-modal-box" onClick={handleOverlayClick}>
                <div className="commity-modal-box-block modal-block" onClick={stopClick}>
                    <h3 className="modal-block__title">Commity</h3>
                    <a
                        target="_blank"
                        href="https://commity.cz"
                        className="modal-block__link"
                        rel="noreferrer"
                    >
                        Odkaz na stránky školy
                    </a>
                    <p className="modal-block__desc">
                        - Pracoval jsem primárně na <strong>frontendu</strong> webových aplikací (JSX, TSX, React).{" "}
                        <br />
                        <br />- Také jsem si sáhl na práci s daty v <strong>Metabase</strong> (SQL dotazy) a na práci s{" "}
                        <strong>API</strong> (REST, Postman). <br />
                        <br />- V rámci práce jsem se podílel na vývoji a údržbě webových aplikací pro naše klienty.{" "}
                        <br />
                        <br />- Měl jsem možnost pracovat na různých projektech, které mi umožnily rozvíjet své
                        dovednosti v oblasti <strong>programování</strong>,{" "}
                        <strong>komunikace v týmu</strong>, <strong>organizace práce</strong> a{" "}
                        <strong>time managementu</strong>...
                    </p>
                </div>
            </div>
        </>
    );
};

export default Modals;