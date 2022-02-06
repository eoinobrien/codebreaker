import { createArrayOfObject, getPegStyling } from 'logic';
import { PegColor } from 'models';
import { EmptyPeg } from 'components/EmptyPeg';
import { Peg } from 'components/Peg';
import { getIcon } from 'components/PegIconChooser';
import { SettingsContext } from 'context/settingsContext';
import { useContext } from 'react';

interface PegRowProps {
  code: PegColor[];
  numberOfPegs: number;
  showIcons: boolean;
  hideCode?: boolean;
}

export const PegRow = ({
  code,
  numberOfPegs,
  showIcons,
  hideCode = false,
}: PegRowProps) => {
  let pegsIndex: number[] = createArrayOfObject(0, numberOfPegs);

  return (
    <>
      {pegsIndex.map((_, index) => {
        if (code.length > index && code[index] !== PegColor.Blank) {
          if (hideCode || code[index] === PegColor.Hidden) {
            return (
              <Peg
                key={index}
                color={code[index]}
                ariaLabel={PegColor[code[index]]}
              >
                {getIcon(code[index], showIcons)}
              </Peg>
            );
          }

          return (
            <Peg
              key={index}
              color={code[index]}
              ariaLabel={PegColor[code[index]]}
            >
              {getIcon(code[index], true)}
            </Peg>
          );
        } else {
          return <EmptyPeg key={index} />;
        }
      })}
    </>
  );
};
