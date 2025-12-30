import { useEffect, useMemo, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';
import { homeContent } from '../content/homeContent.js';

function fmtLong(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(d);
}

export default function CalendarSection() {
  const { calendar } = homeContent;
  const [selectedDate, setSelectedDate] = useState(calendar.defaultDate);

  const sortedEvents = useMemo(() => {
    return [...calendar.events].sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [calendar.events]);

  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current?.querySelector?.(`[data-date="${selectedDate}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [selectedDate]);

  return (
    <section className="th-cal py-3">
      <Container className="py-3 py-lg-4">
        <div className="th-cal-head text-center">
          <h3 className="fw-semibold">{calendar.heading}</h3>
          <p className="mb-0">{calendar.description}</p>
        </div>

        <Row className="g-4 g-lg-5 mt-4 mt-lg-5 align-items-start">
          <Col xs={12} lg={5}>
            <div className="th-cal-panel h-100">
              <div className="th-cal-title d-flex align-items-center gap-2">
                <i className="bi bi-calendar-event th-cal-icon"></i>
                <span>Select Date</span>
              </div>

              <div className="th-datepicker-wrap mt-3">
                <Flatpickr
                  value={selectedDate}
                  options={{ inline: true, dateFormat: 'Y-m-d' }}
                  onChange={(_, dateStr) => setSelectedDate(dateStr)}
                  className="form-control d-none"
                  id="thCalendarPicker"
                />
              </div>
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <div className="th-events-panel">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div>
                  <div className="th-events-title">Upcoming Events</div>
                  <div className="th-selected-date" id="thSelectedDateLabel">
                    <span className="th-selected">{fmtLong(selectedDate)}</span>
                  </div>
                </div>
              </div>

              <div className="th-events-list mt-3" id="thEventsList" ref={listRef}>
                {sortedEvents.map((ev) => {
                  const isSelected = ev.date === selectedDate;
                  return (
                    <div
                      key={`${ev.date}-${ev.title}`}
                      className={`th-event-card ${isSelected ? 'is-selected-date' : ''}`}
                      data-date={ev.date}
                    >
                      <h5 className="th-event-title">{ev.title}</h5>
                      <div className="th-event-date">{fmtLong(ev.date)}</div>
                      <p className="th-event-desc">{ev.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
