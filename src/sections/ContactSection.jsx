import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function ContactSection() {
  const { contact } = homeContent;

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (wire this to your API/CMS).');
  };

  return (
    <section id="contact-us" className="th-contact py-5">
      <Container className="section-title text-center" data-aos="fade-up">
        <div className="text-secondary fw-medium">Contact Us</div>
        <h3 className="mt-2">{contact.heading}</h3>
        <p className="mb-0">{contact.description}</p>
      </Container>

      <Container className="mt-4 mt-lg-5">
        <Row className="g-4 g-lg-5 align-items-start">
          <Col xs={12} lg={5}>
            <div className="th-info-list">
              {contact.infoItems.map((it) => (
                <div className="th-info-item" key={it.label} data-aos="fade-up" data-aos-delay="100">
                  <div className={`th-icon th-icon-${it.label.toLowerCase()}`}>
                    <i className={it.icon} />
                  </div>
                  <div className="th-info-text">
                    <div className="th-info-label">{it.label}</div>
                    <div className="th-info-value">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="th-map-placeholder mt-4" data-aos="fade-up" data-aos-delay="150">
              <iframe
                title="School Location"
                src={contact.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <div className="th-form-wrap" data-aos="fade-up" data-aos-delay="200">
              <Form onSubmit={onSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Label className="th-label">Your Name</Form.Label>
                    <Form.Control className="th-input" name="name" required />
                  </Col>
                  <Col md={6}>
                    <Form.Label className="th-label">Your Email</Form.Label>
                    <Form.Control className="th-input" type="email" name="email" required />
                  </Col>
                  <Col xs={12}>
                    <Form.Label className="th-label">Subject</Form.Label>
                    <Form.Control className="th-input" name="subject" required />
                  </Col>
                  <Col xs={12}>
                    <Form.Label className="th-label">Message</Form.Label>
                    <Form.Control as="textarea" className="th-textarea" rows={6} name="message" required />
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" className="btn-pill-soft px-5 py-2 rounded-pill" variant="light">
                      <span className="text-primary fw-semibold">Send Message</span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
