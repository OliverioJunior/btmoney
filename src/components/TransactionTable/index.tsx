import { useContext } from 'react';
import { TransactionContext } from '../../TransactionContext';
import { Container } from './styles';

export const TransactionTable: React.FC = () => {
  const { transaction } = useContext(TransactionContext);
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
                <td className={type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(amount)}
                </td>
                <td>{category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(createAt))}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </Container>
  );
};
