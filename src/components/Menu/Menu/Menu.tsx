import { IconButton } from 'components/IconButton';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import listenForOutsideClick from 'utils/listenForOutsideClick';
import { Dropdown } from '../Dropdown';
import styles from './Menu.module.css';

interface MenuProps {
  children: ReactNode[];
  alignRight?: boolean;
}

export const Menu = ({ children, alignRight }: MenuProps) => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [listening, setListening] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  return (
    <div className={styles.menu} ref={menuRef}>
      <IconButton
        Icon={BsThreeDotsVertical}
        onClick={toggle}
        width="fit-content"
      />
      <Dropdown
        items={children}
        alignRight={alignRight}
        open={isOpen}
        closeCallback={() => setIsOpen(false)}
      />
    </div>
  );
};
