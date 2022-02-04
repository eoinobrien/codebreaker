import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { getPegStyling } from 'logic/pegs';
import { PegColor } from 'models';
import { Peg } from 'components/Peg';

interface HiddenPegProps {
  className?: string;
}

export const HiddenPeg = ({ className }: HiddenPegProps) => {
  return (
    <>
      <Peg color={getPegStyling.get(PegColor.Hidden)?.color ?? "#000"} light className={className}>
        <BsFillPatchQuestionFill size="2rem" />
      </Peg>
    </>
  );
};
