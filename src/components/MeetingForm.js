import React, { useState, useEffect } from 'react';
import { User, FileText, Calendar, Clock } from 'lucide-react';
import './MeetingForm.css';

const MeetingForm = ({ mentor }) => {
  const [name, setName] = useState('');
  const [meetingSummary, setMeetingSummary] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    setAvailableDates(dates);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meeting Scheduled with:', {
      mentor: mentor.name,
      name,
      date,
      timeSlot,
      meetingSummary
    });
    alert(`Meeting scheduled with ${mentor.name} successfully!`);

    setName('');
    setMeetingSummary('');
    setDate('');
    setTimeSlot('');
  };

  return (
    <div className="meeting-form-container">
      <h2 className="form-title">Schedule Meeting with {mentor.name}</h2>
      <form onSubmit={handleSubmit} className="animated-form">
        <div className="form-group">
          <label htmlFor="name">
            <User size={18} />
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="summary">
            <FileText size={18} />
            Meeting Summary
          </label>
          <textarea
            id="summary"
            value={meetingSummary}
            onChange={(e) => setMeetingSummary(e.target.value)}
            maxLength="100"
            required
            placeholder="Brief description of the meeting (max 100 characters)"
          ></textarea>
          <small>{meetingSummary.length}/100 characters</small>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">
              <Calendar size={18} />
              Select Date
            </label>
            <select
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            >
              <option value="">Choose a date</option>
              {availableDates.map((d) => (
                <option key={d} value={d}>
                  {new Date(d).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="time">
              <Clock size={18} />
              Select Time Slot
            </label>
            <select
              id="time"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              required
            >
              <option value="">Select Time Slot</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
            </select>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default MeetingForm;
