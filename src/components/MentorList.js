// //new
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './MentorList.css';

// const MentorList = ({ mentors }) => {
//   const navigate = useNavigate();

//   const handleSelectMentor = (mentorId) => {
//     navigate(`/schedule/${mentorId}`); // Navigating with mentor's ID in the URL
//   };

//   return (
//     <div className="mentor-list">
//       <h2>Available Mentors</h2>
//       <div className="mentor-cards">
//         {mentors.map((mentor) => (
//           <div key={mentor.id} className="mentor-card">
//             <h3>{mentor.name}</h3>
//             <p>{mentor.specialty}</p>
//             <button onClick={() => handleSelectMentor(mentor.id)}>Schedule Meeting</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MentorList;






















// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './MentorList.css';

// const MentorList = ({ mentors }) => {
//   const navigate = useNavigate();

//   const handleSelectMentor = (mentorId) => {
//     navigate(`/schedule/${mentorId}`);
//   };

//   return (
//     <div className="mentor-list">
//       <h2>Select a Mentor</h2>
//       <div className="mentor-cards">
//         {mentors.map((mentor) => (
//           <div key={mentor.id} className="mentor-card">
//             <div className="schedule-meeting">
//               <div>
//                 <h3>{mentor.name}</h3>
//                 <p>{mentor.specialty}</p>
//               </div>
//               <button onClick={() => handleSelectMentor(mentor.id)}>Schedule Meeting</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MentorList;

























// import React, { useState } from 'react';
// import './MentorList.css';  // Add styles later

// function MentorList({ mentors }) {
//   const [selectedMentor, setSelectedMentor] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenProfile = (mentor) => {
//     setSelectedMentor(mentor);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="mentor-list">
//       {mentors.map((mentor) => (
//         <div key={mentor.id} className="mentor-card" onClick={() => handleOpenProfile(mentor)}>
//           <h3>{mentor.name}</h3>
//           <p>{mentor.specialty}</p>
//           <button>View Profile</button>
//         </div>
//       ))}

//       {showModal && <MentorProfileModal mentor={selectedMentor} onClose={handleCloseModal} />}
//     </div>
//   );
// }

// function MentorProfileModal({ mentor, onClose }) {
//   return (
//     <div className="modal-backdrop">
//       <div className="modal-content">
//         <h2>{mentor.name}</h2>
//         <p>{mentor.specialty}</p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }

// export default MentorList;






















//-----------------
// src/MentorList.js
// import React, { useState } from 'react';
// import './MentorList.css';
// import { Search, XCircle } from 'lucide-react';

// function MentorList({ mentors }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedMentor, setSelectedMentor] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const filteredMentors = mentors.filter((mentor) =>
//     mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     mentor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleOpenProfile = (mentor) => {
//     setSelectedMentor(mentor);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="mentor-list">
//       <div className="search-bar">
//         <Search className="search-icon" />
//         <input
//           type="text"
//           placeholder="Search mentors..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="mentor-grid">
//         {filteredMentors.map((mentor) => (
//           <div key={mentor.id} className="mentor-card" onClick={() => handleOpenProfile(mentor)}>
//             <h3>{mentor.name}</h3>
//             <p>{mentor.specialty}</p>
//             <button>View Profile</button>
//           </div>
//         ))}
//       </div>

//       {showModal && <MentorProfileModal mentor={selectedMentor} onClose={handleCloseModal} />}
//     </div>
//   );
// }

// function MentorProfileModal({ mentor, onClose }) {
//   return (
//     <div className="modal-backdrop">
//       <div className="modal-content">
//         <XCircle className="close-icon" onClick={onClose} />
//         <h2>{mentor.name}</h2>
//         <p>{mentor.specialty}</p>
//       </div>
//     </div>
//   );
// }

// export default MentorList;










import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MentorList.css';

const MentorList = ({ mentors, onSelectMentor }) => {
  const navigate = useNavigate();

  const handleMentorClick = (mentor) => {
    onSelectMentor(mentor);
    navigate('/schedule');
  };

  return (
    <div className="mentor-list">
      <h2>Available Mentors</h2>
      <div className="mentor-cards">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card" onClick={() => handleMentorClick(mentor)}>
            <img src={mentor.image} alt={mentor.name} />
            <h3>{mentor.name}</h3>
            <p>{mentor.specialty}</p>
            <button>Schedule Meeting</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorList;
