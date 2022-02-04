import { createArrayOfObject, getPegStyling } from 'logic';
import { PegColor } from 'models';
import { EmptyPeg } from 'components/EmptyPeg';
import { HiddenPeg } from 'components/HiddenPeg';
import { Peg } from 'components/Peg';
import { getIcon, PegIconChooser } from 'components/PegIconChooser';
import { SettingsContext } from 'context/settingsContext';
import { useContext } from 'react';

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
  let { showIcons } = useContext(SettingsContext);
  let pegsIndex: number[] = createArrayOfObject(0, numberOfPegs);

  return (
    <>
      {pegsIndex.map((_, index) => {
        if (code.length > index && code[index] !== PegColor.Blank) {
          if (hideCode || code[index] === PegColor.Hidden) {
            return <HiddenPeg key={index} />;
          }

          return (
            <Peg
              key={index}
              color={getPegStyling.get(code[index])?.color ?? '#000'}
              ariaLabel={PegColor[code[index]]}
            >
              {getIcon(code[index], showIcons)}
            </Peg>
          );
        } else {
          return <EmptyPeg key={index} />;
        }
      })}
    </>
  );
};
