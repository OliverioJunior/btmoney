import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}

type TransactionInputs = Omit<TransactionProps, 'id' | 'createAt'>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transaction: TransactionProps[];
  createTransaction: (transaction: TransactionInputs) => void;
}

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export const TransactionProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [transaction, setTransaction] = useState<TransactionProps[]>([]);
  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransaction(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInputs) {
    api.post('/transactions', transaction);
  }
  return (
    <TransactionContext.Provider value={{ transaction, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
