import React from 'react';

const TransactionDetails = ({ transaction }) => {
  return (
    <div>
      <h3>Transaction Details</h3>
      <p>Transaction ID: {transaction.transactionId}</p>
      <p>Amount: ${transaction.amount}</p>
      <p>Date: {transaction.date}</p>
    </div>
  );
};

export default TransactionDetails;
