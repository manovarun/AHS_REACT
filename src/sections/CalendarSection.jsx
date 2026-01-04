import { useEffect, useMemo, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';
import { homeContent } from '../content/homeContent.js';

function fmtLong(iso) {
  if (!iso) return '';
  const d = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export default function CalendarSection() {
  const { calendar } = homeContent;

  const [selectedDate, setSelectedDate] = useState(calendar.defaultDate || '');

  const inlineHostRef = useRef(null);
  const eventsRef = useRef(null);

  const sortedEvents = useMemo(() => {
    const list = Array.isArray(calendar.events) ? calendar.events : [];
    return [...list].sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [calendar.events]);

  useEffect(() => {
    if (!selectedDate) return;
    const el = eventsRef.current?.querySelector?.(
      `[data-date="${selectedDate}"]`
    );
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [selectedDate]);

  return (
    <section className="th-cal py-3">
      <Container className="py-3 py-lg-4">
        <div className="text-center mx-auto th-cal-head">
          <h3 className="th-cal-title mb-2 text-primary fw-semibold">
            {calendar.heading}
          </h3>
          <p className="th-cal-subtitle mb-0">{calendar.description}</p>
        </div>

        <Row className="g-4 g-lg-5 mt-4 mt-lg-5 align-items-start">
          <Col xs={12} lg={5}>
            <div className="th-cal-panel h-100">
              <div className="d-flex align-items-center gap-2 th-cal-panel-title text-primary">
                <i className="bi bi-calendar-event th-cal-icon" />
                <span>Select Date</span>
              </div>

              <div className="th-datepicker-wrap mt-3">
                <Flatpickr
                  value={selectedDate || undefined}
                  options={{
                    inline: true,
                    dateFormat: 'Y-m-d',
                    defaultDate: selectedDate || undefined,
                  }}
                  onChange={(_, dateStr) => setSelectedDate(dateStr)}
                  className="form-control d-none"
                  id="thCalendarPicker"
                  onReady={(_, __, instance) => {
                    const host = inlineHostRef.current;
                    const cal = instance?.calendarContainer;
                    if (!host || !cal) return;

                    if (cal.parentElement !== host) {
                      host.innerHTML = '';
                      host.appendChild(cal);
                    }
                  }}
                />

                <div id="thCalendarInline" ref={inlineHostRef} />
              </div>

              <div
                className="th-cal-selected mt-3"
                id="thSelectedDateLabel"
                aria-live="polite"
              >
                {selectedDate ? `Selected: ${fmtLong(selectedDate)}` : ''}
              </div>
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <div className="d-flex align-items-center gap-2 th-cal-right-title mb-3 text-p">
              <i className="bi bi-calendar-check th-cal-icon" />
              <span>Upcoming Events</span>
            </div>

            <div className="th-events" id="thEventsList" ref={eventsRef}>
              {sortedEvents.map((ev, idx) => {
                const isSelected = selectedDate && ev.date === selectedDate;

                return (
                  <div
                    key={`${ev.date}-${ev.title}-${idx}`}
                    className={`th-event-card ${
                      isSelected ? 'is-selected-date' : ''
                    }`}
                    data-date={ev.date}
                    data-aos="fade-up"
                    data-aos-delay={200 + idx * 60}
                  >
                    <h5 className="th-event-title">{ev.title}</h5>
                    <div className="th-event-date">{fmtLong(ev.date)}</div>
                    <p className="th-event-desc">{ev.desc}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
