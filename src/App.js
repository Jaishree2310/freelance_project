// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MentorList from './components/MentorList';
// import MeetingForm from './components/MeetingForm';

// const App = () => {
//   const mentors = [
//     { id: 1, name: 'John Doe', specialty: 'Frontend Development' },
//     { id: 2, name: 'Jane Smith', specialty: 'Backend Development' },
//     { id: 3, name: 'Sarah Lee', specialty: 'UI/UX Design' },
//   ];

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Home route displays the mentor list */}
//           <Route path="/" element={<MentorList mentors={mentors} />} />
//           {/* Pass the mentor state dynamically */}
//           <Route path="/schedule/:mentorId" element={<MeetingForm mentors={mentors} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

















import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MentorList from './components/MentorList';
import MeetingForm from './components/MeetingForm';
import HeroSection from './components/HeroSection';
import './App.css';

const App = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    { id: 1, name: 'John Doe', specialty: 'JavaScript Developer', image: '/assets/profile1.jpg' },
    { id: 2, name: 'Jane Smith', specialty: 'React Specialist', image: '/assets/profile2.jpg' }
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
