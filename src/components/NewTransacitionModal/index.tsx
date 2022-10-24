import Modal from 'react-modal';
import { Container } from './styled';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastra Transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
