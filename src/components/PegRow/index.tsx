import { createArrayOfObject } from '../../logic/codes';
import { pegHexColors } from '../../logic/pegs';
import { PegColor } from '../../models';
import { EmptyPeg } from '../EmptyPeg';
import { HiddenPeg } from '../HiddenPeg';
import { Peg } from '../Peg';
import styles from './PegRow.module.css';

interface PegRowProps {
  code: PegColor[];
  numberOfPegs: number;
  hideCode?: boolean;
}

export const PegRow = ({
  code,
  numberOfPegs,
  hideCode = false,
}: PegRowProps) => {
  let pegsIndex: number[] = createArrayOfObject(0, numberOfPegs);

  return (
    <div className={styles.pegRow}>
      {pegsIndex.map((_, index) => {
        if (code.length > index && code[index] !== PegColor.Blank) {
          if (hideCode || code[index] === PegColor.Hidden) {
            return <HiddenPeg key={index} />;
          }

          return (
            <Peg
              key={index}
              color={pegHexColors.get(code[index]) ?? '#000'}
              ariaLabel={code[index]}
            />
          );
        } else {
          return <EmptyPeg key={index} />;
        }
      })}
    </div>
  );
};
