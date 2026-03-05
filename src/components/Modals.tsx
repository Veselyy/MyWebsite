import { useEffect, useState } from 'react';
import type { ModalId } from '../App';

import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CircularProgress from '@mui/material/CircularProgress';
import { ICON_SIZE } from '../config/constants';

interface ModalsProps {
    activeModal: ModalId;
    onClose: () => void;
}
const PROJECT_PREVIEW_URLS: Record<'pi1' | 'pi2' | 'pi3' | 'pi4', string> = {
    pi1: '',
    pi2: 'https://myslenkovemapy.netlify.app',
    pi3: 'https://veselyy.github.io/Kolobezky/src/',
    pi4: 'https://veselyy.github.io/HouseFix_Build/src/',
};

const PROJECT_TITLES: Record<'pi1' | 'pi2' | 'pi3' | 'pi4', string> = {
    pi1: 'Náhled projektu 1',
    pi2: 'Náhled projektu 2 – Myšlenkové mapy',
    pi3: 'Náhled projektu 3 – Koloběžky',
    pi4: 'Náhled projektu 4 – HouseFix',
};

const isProjectModal = (id: ModalId): id is 'pi1' | 'pi2' | 'pi3' | 'pi4' =>
    id === 'pi1' || id === 'pi2' || id === 'pi3' || id === 'pi4';

const Modals: React.FC<ModalsProps> = ({ activeModal, onClose }) => {
    const [iframeLoading, setIframeLoading] = useState(true);

    const projectPreviewId = isProjectModal(activeModal) ? activeModal : null;

    useEffect(() => {
        if (projectPreviewId) setIframeLoading(true);
    }, [projectPreviewId]);

    const handleOverlayClick = () => {
        onClose();
    };

    const stopClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            {/* Náhledy projektů – jeden modal, jeden iframe (načte se až po otevření, po zavření se odpojí) */}
            <div
                className={`modal ${projectPreviewId ? 'modal-active' : ''}`}
                id="project-preview-modal"
                onClick={handleOverlayClick}
            >
                {projectPreviewId && (
                    <>
                        <button
                            type="button"
                            className="modal-preview-close"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            aria-label="Zavřít náhled"
                        >
                            <CloseIcon sx={{ fontSize: ICON_SIZE }} />
                        </button>
                        <div
                            className="project-preview-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {iframeLoading && (
                                <div className="modal-iframe-spinner" aria-hidden="true">
                                    <CircularProgress />
                                </div>
                            )}
                            <iframe
                                key={projectPreviewId}
                                className="modal-iframe"
                                title={PROJECT_TITLES[projectPreviewId]}
                                src={PROJECT_PREVIEW_URLS[projectPreviewId]}
                                onLoad={() => setIframeLoading(false)}
                            />
                        </div>
                    </>
                )}
            </div>

            {/* Modaly pro školu / VUT / Commity */}
            <div
                className={`modal ${activeModal === 'hs' ? 'modal-active' : ''}`}
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
                        <OpenInNewIcon sx={{ fontSize: ICON_SIZE }} />
                        Odkaz na stránky školy
                    </a>
                    <p className="modal-block__desc">
                        - Studoval jsem obor <strong>IT</strong>, zaměřený na{' '}
                        <strong>programování</strong> a <strong>správu sítí</strong>...
                    </p>
                </div>
            </div>

            <div
                className={`modal ${activeModal === 'college' ? 'modal-active' : ''}`}
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
                        <OpenInNewIcon sx={{ fontSize: ICON_SIZE }} />
                        Odkaz na stránky školy
                    </a>
                    <p className="modal-block__desc">
                        - Studuji obor <strong>FIT(IT)</strong>, zaměřený především na vývoj{' '}
                        <strong>softwarových řešení</strong> od algoritmů a datových struktur, přes{' '}
                        <strong>umělou inteligenci</strong> až po softwarové inženýrství. <br />{' '}
                        <br />- Dále se věnuje <strong>kybernetické bezpečnosti</strong>, vestavným
                        systémům a <strong>IoT</strong>, digitálnímu zpracování signálu a obrazu,
                        telekomunikačním a síťovým technologiím...
                    </p>
                </div>
            </div>

            <div
                className={`modal ${activeModal === 'commity' ? 'modal-active' : ''}`}
                id="commity-modal-box"
                onClick={handleOverlayClick}
            >
                <div className="commity-modal-box-block modal-block" onClick={stopClick}>
                    <h3 className="modal-block__title">Commity</h3>
                    <a
                        target="_blank"
                        href="https://commity.cz"
                        className="modal-block__link"
                        rel="noreferrer"
                    >
                        <OpenInNewIcon sx={{ fontSize: ICON_SIZE }} />
                        Odkaz na stránky Commity
                    </a>
                    <p className="modal-block__desc">
                        - Pracoval jsem primárně na <strong>frontendu</strong> webových aplikací
                        (JSX, TSX, React). <br />
                        <br />- Také jsem si sáhl na práci s daty v <strong>Metabase</strong> (SQL
                        dotazy) a na práci s <strong>API</strong> (REST, Postman). <br />
                        <br />- V rámci práce jsem se podílel na vývoji a údržbě webových aplikací
                        pro naše klienty. <br />
                        <br />- Měl jsem možnost pracovat na různých projektech, které mi umožnily
                        rozvíjet své dovednosti v oblasti <strong>programování</strong>,{' '}
                        <strong>komunikace v týmu</strong>, <strong>organizace práce</strong> a{' '}
                        <strong>time managementu</strong>...
                    </p>
                </div>
            </div>
        </>
    );
};

export default Modals;
