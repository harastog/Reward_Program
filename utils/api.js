export const fetchTransactionData = (customerId, monthRange) => {
    // Simulating an asynchronous API call with a delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockData = [
          {
            customerId: 1,
            transactionId: 'T001',
            amount: 120,
            date: '2025-01-01',
            name : 'harsh'
          },
          {
            customerId: 1,
            transactionId: 'T002',
            amount: 80,
            date: '2025-01-10',
          },
          // Add more data for the specific customer and date range
        ];
  
        if (mockData.length > 0) {
          resolve(mockData);
        } else {
          reject('No transactions found');
        }
      }, 1000);
    });
  };
  