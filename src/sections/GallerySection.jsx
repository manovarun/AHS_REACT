import { Button, Container } from 'react-bootstrap';
import LightGallery from 'lightgallery/react';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';

import { homeContent } from '../content/homeContent.js';

export default function GallerySection() {
  const { gallery } = homeContent;

  return (
    <section id="gallery" className="section bg-academics">
      <Container className="section-title" data-aos="fade-up">
        <Button
          type="button"
          variant="light"
          className="btn btn-light rounded-pill px-5 py-2 shadow-sm btn-pill-soft fs-5 mb-3"
          style={{
            background: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            color: '#7b2b2b',
          }}
        >
          {gallery.pillLabel || 'Gallery'}
        </Button>

        <h3 className="text-primary my-3 fw-semibold">{gallery.heading}</h3>
        <p>{gallery.description}</p>
      </Container>

      <Container className="py-4">
        <LightGallery
          speed={450}
          plugins={[lgZoom, lgThumbnail, lgAutoplay]}
          selector="a.tile"
          mode="lg-fade"
          loop
          autoplay
          pause={3200}
        >
          <div id="tileGallery" className="tile-gallery">
            {gallery.items.map((g, idx) => {
              const delay = idx * 80;

              return (
                <a
                  key={`${g.href}-${idx}`}
                  className="tile"
                  href={`/${g.href}`}
                  data-sub-html={`<h6 class='text-white'>${g.caption}</h6>`}
                  data-aos="zoom-in"
                  data-aos-delay={delay}
                >
                  <img
                    src={`/${g.thumb || g.href}`}
                    alt={g.alt || g.caption}
                    loading="lazy"
                  />
                  <span className="tile-overlay">
                    <i className="bi bi-arrows-fullscreen" />
                  </span>
                </a>
              );
            })}
          </div>
        </LightGallery>

        <div className="text-center">
          <Button
            as="a"
            href={gallery.cta?.href || '#!'}
            variant="primary"
            className="px-5 py-3 mt-3 rounded-pill fs-5"
          >
            {gallery.cta?.label || 'View Full Gallery'}
          </Button>
        </div>
      </Container>
    </section>
  );
}
