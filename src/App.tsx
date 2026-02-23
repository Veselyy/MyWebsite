import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AboutMeSection from './components/AboutMeSection';
import EduWorkBrigSection from './components/EduWorkBrigSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import Modals from './components/Modals';

export type ModalId = 'hs' | 'college' | 'commity' | 'pi1' | 'pi2' | 'pi3' | 'pi4' | null;

const App = () => {
    const [activeModal, setActiveModal] = useState<ModalId>(null);

    // blokace scrollu
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [activeModal]);

    const handleOpenModal = (id: ModalId) => setActiveModal(id);
    const handleCloseModal = () => setActiveModal(null);

    return (
        <main>
            <Navbar />
            <AboutMeSection />
            <EduWorkBrigSection onOpenModal={handleOpenModal} />
            <ProjectsSection onOpenModal={handleOpenModal} />
            <Footer />
            <Modals activeModal={activeModal} onClose={handleCloseModal} />
        </main>
    );
};

export default App;
