import React from 'react';

// Atoms (Path: Up to src -> components -> atoms)
import HeroCanvas from '../components/atoms/HeroCanvas';

// Organisms (Path: Up to src -> components -> organisms)
import HeroSection from '../components/organisms/HeroSection';
import AIWorkspace from '../components/organisms/AIWorkspace';
import NeuralCRM from '../components/organisms/NeuralCRM';
import QuantumAnalytics from '../components/organisms/QuantumAnalytics';
import NexusTasker from '../components/organisms/NexusTasker';
import AppShowcase from '../components/organisms/AppShowcase';
import RetailPOS from '../components/organisms/RetailPOS';
import LiveStream from '../components/organisms/LiveStream';
import IntegrationMesh from '../components/organisms/IntegrationMesh';
import ProcessHub from '../components/organisms/ProcessHub';
import AboutUs from '../components/organisms/AboutUs';
import FAQSection from '../components/organisms/FAQSection';
import BlogGrid from '../components/organisms/BlogGrid';
import TierArchitect from '../components/organisms/TierArchitect';
import SecurePortal from '../components/organisms/SecurePortal';
import NexusContact from '../components/organisms/NexusContact';

const Home = () => {
    return (
        <>
            <HeroCanvas />
            <HeroSection />
            <AIWorkspace />
            <NeuralCRM />
            <QuantumAnalytics />
            <NexusTasker />
            <AppShowcase />
            <RetailPOS />
            <LiveStream />
            <IntegrationMesh />
            <ProcessHub />
            <AboutUs />
            <FAQSection />
            <BlogGrid />
            <TierArchitect />
            <SecurePortal />
            <NexusContact />
        </>
    );
};

export default Home;