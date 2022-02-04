import {
  BsFillHexagonFill,
  BsFillPatchQuestionFill,
  BsFillShieldFill,
  BsFillShiftFill,
  BsFillSquareFill,
  BsFillStarFill,
  BsFillSuitClubFill,
  BsFillSuitDiamondFill,
  BsFillSuitHeartFill,
  BsFillSuitSpadeFill,
  BsFillTriangleFill,
} from 'react-icons/bs';

interface PegIconChooserProps {
  iconName: string;
  size: string | number;
}

export const PegIconChooser = ({ iconName, size }: PegIconChooserProps) => {
  switch (iconName) {
    case 'BsFillSuitHeartFill':
      return <BsFillSuitHeartFill size={size} />;
    case 'BsFillSquareFill':
      return <BsFillSquareFill size={size} />;
    case 'BsFillTriangleFill':
      return <BsFillTriangleFill size={size} />;
    case 'BsFillSuitClubFill':
      return <BsFillSuitClubFill size={size} />;
    case 'BsFillSuitDiamondFill':
      return <BsFillSuitDiamondFill size={size} />;
    case 'BsFillSuitSpadeFill':
      return <BsFillSuitSpadeFill size={size} />;
    case 'BsFillStarFill':
      return <BsFillStarFill size={size} />;
    case 'BsFillHexagonFill':
      return <BsFillHexagonFill size={size} />;
    case 'BsFillShieldFill':
      return <BsFillShieldFill size={size} />;
    case 'BsFillShiftFill':
      return <BsFillShiftFill size={size} />;
    case 'BsFillPatchQuestionFill':
      return <BsFillPatchQuestionFill size={size} />;

    default:
      return <BsFillPatchQuestionFill size={size} />;
  }
};
