import { Button, Col, Container, Row } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function ActivitiesSection() {
  const { activities } = homeContent;

  return (
    <section id="cultural-activities" className="team section">
      <Container className="section-title" data-aos="fade-up">
        <Button
          type="button"
          variant="light"
          className="btn btn-light rounded-pill px-5 py-2 shadow-sm btn-pill-soft fs-5 mb-3"
          style={{
            background: '#fff9f2',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            color: '#7b2b2b',
          }}
        >
          {activities.pillLabel}
        </Button>

        <h3 className="text-primary my-3 fw-semibold">{activities.heading}</h3>
        <p>{activities.description}</p>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-5">
          {activities.items.map((it, idx) => (
            <Col
              key={`${it.title}-${idx}`}
              lg={4}
              md={6}
              data-aos={it.colAos}
              data-aos-delay={it.colDelay}
            >
              <div
                className="team-member"
                {...(it.memberAos ? { 'data-aos': it.memberAos } : {})}
                {...(it.memberDelay
                  ? { 'data-aos-delay': it.memberDelay }
                  : {})}
              >
                <div className="member-img position-relative">
                  <img
                    src={`/${it.img}`}
                    className="img-fluid"
                    alt={it.alt || ''}
                  />

                  <div
                    className="member-info px-3 position-absolute bottom-0 w-100 text-start z-1"
                    data-aos="zoom-in"
                    data-aos-delay={it.infoDelay}
                  >
                    <h4 className="text-white">{it.title}</h4>
                    <h5 className="text-secondary">{it.titleTamil}</h5>
                  </div>
                </div>
              </div>
            </Col>
          ))}

          <Col lg={12} className="text-center">
            <Button
              as="a"
              href={activities.cta.href}
              variant="success"
              className="px-5 py-3 mt-3 rounded-pill fs-5"
            >
              {activities.cta.label}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
