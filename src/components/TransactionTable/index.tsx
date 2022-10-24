import { Container } from './styles';

export const TransactionTable: React.FC = () => {
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
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">+ R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1200</td>
            <td>Casa</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
