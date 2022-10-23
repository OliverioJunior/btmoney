import logoSvg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="dt money" />
        <button type="button"> Nova Transação</button>
      </Content>
    </Container>
  );
};
