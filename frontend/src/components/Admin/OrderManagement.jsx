import React from 'react'

const OrderManagement = () => {

    const orders = [
        {
            _id: 123123,
            user: {
                name: "John Doe",
            },
            totalPrice: 110,
            status: "Processing",
        }
    ]
  return (
    <div className='max-w-7xl mx-auto p-6'>OrderManagement</div>
  )
}

export default OrderManagement