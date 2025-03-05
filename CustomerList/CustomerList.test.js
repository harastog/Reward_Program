// components/CustomerList/CustomerList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import CustomerList from './CustomerList';

test('renders the customer list and handles customer selection', () => {
  const mockOnSelectCustomer = jest.fn();
  
  const mockData = [
    { customerId: 1, name: 'John Doe' },
    { customerId: 2, name: 'Jane Smith' },
  ];

  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(mockData),
  });

  render(<CustomerList onSelectCustomer={mockOnSelectCustomer} />);

  expect(screen.getByText('Loading customers...')).toBeInTheDocument();

  // Wait for the customers to load
  setTimeout(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    fireEvent.click(screen.getByText('John Doe'));

    expect(mockOnSelectCustomer).toHaveBeenCalledWith(1);
  }, 1000);
});
