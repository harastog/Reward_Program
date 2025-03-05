import React, { useState, useEffect } from 'react';
import { CustomerListContainer, CustomerItem } from './CustomerList.styles';

const CustomerList = ({ onSelectCustomer }) => {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  // Hardcoded mock customer data
  const mockData = [
    { customerId: 1, name: 'John Doe' },
    { customerId: 2, name: 'Jane Smith' },
    { customerId: 3, name: 'Alice Brown' },
    { customerId: 4, name: 'Bob Johnson' },
  ];

  useEffect(() => {
    // Simulating loading state as if it's fetching data
    setLoading(true);

    // Set mock data after a short delay to simulate loading
    setTimeout(() => {
      setCustomers(mockData);
      setLoading(false);
    }, 500); // Simulate a delay of 500ms (you can change this time)

  }, []); // Empty dependency array ensures it runs only once when the component mounts

  if (loading) return <div>Loading customers...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <CustomerListContainer>
      <h2>Customer List</h2>
      {customers.map((customer) => (
        <CustomerItem key={customer.customerId} onClick={() => onSelectCustomer(customer.customerId)}>
          {customer.name}
        </CustomerItem>
      ))}
    </CustomerListContainer>
  );
};

export default CustomerList;
