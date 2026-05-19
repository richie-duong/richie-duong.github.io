import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import TechnicalSkills from "../sections/TechnicalSkills";
import ProjectsSection from "../sections/ProjectsSections";
import DesignShowcaseSection from "../sections/DesignShowcaseSection";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
    return (
        <>
            <div className="bg-[#070B14] text-white overflow-x-hidden">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <TechnicalSkills />
                <ProjectsSection />
                <DesignShowcaseSection />
                <ContactSection />
            </div>
        </>
    )
}