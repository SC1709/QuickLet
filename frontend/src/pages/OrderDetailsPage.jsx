import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetail, setOrderDetail] = useState(null);
  useEffect(() => {
    const mockOrderDetail = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "Pune", country: "INDIA" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "Shirt",
          price: 150,
          quantity: 2,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetail(mockOrderDetail);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      <p>Order ID: {id}</p>
    </div>
  );
};

export default OrderDetailsPage;
