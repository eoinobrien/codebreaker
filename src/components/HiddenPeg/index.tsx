import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { pegHexColors } from '../../logic/pegs';
import { PegColor } from '../../models';
import { Peg } from '../Peg';

interface HiddenPegProps {
  className?: string;
}

export const HiddenPeg = ({ className }: HiddenPegProps) => {
  return (
    <>
      <Peg color={pegHexColors.get(PegColor.Hidden) ?? "#000"} light className={className}>
        <BsFillPatchQuestionFill size="2rem" />
      </Peg>
    </>
  );
};
