import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuotesGallery = () => {
  const [quotes, setQuotes] = useState([]);  // State to store quotes fetched from the backend
  const [currentIndex, setCurrentIndex] = useState(0);  // State to track the current quote index

  // Fetch all quotes from the backend when the component mounts
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/quotes/')  // Backend API endpoint
      .then(response => {
        setQuotes(response.data);  // Set the quotes in the state
      })
      .catch(error => console.error('Error fetching quotes:', error));  // Handle errors
  }, []);  // Empty dependency array ensures this runs once on component mount

  return (
    <div>
      <h1>Quotes Gallery</h1>

      {/* Display the current quote */}
      {quotes.length > 0 && (
        <div>
          <p>"{quotes[currentIndex].text}"</p>
          <p>- {quotes[currentIndex].author}</p>
          <p>Likes: {quotes[currentIndex].likes}</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div>
        {/* "Previous" button: Disable if we're at the first quote */}
        <button 
          onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0)} 
          disabled={currentIndex === 0}
        >
          Previous
        </button>

        {/* "Next" button: Disable if we're at the last quote */}
        <button 
          onClick={() => setCurrentIndex(currentIndex < quotes.length - 1 ? currentIndex + 1 : currentIndex)} 
          disabled={currentIndex === quotes.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuotesGallery;
