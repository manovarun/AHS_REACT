import { Button, Container } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function HeroSection() {
  const { hero } = homeContent;

  return (
    <section id="hero" className="hero section dark-background">
      <Container data-aos="fade-up" data-aos-delay="50">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">{hero.titleTamil}</h2>
            <h3 data-aos="fade-up" data-aos-delay="150">{hero.titleEnglish}</h3>
            <p className="mt-3" data-aos="fade-up" data-aos-delay="200">{hero.description}</p>

            <div className="mt-4" data-aos="fade-up" data-aos-delay="250">
              <Button as="a" href={hero.primaryCta.href} className="btn-hero me-3 rounded-5" variant="primary">
                {hero.primaryCta.label}
              </Button>
              <Button as="a" href={hero.secondaryCta.href} className="ms-3 rounded-5" variant="light">
                <span className="text-primary">{hero.secondaryCta.label}</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
