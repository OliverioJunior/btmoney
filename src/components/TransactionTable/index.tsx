import { useTransaction } from '../hooks/useTransaction';
import { Container } from './styles';

export const TransactionTable: React.FC = () => {
  const { transactions } = useTransaction();
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
          {transactions.map(
            ({ id, title, type, category, amount, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(amount)}
                </td>
                <td>{category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date())}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </Container>
  );
};
