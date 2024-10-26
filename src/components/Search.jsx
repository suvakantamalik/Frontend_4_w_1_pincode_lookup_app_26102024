import React, { useEffect, useState } from 'react';
import { PINCODE_LOOKUP_API } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSearchHistory } from '../store/actions';
import Loader from './Loader'; // Import the Loader component

const Search = () => {
  const [pincode, setPincode] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPincodeApi = async () => {
      if (isSubmit && pincode.length === 6) {
        setIsLoading(true); // Set loading to true
        setErrorMessage('')
        try {
          const response = await fetch(`${PINCODE_LOOKUP_API}${pincode}`);
          const data = await response.json();

          // Dispatch the action to add to search history
          dispatch(addSearchHistory(data));

          // Reset pincode and submission status
          setPincode('');
          setIsSubmit(false);
          setIsLoading(false); // Set loading to false

          // Navigate to the search history page
          navigate('/search/history');
        } catch (error) {
          console.error("Error fetching pincode data:", error);
          setIsLoading(false); // Set loading to false
        }
      }
    };

    fetchPincodeApi();
  }, [isSubmit, pincode, dispatch, navigate]);

  const handleSubmit = () => {
    if (pincode.length === 6) {
      setIsSubmit(true);
    }
    else {
      // alert("Please enter a valid 6-digit pincode.")
      setErrorMessage(<h2 className='text-red-600 font-bold'>Please enter a valid 6-digit pincode.</h2>);
    }
  };

  const handleInputChange = (e) => {
    setPincode(e.target.value);
  };

  return (
    <div className="m-5">
      {isLoading && <Loader />} {/* Show loader when loading */}
      <div className="flex flex-col">
        <h1 className="font-bold my-5">Enter Pincode</h1>
        <input
          type="number"
          value={pincode}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 text-gray-700 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Enter Pincode"
        />
        <button
          className="w-48 px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={handleSubmit}
        >
          Lookup
        </button>

        <div className='w-full flex justify-center items-center h-48'>
          {errorMessage}
        </div>
      </div>
    </div>
  );
};

export default Search;
