import { getPegStyling } from 'logic';
import { PegColor } from 'models';
import {
  BsArrowReturnLeft,
  BsBackspace,
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
  color?: string;
}

export const PegIconChooser = ({
  iconName,
  size,
  color,
}: PegIconChooserProps) => {
  switch (iconName) {
    case 'BsFillSuitHeartFill':
      return <BsFillSuitHeartFill size={size} color={color} />;
    case 'BsFillSquareFill':
      return <BsFillSquareFill size={size} color={color} />;
    case 'BsFillTriangleFill':
      return <BsFillTriangleFill size={size} color={color} />;
    case 'BsFillSuitClubFill':
      return <BsFillSuitClubFill size={size} color={color} />;
    case 'BsFillSuitDiamondFill':
      return <BsFillSuitDiamondFill size={size} color={color} />;
    case 'BsFillSuitSpadeFill':
      return <BsFillSuitSpadeFill size={size} color={color} />;
    case 'BsFillStarFill':
      return <BsFillStarFill size={size} color={color} />;
    case 'BsFillHexagonFill':
      return <BsFillHexagonFill size={size} color={color} />;
    case 'BsFillShieldFill':
      return <BsFillShieldFill size={size} color={color} />;
    case 'BsFillShiftFill':
      return <BsFillShiftFill size={size} color={color} />;
    case 'BsFillPatchQuestionFill':
      return <BsFillPatchQuestionFill size={size} color={color} />;
    case 'BsBackspace':
      return <BsBackspace size={size} color={color} />;
    case 'BsArrowReturnLeft':
      return <BsArrowReturnLeft size={size} color={color} />;

    default:
      return <BsFillPatchQuestionFill size={size} color={color} />;
  }
};

export const getIcon = (color: PegColor, showIcons: boolean) => {
  const pegStyling = getPegStyling.get(color);
  const iconString: string = pegStyling?.icon ?? 'BsFillPatchQuestionFill';
  return showIcons ? (
    <PegIconChooser
      iconName={iconString}
      size="2rem"
      color={pegStyling?.iconColor ?? '#FFF'}
    />
  ) : (
    <div />
  );
};
