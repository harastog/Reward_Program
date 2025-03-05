// components/CustomerList/CustomerList.styles.js
import styled from 'styled-components';

export const CustomerListContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
`;

export const CustomerItem = styled.div`
  margin: 10px 0;
  padding: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #e2e2e2;
  }
`;
