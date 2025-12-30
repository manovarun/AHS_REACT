import { Card, Col, Container, Row } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

function InlineSvg({ svg }) {
  return <span dangerouslySetInnerHTML={{ __html: svg }} />;
}

function parseInlineStyle(styleStr) {
  const out = {};
  (styleStr || '')
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((pair) => {
      const [k, v] = pair.split(':').map((x) => x.trim());
      if (!k || !v) return;
      const key = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      out[key] = v;
    });
  return out;
}

export default function AboutSection() {
  const { about } = homeContent;

  return (
    <section id="about" className="about section">
      <Container data-aos="fade-up" data-aos-delay="50">
        <Row className="align-items-center">
          <Col lg={6} className="order-1 order-lg-1">
            <div className="th-about-artwork" />
          </Col>

          <Col lg={6} className="order-2 order-lg-2">
            <div className="content ps-3">
              <h2 className="mb-3">{about.heading}</h2>
              <p className="mb-4">{about.description}</p>

              {about.features.map((f, idx) => (
                <Card
                  key={f.title}
                  className="border-0 bg-transparent"
                  data-aos="zoom-in"
                  data-aos-delay={150 + idx * 50}
                >
                  <Card.Body className="d-flex align-items-center gap-4 py-3 ps-0">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={parseInlineStyle(f.iconBgStyle)}
                    >
                      <InlineSvg svg={f.svg} />
                    </div>

                    <div>
                      <h3 className="h5 mb-1">{f.title}</h3>
                      <span className="text-muted">{f.desc}</span>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
