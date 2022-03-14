import classnames from 'classnames';
import { IconButton } from 'components/IconButton';
import { ReactNode, MouseEvent, useCallback, useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import styles from './Modal.module.css';

interface ModalProps {
  header: string;
  children: ReactNode;
  width?: string | number;
  onDismiss: () => void;
}

export const Modal = ({ header, children, width, onDismiss }: ModalProps) => {
  var modalClasses = classnames(styles.modal, {
    [styles.show]: true,
  });

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onDismiss();
      }
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction);

    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);

  const onModalBackgroundClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onDismiss();
    }
  };

  const onCloseModalClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    onDismiss();
  };

  return (
    <div className={modalClasses} onClick={onModalBackgroundClick}>
      <div className={styles.modalContent} style={{ width: width }}>
        <div className={styles.header}>
          <div className={styles.headerSpacer}></div>
          <h1>{header}</h1>
          <IconButton Icon={BsX} onClick={onCloseModalClick} />
        </div>
        <div className={styles.modalChild}>{children}</div>
      </div>
    </div>
  );
};
