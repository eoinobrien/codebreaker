import { IconButton } from 'components/IconButton';
import { Modal } from 'components/Modal';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsThreeDotsVertical } from 'react-icons/bs';
import listenForOutsideClick from 'utils/listenForOutsideClick';
import styles from './Menu.module.css';

interface MenuProps {
  children: ReactNode[];
}

export const Menu = ({ children }: MenuProps) => {
  const { t } = useTranslation();
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [listening, setListening] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(
    () => listenForOutsideClick(listening, setListening, menuRef, setIsOpen),
    [listening, setListening, menuRef, setIsOpen],
  );

  return (
    <div className={styles.menu} ref={menuRef}>
      <IconButton
        Icon={BsThreeDotsVertical}
        onClick={toggle}
        width="fit-content"
      />
      {isOpen && (
        <Modal header={t('menu')} onDismiss={() => setIsOpen(false)} width="40rem">
          <ul className={styles.menuList}>
            {children.map((item, index) => {
              return (
                <li className={styles.menuItem} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </Modal>
      )}
    </div>
  );
};
