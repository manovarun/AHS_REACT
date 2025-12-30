import { Button, Container } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function HeroSection() {
  const { hero } = homeContent;

  return (
    <section id="hero" className="hero section dark-background">
      <div className="hero-video-container">
        <video autoPlay muted loop playsInline>
          <source src={`/${hero.videoSrc}`} type="video/mp4" />
          {hero.videoFallbackText ||
            'Your browser does not support the video tag.'}
        </video>
        <div className="hero-overlay" />
      </div>

      <Container className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="hero-content">
              <div>
                <h1
                  className="text-primary fw-semibold"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {hero.titleTamil}
                </h1>

                <h2
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-success"
                >
                  {hero.titleEnglish}
                </h2>

                <h3
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="text-dark my-4"
                >
                  {hero.description}
                </h3>

                <div
                  className="hero-actions mt-5"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Button
                    as="a"
                    href={hero.primaryCta.href}
                    variant="primary"
                    className="btn-hero me-3 rounded-5"
                  >
                    {hero.primaryCta.label}
                  </Button>

                  <Button
                    as="a"
                    href={hero.secondaryCta.href}
                    variant="light"
                    className="text-primary ms-3 rounded-5"
                  >
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
