import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/event/list') // Adjust the URL as needed
      .then(response => {
        setEvents(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);
if  (events.length === 0)  return   <p className="text-gray-500">No upcoming events</p>
  return (
    <div className="bg-gray-100 h-screen p-8 flex flex-row justify-center items-center">
    <div className="flex space-x-4">
  {events.map(event => (
    
       <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
             <img src={`http://localhost:8000${event.image}`} alt={event.event_name}className="w-full h-48 object-cover" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Title of Card 1</div>
                    <p className="text-gray-700 text-base">
                        Description of the card goes here. This is a sample text to showcase the card's description.
                        Feel free to change it with your own text.
                    </p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag1</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag2</span>
                    {/* Add more tags as needed */}
                </div>
                <div className="px-6 py-4">
                    <p className="text-gray-600 text-sm">Location: Beautiful Place 1</p>
                    {/* Add more details as needed */}
                </div>
            </div>

           
           
    
   ))}
 
 </div>
    </div>

  );
};

export default Home;
