import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import AcademicsSection from '../sections/AcademicsSection.jsx';
import ActivitiesSection from '../sections/ActivitiesSection.jsx';
import GallerySection from '../sections/GallerySection.jsx';
import CalendarSection from '../sections/CalendarSection.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import SiteFooter from '../sections/SiteFooter.jsx';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AcademicsSection />
      <ActivitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <CalendarSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
