import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MissionSection from '../components/MissionSection';
import ServicesSection from '../components/ServicesSection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ThankYouSection from '../components/ThankYouSection';

const Home = () => {
    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <HeroSection />
            <AboutSection />
            <MissionSection />
            <ServicesSection />
            <HowWeWorkSection />
            <WhyChooseUsSection />
            <ThankYouSection />
        </Box>
    );
};

export default Home;
