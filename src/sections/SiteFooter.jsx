import { Col, Container, Row } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

export default function SiteFooter() {
  const { footer } = homeContent;

  const year = footer.year ?? new Date().getFullYear();

  return (
    <footer className="th-footer">
      <Container className="py-5">
        <Row className="g-5 align-items-start">
          <Col xs={12} lg={5}>
            <div className="d-flex align-items-start gap-3">
              <div className="th-footer-logo" aria-hidden="true">
                <i className={footer.logoIconClass || 'bi bi-bell'} />
              </div>

              <div>
                <h3 className="th-footer-brand fw-semibold">
                  {footer.brand || 'Tamil Heritage School'}
                </h3>
                <div className="th-footer-brand-ta">
                  {footer.brandTamil || 'தமிழ் பாரம்பரிய பள்ளி'}
                </div>
              </div>
            </div>

            <p className="th-footer-desc mt-4 mb-4">
              {footer.description ||
                'Dedicated to preserving Tamil culture and language while providing world-class education for future generations.'}
            </p>

            <p className="th-footer-desc-ta mb-4">
              {footer.descriptionTamil ||
                'தமிழ் கலாச்சாரம் மற்றும் மொழியை பாதுகாப்பதில் அர்ப்பணிப்புடன்.'}
            </p>

            <div className="th-footer-social">
              {(footer.socials || []).map((s) => (
                <a
                  key={s.label}
                  href={s.href || '#'}
                  className="th-social-btn"
                  aria-label={s.label}
                  target={s.openInNewTab ? '_blank' : undefined}
                  rel={s.openInNewTab ? 'noreferrer' : undefined}
                >
                  <i className={s.iconClass} />
                </a>
              ))}
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <h5 className="th-footer-title">
              {footer.quickLinksTitle || 'Quick Links'}
            </h5>
            <ul className="th-footer-links">
              {(footer.quickLinks || []).map((l) => (
                <li key={l.label}>
                  <a href={l.href || '#'}>{l.label}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} lg={4}>
            <h5 className="th-footer-title">
              {footer.resourcesTitle || 'Resources'}
            </h5>
            <ul className="th-footer-links">
              {(footer.resources || []).map((l) => (
                <li key={l.label}>
                  <a href={l.href || '#'}>{l.label}</a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <div className="th-footer-divider mt-5">
          <span className="th-footer-dots" aria-hidden="true">
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="dot dot-yellow" />
          </span>
        </div>

        <div className="text-center th-footer-bottom mt-4">
          <div className="th-footer-copy">
            © {year} {footer.brand || 'Tamil Heritage School'}.{' '}
            {footer.copyrightText || 'All rights reserved.'}
          </div>

          <a
            className="th-footer-bottom-link"
            href={footer.bottomTamilLink?.href || '#'}
          >
            {footer.bottomTamilLink?.label ||
              'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை'}
          </a>
        </div>
      </Container>
    </footer>
  );
}
