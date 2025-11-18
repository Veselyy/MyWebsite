import type { ModalId } from "../App";

interface Props {
    onOpenModal: (id: ModalId) => void;
}

const EduWorkBrigSection: React.FC<Props> = ({ onOpenModal }) => {
    return (
        <section id="edu-work-brig">
            <div className="container">
                <h2 className="edu-work-brig__title">Vzdělání, práce a brigády v IT</h2>
                <div className="edu-work-brig-slider">
                    <div
                        className="edu-work-brig-slider-item"
                        id="hs"
                        onClick={() => onOpenModal("hs")}
                    >
                        <h3 className="edu-work-brig-slider-item__title">Střední škola</h3>
                        <p className="edu-work-brig-slider-item__date">2020 - 2024</p>
                    </div>
                    <div
                        className="edu-work-brig-slider-item"
                        id="college"
                        onClick={() => onOpenModal("college")}
                    >
                        <h3 className="edu-work-brig-slider-item__title">Vysoká škola</h3>
                        <p className="edu-work-brig-slider-item__date">2024...</p>
                    </div>
                    <div
                        className="edu-work-brig-slider-item"
                        id="brigade"
                        onClick={() => onOpenModal("commity")}
                    >
                        <h3 className="edu-work-brig-slider-item__title">Brigáda u Commity</h3>
                        <p className="edu-work-brig-slider-item__date">01.06.2024 - 10.09.2024</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EduWorkBrigSection;