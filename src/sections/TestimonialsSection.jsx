import { Card, Col, Container, Row } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function TestimonialsSection() {
  const { testimonials } = homeContent;

  return (
    <section id="testimonials" className="testimonials th-testimonials position-relative text-white">
      <div className="th-testimonials-bg" aria-hidden="true" />
      <Container className="th-testimonials-content position-relative">
        <div className="th-testimonials-head text-center">
          <h3 className="fw-semibold">{testimonials.heading}</h3>
          <p className="fs-5 mb-0">Real experiences from parents, students, and alumni</p>
        </div>

        <Row className="g-4 mt-4 mt-lg-5 align-items-stretch">
          {testimonials.items.map((t, idx) => (
            <Col key={t.name} md={6} lg={4}>
              <Card className="th-card h-100" data-aos="fade-up" data-aos-delay={150 + idx * 50}>
                <Card.Body>
                  <div className="th-quote-badge">
                    <span className="th-quote-mark">“</span>
                    <span className="th-pill">Testimonial</span>
                  </div>

                  <div className="th-quote mt-3">{t.quote}</div>

                  <div className="th-divider my-3" />

                  <div className="th-profile d-flex align-items-center gap-3">
                    <img className="th-avatar" src={`/${t.avatar}`} alt={t.name} loading="lazy" />
                    <div className="th-profile-meta">
                      <div className="th-name">{t.name}</div>
                      <div className="th-role">{t.role}</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
