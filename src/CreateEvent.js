import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext'; // Import useUser
import { useNavigate } from 'react-router-dom'; 
const CreateEventPage = () => {
  const { loggedInUsername } = useUser();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    event_name: '',
    data: '',
    time: '',
    location: '',
    image: null,
    is_liked: false,
    username: loggedInUsername,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setEventData(prevData => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData for sending the image file
    const formData = new FormData();
    formData.append('event_name', eventData.event_name);
    formData.append('data', eventData.data);
    formData.append('time', eventData.time);
    formData.append('location', eventData.location);
    formData.append('image', eventData.image);
    formData.append('username', eventData.username);

    // Make POST request to create an event
    axios.post('http://localhost:8000/api/event/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Required for sending files
      },
    })
    .then(response => {
      console.log('Event created successfully:', response.data);
      navigate('/');
      // Optionally, you can redirect or display a success message
    })
    .catch(error => {
      console.error('Error creating event:', error);
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 w-3/6">
      <div className="max-w-2xl mx-auto px-4  ">
        <h1 className="text-3xl font-bold mb-6">Create Event</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Event Name</label>
            <input
              type="text"
              name="event_name"
              value={eventData.event_name}
              onChange={handleInputChange}
              className="form-input w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Data</label>
            <input
              type="text"
              name="data"
              value={eventData.data}
              onChange={handleInputChange}
              className="form-input w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Time</label>
            <input
              type="datetime-local"
              name="time"
              value={eventData.time}
              onChange={handleInputChange}
              className="form-input w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleInputChange}
              className="form-input w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="form-input w-full"
            />
          </div>
         
        
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventPage;
