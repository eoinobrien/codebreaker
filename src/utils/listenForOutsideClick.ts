import { Dispatch, SetStateAction } from 'react';

export default function listenForOutsideClicks(
  listening: boolean,
  setListening: Dispatch<SetStateAction<boolean>>,
  menuRef: any,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
) {
  if (listening) {
    return;
  }
  if (!menuRef.current) {
    return;
  }

  setListening(true);

  [`click`, `touchstart`].forEach((type) => {
    document.addEventListener(`click`, (evt) => {
      if (menuRef.current.contains(evt.target)) {
        return;
      }
      setIsOpen(false);
    });
  });
}
