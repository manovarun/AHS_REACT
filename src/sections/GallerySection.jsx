import { Container } from 'react-bootstrap';
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
        <div className="text-secondary fw-medium">Gallery</div>
        <h3 className="mt-2">{gallery.heading}</h3>
        <p className="mb-0">{gallery.description}</p>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
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
            {gallery.items.map((g, idx) => (
              <a
                key={g.href}
                className="tile"
                href={`/${g.href}`}
                data-sub-html={`<h6 class='text-white'>${g.caption}</h6>`}
                data-thumb={`/${g.thumb}`}
                data-aos="zoom-in"
                data-aos-delay={100 + idx * 60}
              >
                <img src={`/${g.thumb}`} alt={g.caption} loading="lazy" />
              </a>
            ))}
          </div>
        </LightGallery>
      </Container>
    </section>
  );
}
