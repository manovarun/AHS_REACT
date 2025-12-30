import { useEffect, useMemo, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
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
  const [expanded, setExpanded] = useState(false);

  const onNavClick = (href) => (e) => {
    if (!href?.startsWith('#')) return;

    e.preventDefault();
    const id = href.slice(1);
    smoothScrollToId(id);
    setExpanded(false);

    window.history.replaceState(null, '', href);
  };

  return (
    <Navbar
      id="header"
      expand="xl"
      fixed="top"
      expanded={expanded}
      onToggle={(next) => setExpanded(next)}
      className="header d-flex align-items-center"
    >
      <Container
        fluid
        className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
      >
        <Navbar.Brand
          href="#home"
          onClick={onNavClick('#home')}
          className="logo d-flex align-items-center"
        >
          <span className="me-2">
            <img
              src={`/${homeContent.brand.logoSrc}`}
              alt="AHS"
              className="img-fluid"
            />
          </span>
          <h1 className="sitename m-0">{homeContent.brand.abbr}</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navmenu" className="border-0">
          <i className="bi bi-list" />
        </Navbar.Toggle>

        <Navbar.Collapse id="navmenu" className="justify-content-center">
          <Nav as="ul" className="navmenu">
            {links.map((l) => {
              const isActive =
                l.href.startsWith('#') && l.href.slice(1) === activeId;
              return (
                <Nav.Item as="li" key={l.label}>
                  <Nav.Link
                    href={l.href}
                    onClick={onNavClick(l.href)}
                    className={isActive ? 'active' : undefined}
                  >
                    {l.label}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>

        <Button
          as="a"
          href={homeContent.applyNow.href}
          className="btn-getstarted d-none d-sm-block"
          variant="primary"
        >
          {homeContent.applyNow.label}
        </Button>
      </Container>
    </Navbar>
  );
}
