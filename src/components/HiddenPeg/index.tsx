import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { Peg } from '../Peg';

interface HiddenPegProps {
  className?: string;
}

export const HiddenPeg = ({ className }: HiddenPegProps) => {
  return (
    <>
      <Peg color="darkgrey" className={className}>
        <BsFillPatchQuestionFill size="2rem" />
      </Peg>
    </>
  );
};
