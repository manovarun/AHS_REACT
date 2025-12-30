import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

function InlineSvg({ svg }) {
  return <span dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default function AboutSection() {
  const { about } = homeContent;

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Row className="align-items-center">
          <Col
            lg={6}
            className="order-1 order-lg-1"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src={`/${about.imageSrc}`}
              className="photo-frame__img img-fluid"
              alt={about.imageAlt || 'Campus'}
            />
          </Col>

          <Col
            lg={6}
            className="order-2 order-lg-2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="content ps-3">
              <a
                href={about.tagHref || '#!'}
                className="btn btn-landing rounded-5"
              >
                {about.tagLabel || 'About Us'}
              </a>

              <h3 className="section-heading mb-4 text-primary fw-medium">
                {about.heading}
              </h3>

              <p className="lead-text mb-3">{about.description}</p>

              {about.features.map((f) => (
                <Card key={f.title} className="border-0 bg-transparent">
                  <Card.Body className="d-flex align-items-center gap-4 py-3 ps-0">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '84px',
                        height: '84px',
                        background: f.iconBg,
                      }}
                    >
                      <InlineSvg svg={f.svg} />
                    </div>

                    <div>
                      <h3 className="section-heading mb-3 text-primary fw-medium">
                        {f.title}
                      </h3>
                      <p className="lead-text mb-2">{f.desc}</p>
                    </div>
                  </Card.Body>
                </Card>
              ))}

              <a
                href={about.cta?.href || '#!'}
                className="btn btn-primary px-5 py-3 mt-3 rounded-pill fs-5"
              >
                {about.cta?.label || 'Learn More About Us'}
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
