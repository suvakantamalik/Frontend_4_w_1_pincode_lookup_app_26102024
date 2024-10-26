import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddressCard from './AddressCard';
import { useNavigate } from 'react-router-dom';

const SearchHistory = () => {
    const searchHistory = useSelector((state) => state.searchHistory);

    // Destructure to get the PostOffice array from the latest search entry, if it exists
    const { PostOffice = [] } = searchHistory[0]?.[0] || {};
    console.log(PostOffice)

    const [filter, setFilter] = useState('')
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setFilter(e.target.value)
    }

    const filteredPostOffice = PostOffice.filter((office) =>
        office.Name.toLowerCase().includes(filter.toLowerCase())
    )

    const handleSubmit = () => {
        navigate('/')
    }

    return (
        <div className="m-5">
            <div className='mb-10'>
                <h2 className="font-bold my-5"><strong>Pincode: </strong>{searchHistory[0][0].PostOffice[0].Pincode}</h2>
                <h2 className="font-bold my-5"><strong>Message: </strong>{searchHistory[0][0].Message}</h2>

                <input
                    type="text"
                    className="w-full px-4 py-2 mb-4 text-gray-700 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="🔍 Filter"
                    value={filter}
                    onChange={handleInputChange}
                />

                <button
                    className="w-48 px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    onClick={handleSubmit}
                >Home</button>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                {filteredPostOffice.map((office, index) => (
                    <div key={index} className='items-center'>
                        <AddressCard
                            office={office}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchHistory;
