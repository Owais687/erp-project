import React, { useState } from 'react';
import OrdersList from './OrdersList';
import OrdersCalendar from './OrdersCalendar';

const OrdersManagement = () => {
  // Mock data array
  const [orders, setOrders] = useState([
    { id: 1, orderId: '702123', customerName: 'Michelle', orderDate: '2024-03-13', status: 'Shipped', deliveryDate: '2024-03-17' },
    { id: 2, orderId: '703457', customerName: 'Ashley', orderDate: '2024-03-08', status: 'Delivered', deliveryDate: '2024-03-13' },
    { id: 3, orderId: '762131', customerName: 'Jeff Hardy', orderDate: '2024-03-15', status: 'Pending', deliveryDate: '2024-03-23' },
    { id: 4, orderId: '762671', customerName: 'Johnson', orderDate: '2024-03-11', status: 'Out for Delivery', deliveryDate: '2024-03-15' },
    { id: 5, orderId: '716652', customerName: 'Thomas', orderDate: '2024-03-06', status: 'Delivered', deliveryDate: '2024-03-14' }
  ]);

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div>
      <OrdersList orders={orders} onDelete={handleDeleteOrder} />
      <div style={{ marginTop: '3em' }}></div> 
      <OrdersCalendar orders={orders} />
    </div>
  );
};

export default OrdersManagement;
