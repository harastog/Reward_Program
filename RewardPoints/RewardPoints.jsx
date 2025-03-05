import React, { useState } from 'react';
import { calculateRewardPoints } from '../utils/calculatePoints';
import useFetch from '../hooks/useFetch';
import { RewardTable } from './RewardPoints.styles';

const RewardPoints = ({ customerId }) => {
  const [monthRange, setMonthRange] = useState(3);
  const { data, loading, error } = useFetch(customerId, monthRange);

  const handleMonthChange = (event) => {
    setMonthRange(event.target.value);
  };

  const calculateMonthlyPoints = (transactions) => {
    return transactions.reduce((acc, curr) => acc + calculateRewardPoints(curr.amount), 0);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <label>
        Select Month Range:
        <input
          type="number"
          value={monthRange}
          onChange={handleMonthChange}
          min="1"
        />
      </label>
      <RewardTable>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <tr key={transaction.transactionId}>
              <td>{transaction.transactionId}</td>
              <td>${transaction.amount}</td>
              <td>{calculateRewardPoints(transaction.amount)}</td>
            </tr>
          ))}
        </tbody>
      </RewardTable>
      <div>Total Points: {calculateMonthlyPoints(data)}</div>
    </div>
  );
};

export default RewardPoints;
