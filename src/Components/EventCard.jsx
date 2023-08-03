import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.event_name} className="event-image" />
      <div className="event-details">
        <h3 className="event-name">{event.event_name}</h3>
        <p className="event-date">Date: {event.date}</p>
        <p className="event-location">Location: {event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;
