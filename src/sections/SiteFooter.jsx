import { Col, Container, Row } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function SiteFooter() {
  const { footer } = homeContent;

  return (
    <footer className="th-footer">
      <Container className="py-5">
        <Row className="g-4">
          <Col lg={4}>
            <h3 className="th-footer-brand fw-semibold">{footer.brand}</h3>
            {footer.tagline ? <p className="th-footer-tagline mb-0">{footer.tagline}</p> : null}

            <div className="th-social mt-3">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x" /></a>
              <a href="#" aria-label="YouTube"><i className="bi bi-youtube" /></a>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <h4 className="th-footer-title">Quick Links</h4>
            <ul className="th-footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#cultural-activities">Activities</a></li>
            </ul>
          </Col>

          <Col md={6} lg={4}>
            <h4 className="th-footer-title">Resources</h4>
            <ul className="th-footer-links">
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Parent Resources</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">News &amp; Events</a></li>
            </ul>
          </Col>
        </Row>

        <div className="th-footer-bottom text-center mt-4 pt-4">
          <div className="th-footer-copy">{footer.copyright || 'All rights reserved.'}</div>
        </div>
      </Container>
    </footer>
  );
}
