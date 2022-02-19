import { IconButton } from 'components/IconButton';
import { ReactNode, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Dropdown } from '../Dropdown';
import styles from './Menu.module.css';

interface MenuProps {
  children: ReactNode[];
  alignRight?: boolean;
}

export const Menu = ({ children, alignRight }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.menu}>
      <IconButton Icon={BsThreeDotsVertical} onClick={toggleMenuOpen} width='fit-content' />
      <Dropdown items={children} alignRight={alignRight} open={isMenuOpen} />
    </div>
  );
};
