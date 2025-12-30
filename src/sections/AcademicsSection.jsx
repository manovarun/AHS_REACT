import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function AcademicsSection() {
  const { academics } = homeContent;

  return (
    <section id="academics" className="services section light-background bg-academics">
      <Container className="section-title" data-aos="fade-up">
        <div className="text-secondary fw-medium">{academics.subheading}</div>
        <h3 className="mt-2">{academics.heading}</h3>
        <p className="mb-0">{academics.description}</p>
      </Container>

      <Container>
        <Row className="services-grid gy-4">
          {academics.services.map((s, idx) => (
            <Col lg={4} md={6} key={s.number}>
              <Card
                className={`${idx === 1 ? 'service-item-2' : idx === 2 ? 'service-item-3' : 'service-item'} shadow-sm`}
                data-aos="fade-up"
                data-aos-delay={150 + idx * 50}
              >
                <Card.Body>
                  <div className="service-number">{s.number}</div>
                  <span className={`circle-bg circle-bg-${idx + 1}`} />
                  <h4 className="text-primary my-3">{s.title}</h4>
                  <span className="badge rounded-pill py-2 px-3">{s.age}</span>
                  <p className="mt-3">{s.desc}</p>
                  <hr />
                  <a className="service-cta" href={s.cta.href}>
                    <span>{s.cta.label}</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="call-to-action mt-5" data-aos="fade-up" data-aos-delay="250">
          <div className="achievements-grid">
            {academics.achievements.map((a, idx) => (
              <div className="achievement-item" key={idx} data-aos="zoom-in" data-aos-delay={300 + idx * 50}>
                <div className="achievement-info">
                  <h3 className="text-primary fw-medium">{a.value}</h3>
                  <span>{a.label}</span>
                  {a.labelTamil ? <span className="text-success d-block">{a.labelTamil}</span> : null}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Button as="a" href="#!" className="btn-pill-soft px-5 py-2 rounded-pill" variant="light">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
