import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

export interface TransactionProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}

interface ContextProps {
  children: ReactNode;
}

export const TransactionContext = createContext<TransactionProps[]>([]);

export const TransactionProvider: React.FC<ContextProps> = ({ children }) => {
  const [transaction, setTransaction] = useState<TransactionProps[]>([]);
  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransaction(response.data.transactions));
  }, []);
  return (
    <TransactionContext.Provider value={transaction}>
      {children}
    </TransactionContext.Provider>
  );
};
