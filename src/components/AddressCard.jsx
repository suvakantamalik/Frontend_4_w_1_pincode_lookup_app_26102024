import React from 'react'

const AddressCard = ({ office }) => {
    return (
        <div className='border-2 rounded-lg border-black'>
            <p className="my-2 ml-5 mt-5 mb-5"><strong>Name: </strong>{office.Name}</p>
            <p className="my-2 ml-5 mt-5 mb-5"><strong>Branch Type: </strong>{office.BranchType}</p>
            <p className="my-2 ml-5 mt-5 mb-5"><strong>Delivery Status: </strong>{office.DeliveryStatus}</p>
            <p className="my-2 ml-5 mt-5 mb-5"><strong>District: </strong>{office.District}</p>
            <p className="my-2 ml-5 mt-5 mb-5"><strong>Division: </strong>{office.Division}</p>
            <p className="my-2 ml-5 mt-5 mb-5"><strong>State: </strong>{office.State}</p>
        </div>
    )
}

export default AddressCard