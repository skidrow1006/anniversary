import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHeart, FaStar, FaMapMarkerAlt, FaCamera, FaRing } from 'react-icons/fa';
import './Memories.css';

const memories = [
  {
    date: "The Beginning",
    title: "We First Met",
    subtitle: "Where it all started",
    description: "The moment that changed everything. Add your story here.",
    icon: <FaHeart />,
    type: "milestone",
    color: "#e91e8c"
  },
  {
    date: "Our First Date",
    title: "Our First Date",
    subtitle: "A night to remember",
    description: "Butterflies, laughter, and the start of something beautiful.",
    icon: <FaStar />,
    type: "date",
    color: "#e50914"
  },
  {
    date: "First Adventure",
    title: "First Trip Together",
    subtitle: "Somewhere special",
    description: "Our first adventure as a couple. The world felt bigger and more beautiful with you.",
    icon: <FaMapMarkerAlt />,
    type: "adventure",
    color: "#9c27b0"
  },
  {
    date: "A Special Moment",
    title: "A Memory to Cherish",
    subtitle: "Captured forever",
    description: "One of those moments you want to hold on to forever. Add yours here.",
    icon: <FaCamera />,
    type: "memory",
    color: "#e91e8c"
  },
  {
    date: "Today",
    title: "Still Going Strong",
    subtitle: "Our love keeps growing",
    description: "Every day with you is a gift. Here's to many more chapters.",
    icon: <FaRing />,
    type: "milestone",
    color: "#e50914"
  }
];

const iconColors: Record<string, string> = {
  milestone: "#e50914",
  date: "#9c27b0",
  adventure: "#673ab7",
  memory: "#e91e8c"
};

const Memories: React.FC = () => {
  return (
    <div className="memories-page">
      <div className="memories-header">
        <h2 className="memories-title">Our Story</h2>
        <p className="memories-subtitle">Every chapter of us, told in moments</p>
      </div>
      <VerticalTimeline>
        {memories.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            contentStyle={{ background: 'rgba(30,30,30,0.95)', color: '#fff', border: '1px solid rgba(229,9,20,0.3)', borderRadius: '12px' }}
            contentArrowStyle={{ borderRight: `7px solid rgba(229,9,20,0.5)` }}
            iconStyle={{ background: iconColors[item.type] || '#e50914', color: '#fff' }}
            icon={item.icon}
          >
            <h3 style={{ color: '#fff', margin: '0 0 4px' }}>{item.title}</h3>
            <h4 style={{ color: '#e91e8c', margin: '0 0 10px', fontWeight: 400 }}>{item.subtitle}</h4>
            <p style={{ color: '#ccc', fontSize: '0.9rem', margin: 0 }}>{item.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: '#e50914', color: '#fff' }}
          icon={<FaHeart />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Memories;
