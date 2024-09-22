import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, Star } from 'lucide-react';
import './MentorList.css';

const MentorList = ({ mentors, onSelectMentor }) => {
  const navigate = useNavigate();

  const handleMentorClick = (mentor) => {
    onSelectMentor(mentor);
    navigate('/schedule');
  };

  return (
    <div className="mentor-list-container">
      <h2 className="mentor-list-title">Available Mentors</h2>
      <div className="mentor-grid">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card" onClick={() => handleMentorClick(mentor)}>
            <div className="mentor-card-header">
              <img src={mentor.image} alt={mentor.name} className="mentor-image" />
              <div className="mentor-rating">
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <span>{mentor.rating}</span>
              </div>
            </div>
            <div className="mentor-card-body">
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-specialty">{mentor.specialty}</p>
              <div className="mentor-info">
                <span><User size={14} /> {mentor.experience} 2 years exp.</span>
                <span><Calendar size={14} /> {mentor.availability}</span>
              </div>
            </div>
            <button className="schedule-button">Schedule Meeting</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorList;