
// //new

// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './MeetingForm.css';

// const MeetingForm = ({ mentors }) => {
//   const { mentorId } = useParams(); // Get mentor ID from URL
//   const mentor = mentors.find((mentor) => mentor.id === parseInt(mentorId)); // Find the selected mentor
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
//   const [summary, setSummary] = useState('');
//   const [timeSlot, setTimeSlot] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && summary && timeSlot) {
//       // Mock submission logic
//       console.log({
//         name,
//         summary,
//         timeSlot,
//         mentorName: mentor.name,
//       });
//       alert(`Meeting scheduled with ${mentor.name}!`);
//       navigate('/'); // Navigate back to the mentor list after submission
//     } else {
//       alert('Please fill in all the details!');
//     }
//   };

//   if (!mentor) {
//     return <div>No mentor selected. Please go back and select a mentor.</div>;
//   }

//   return (
//     <div className="meeting-form">
//       <h2>Schedule a meeting with {mentor.name}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           maxLength={100}
//           placeholder="Brief summary (max 100 characters)"
//           value={summary}
//           onChange={(e) => setSummary(e.target.value)}
//           required
//         ></textarea>
//         <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required>
//           <option value="">Select Time Slot</option>
//           <option value="9:00 AM">9:00 AM</option>
//           <option value="10:00 AM">10:00 AM</option>
//           <option value="11:00 AM">11:00 AM</option>
//         </select>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MeetingForm;






















// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './MeetingForm.css';

// const MeetingForm = ({ mentors }) => {
//   const { mentorId } = useParams();
//   const mentor = mentors.find((mentor) => mentor.id === parseInt(mentorId));
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
//   const [summary, setSummary] = useState('');
//   const [timeSlot, setTimeSlot] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && summary && timeSlot) {
//       alert(`Meeting scheduled with ${mentor.name}!`);
//       navigate('/');
//     } else {
//       alert('Please fill in all the details!');
//     }
//   };

//   if (!mentor) {
//     return <div>No mentor selected. Please go back and select a mentor.</div>;
//   }

//   return (
//     <div className="meeting-form">
//       <h2>Schedule a meeting with {mentor.name}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           maxLength={100}
//           placeholder="Brief summary (max 100 characters)"
//           value={summary}
//           onChange={(e) => setSummary(e.target.value)}
//           required
//         ></textarea>
//         <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required>
//           <option value="">Select Time Slot</option>
//           <option value="9:00 AM">9:00 AM</option>
//           <option value="10:00 AM">10:00 AM</option>
//           <option value="11:00 AM">11:00 AM</option>
//         </select>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MeetingForm;


















import React, { useState } from 'react';
import './MeetingForm.css';

const MeetingForm = ({ mentor }) => {
  const [name, setName] = useState('');
  const [meetingSummary, setMeetingSummary] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meeting Scheduled with:', {
      mentor: mentor.name,
      name,
      timeSlot,
      meetingSummary
    });
    alert(`Meeting scheduled with ${mentor.name} successfully!`);
  };

  return (
    <div className="meeting-form-container">
      <h2>Schedule Meeting with {mentor.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Meeting Summary (max 100 characters):</label>
          <textarea
            value={meetingSummary}
            onChange={(e) => setMeetingSummary(e.target.value)}
            maxLength="100"
            required
          ></textarea>
        </div>
        <div>
          <label>Select Time Slot:</label>
          <input
            type="datetime-local"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          />
        </div>
        <button type="submit">Schedule Meeting</button>
      </form>
    </div>
  );
};

export default MeetingForm;
