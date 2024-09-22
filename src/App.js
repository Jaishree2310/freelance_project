import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MentorList from './components/MentorList';
import MeetingForm from './components/MeetingForm';
import HeroSection from './components/HeroSection';
import './App.css';
import profile1 from './assets/profile1.png';

const App = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    { id: 1, name: 'John Doe', specialty: 'JavaScript Developer', image: profile1 },
    { id: 2, name: 'Jane Smith', specialty: 'React Specialist', image: profile1 },
    { id: 3, name: 'Coldplay', specialty: 'Machine Learning', image: profile1 },
    { id: 4, name: 'Arsh Goyal', specialty: 'Devops Specialist', image: '/assets/profile4.jpg' },
    { id: 5, name: 'Kunal singh', specialty: 'Frontend Specialist', image: '/assets/profile5.jpg' },
    { id: 6, name: 'Sayali Smith', specialty: 'Backend Specialist', image: '/assets/profile6.jpg' }
  ];

  const handleSelectMentor = (mentor) => {
    setSelectedMentor(mentor);
  };

  return (
    <Router>
      <div className="app">
        <HeroSection />
        <Routes>
          <Route
            path="/"
            element={<MentorList mentors={mentors} onSelectMentor={handleSelectMentor} />}
          />
          <Route
            path="/schedule"
            element={
              selectedMentor ? (
                <MeetingForm mentor={selectedMentor} />
              ) : (
                <div className="error-message">
                  No mentor selected. Please go back and select a mentor.
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
