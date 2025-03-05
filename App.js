// App.js
import React, { useState } from 'react';
import RewardPoints from './components/RewardPoints/RewardPoints';
import TransactionDetails from './components/TransactionDetails/TransactionDetails';
import CustomerList from './components/CustomerList/CustomerList';

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleTransactionSelect = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleCustomerSelect = (customerId) => {
    setSelectedCustomer(customerId);
  };

  return (
    <div>
      <h1>Customer Rewards Program</h1>
      
      {/* Display customer list */}
      <CustomerList onSelectCustomer={handleCustomerSelect} />
      
      {selectedCustomer && (
        <>
          {/* Show reward points for selected customer */}
          <RewardPoints customerId={selectedCustomer} />
          
          {selectedTransaction && (
            <TransactionDetails transaction={selectedTransaction} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
