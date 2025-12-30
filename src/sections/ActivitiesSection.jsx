import { Card, Col, Container, Row } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function ActivitiesSection() {
  const { activities } = homeContent;

  return (
    <section id="cultural-activities" className="team section">
      <Container className="section-title" data-aos="fade-up">
        <div className="text-secondary fw-medium">Activities</div>
        <h3 className="mt-2">{activities.heading}</h3>
        <p className="mb-0">{activities.description}</p>
      </Container>

      <Container>
        <Row className="gy-5">
          {activities.items.map((it, idx) => (
            <Col lg={4} md={6} key={it.title} data-aos="fade-up" data-aos-delay={150 + idx * 50}>
              <Card className="team-member shadow-sm border-0 h-100">
                <div className="position-relative">
                  <Card.Img variant="top" src={`/${it.img}`} alt={it.title} className="img-fluid" />
                </div>
                <Card.Body className="text-center">
                  <h4 className="fw-semibold mb-0">{it.title}</h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
