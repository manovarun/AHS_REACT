import { useEffect, useMemo, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { homeContent } from '../content/homeContent.js';

function useBodyScrolledClass() {
  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 100);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds.join('|')]);

  return activeId;
}

function smoothScrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.getElementById('header');
  const headerOffset = header ? header.offsetHeight : 0;

  const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export default function SiteHeader() {
  useBodyScrolledClass();

  const links = homeContent.navLinks;
  const sectionIds = useMemo(
    () =>
      links
        .map((l) => (l.href.startsWith('#') ? l.href.slice(1) : null))
        .filter(Boolean),
    [links]
  );

  const activeId = useScrollSpy(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Matches your static template behavior (main.js)
  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', mobileOpen);
    return () => document.body.classList.remove('mobile-nav-active');
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const onNavClick = (href) => (e) => {
    if (!href?.startsWith('#')) {
      closeMobile();
      return;
    }

    e.preventDefault();
    smoothScrollToId(href.slice(1));
    closeMobile();
    window.history.replaceState(null, '', href);
  };

  const tamilHref = homeContent?.language?.tamilHref || '#!';

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <Container
        fluid
        className="container-fluid container-xl position-relative d-flex align-items-center bg-light rounded-2"
      >
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto"
          onClick={onNavClick('#home')}
        >
          <h4 className="sitename m-0">
            <span className="p-2 bg-primary rounded-circle">
              <img
                className="m-0 img-fluid"
                src={`/${homeContent.brand.logoSrc}`}
                alt="AHS"
              />
            </span>
            <span className="text-primary fw-bold">
              {' '}
              {homeContent.brand.abbr}
            </span>
          </h4>
        </a>

        <nav id="navmenu" className="navmenu" aria-label="Primary">
          <ul>
            {links.map((l) => {
              const isActive =
                l.href.startsWith('#') && l.href.slice(1) === activeId;
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={isActive ? 'active' : undefined}
                    onClick={onNavClick(l.href)}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              mobileOpen ? 'bi-x' : 'bi-list'
            }`}
            role="button"
            tabIndex={0}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setMobileOpen((v) => !v);
            }}
          />
        </nav>

        <Button
          as="a"
          href={tamilHref}
          size="sm"
          variant="success"
          className="px-3 ms-3 rounded-4 d-none d-sm-block"
          onClick={closeMobile}
        >
          Tamil
        </Button>

        <a
          className="btn-getstarted d-none d-sm-block"
          href={homeContent.applyNow.href}
          onClick={closeMobile}
        >
          {homeContent.applyNow.label}
        </a>
      </Container>
    </header>
  );
}
