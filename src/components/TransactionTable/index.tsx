import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface TransactionProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}
export const TransactionTable: React.FC = () => {
  const [transaction, setTransaction] = useState<TransactionProps[]>([]);
  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransaction(response.data.transactions));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transaction.map(
            ({ id, title, type, category, amount, createAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>{amount}</td>
                <td>{category}</td>
                <td>{createAt}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </Container>
  );
};
