import icomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransaction } from '../hooks/useTransaction';
import { Container } from './styles';

export const Summary: React.FC = () => {
  const { transactions } = useTransaction();

  const totalDeposits = transactions.reduce((acc, transactions) => {
    if (transactions.type === 'deposit') {
      return acc + transactions.amount;
    }

    return acc;
  }, 0);
  const totalWithDraw = transactions.reduce((acc, transactions) => {
    if (transactions.type === 'withdraw') {
      return acc + transactions.amount;
    }

    return acc;
  }, 0);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalDeposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalWithDraw)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalDeposits - totalWithDraw)}
        </strong>
      </div>
    </Container>
  );
};
