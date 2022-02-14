import { Modal } from 'components/Modal';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface RouterModalProps {
  header: string;
  children: ReactNode;
}

export const RouterModal = ({ header, children }: RouterModalProps) => {
  let navigate = useNavigate();

  function onDismiss() {
    navigate(-1);
  }

  return (
    <Modal header={header} onDismiss={onDismiss}>
      {children}
    </Modal>
  );
};
