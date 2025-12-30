import { Button, Container } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function AcademicsSection() {
  const { academics } = homeContent;

  return (
    <section
      id="academics"
      className="services section light-background bg-academics"
    >
      <Container className="section-title" data-aos="fade-up">
        <Button
          type="button"
          variant="light"
          className="rounded-pill px-5 py-2 shadow-sm btn-pill-soft fs-5 mb-3"
          style={{
            background: '#ffffff',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            color: '#7b2b2b',
          }}
        >
          {academics.pillLabel}
        </Button>

        <h3 className="text-primary my-3 fw-semibold">{academics.heading}</h3>
        <p>{academics.description}</p>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <div className="services-grid">
          <div className="service-item" data-aos="fade-up" data-aos-delay="150">
            <div className="service-number">{academics.services[0].number}</div>

            <span className="circle-bg circle-bg-1">
              <img
                src={`/${academics.services[0].iconSrc}`}
                alt={academics.services[0].iconAlt}
              />
            </span>

            <h4 className="text-primary my-3">{academics.services[0].title}</h4>

            <span className="badge rounded-pill py-2 px-3">
              {academics.services[0].age}
            </span>

            <p>{academics.services[0].desc}</p>

            <hr />

            <a href={academics.services[0].cta.href} className="service-cta">
              <span>{academics.services[0].cta.label}</span>
              <i className="bi bi-arrow-right" />
            </a>
          </div>

          <div
            className="service-item service-item-2"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="service-number">{academics.services[1].number}</div>

            <span className="circle-bg circle-bg-2">
              <img
                src={`/${academics.services[1].iconSrc}`}
                alt={academics.services[1].iconAlt}
              />
            </span>

            <h4 className="text-primary my-3">{academics.services[1].title}</h4>

            <span className="badge rounded-pill py-2 px-3">
              {academics.services[1].age}
            </span>

            <p>{academics.services[1].desc}</p>

            <hr />

            <a href={academics.services[1].cta.href} className="service-cta">
              <span>{academics.services[1].cta.label}</span>
              <i className="bi bi-arrow-right" />
            </a>
          </div>

          <div
            className="service-item service-item-3"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="service-number">{academics.services[2].number}</div>

            <span className="circle-bg circle-bg-3">
              <img
                src={`/${academics.services[2].iconSrc}`}
                alt={academics.services[2].iconAlt}
              />
            </span>

            <h4 className="text-primary my-3">{academics.services[2].title}</h4>

            <span className="badge rounded-pill py-2 px-3">
              {academics.services[2].age}
            </span>

            <p>{academics.services[2].desc}</p>

            <hr />

            <a href={academics.services[2].cta.href} className="service-cta">
              <span>{academics.services[2].cta.label}</span>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </Container>

      <div className="call-to-action pt-0">
        <Container data-aos="fade-up" data-aos-delay="100">
          <div className="cta-main" data-aos="fade-up" data-aos-delay="300">
            <div className="row align-items-center g-2">
              <div className="col-lg-12">
                <div className="achievements-grid">
                  {academics.achievements.map((a, idx) => (
                    <div
                      className="achievement-item"
                      key={`${a.value}-${idx}`}
                      data-aos="zoom-in"
                      data-aos-delay={400 + idx * 50}
                    >
                      <div className="achievement-info">
                        <h3 className="text-primary fw-medium">{a.value}</h3>
                        <span className="text-dark d-block my-3">
                          {a.label}
                        </span>
                        <span className="text-success d-block">
                          {a.labelTamil}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
