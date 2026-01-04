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
      <Container className="py-3 py-lg-4">
        <div className="container section-title" data-aos="fade-up">
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
            {contact.pillLabel || 'Contact Us'}
          </Button>

          <h3 className="text-primary my-3 fw-semibold">{contact.heading}</h3>
          <p>{contact.description}</p>
        </div>

        <Row className="g-5 mt-2 mt-lg-2 align-items-start">
          <Col xs={12} lg={5}>
            <h4 className="th-col-title mb-4 fw-medium">
              {contact.leftTitle || 'Visit Us'}
            </h4>

            <div className="th-info-list">
              {contact.infoItems.map((it) => (
                <div className="th-info-item" key={it.key || it.label}>
                  <div className={`th-icon ${it.iconClass}`}>
                    <i className={it.icon} />
                  </div>

                  <div className="th-info-text">
                    <div className="th-info-label">{it.label}</div>
                    {it.labelTamil ? (
                      <div className="th-info-label text-success">
                        {it.labelTamil}
                      </div>
                    ) : null}
                    <div className="th-info-value">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="th-map-placeholder mt-4" aria-hidden="true">
              <iframe
                src={contact.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <h4 className="th-col-title mb-4 fw-medium">
              {contact.rightTitle || 'Send us a Message'}
            </h4>

            <Form className="th-form" noValidate onSubmit={onSubmit}>
              <div className="mb-4">
                <Form.Label className="form-label th-label" htmlFor="thName">
                  {contact.form?.nameLabel || 'Name / பெயர்'}
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control th-input"
                  id="thName"
                  name="name"
                  placeholder={contact.form?.namePlaceholder || 'Your name'}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="mb-4">
                <Form.Label className="form-label th-label" htmlFor="thEmail">
                  {contact.form?.emailLabel || 'Email / மின்னஞ்சல்'}
                </Form.Label>
                <Form.Control
                  type="email"
                  className="form-control th-input"
                  id="thEmail"
                  name="email"
                  placeholder={
                    contact.form?.emailPlaceholder || 'your@email.com'
                  }
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mb-4">
                <Form.Label className="form-label th-label" htmlFor="thMessage">
                  {contact.form?.messageLabel || 'Message / செய்தி'}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="form-control th-input th-textarea"
                  id="thMessage"
                  name="message"
                  placeholder={
                    contact.form?.messagePlaceholder || 'Your message...'
                  }
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="btn th-btn w-100">
                {contact.form?.submitLabel || 'Send Message / செய்தி அனுப்பு'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
