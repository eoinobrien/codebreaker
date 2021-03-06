import { PegColor } from 'models';

export type PegStyling = {
  color: string;
  borderColor: string;
  icon?: string;
  iconColor?: string;
};

export const getPegStyling = new Map<PegColor, PegStyling>();
getPegStyling.set(PegColor.Red, {
  color: '#F44336',
  borderColor: '#B71C1C',
  icon: 'BsFillSuitHeartFill',
  iconColor: '#310808',
});
getPegStyling.set(PegColor.Green, {
  color: '#4CAF50',
  borderColor: '#1B5E20',
  icon: 'BsFillSquareFill',
  iconColor: '#051005',
});
getPegStyling.set(PegColor.Yellow, {
  color: '#FFEB3B',
  borderColor: '#F57F17',
  icon: 'BsFillTriangleFill',
  iconColor: '#713705',
});
getPegStyling.set(PegColor.Blue, {
  color: '#2196F3',
  borderColor: '#0D47A1',
  icon: 'BsFillSuitClubFill',
  iconColor: '#051E42',
});
getPegStyling.set(PegColor.Black, {
  color: '#212121',
  borderColor: '#000000',
  icon: 'BsFillSuitDiamondFill',
  iconColor: '#ABABAB',
});
getPegStyling.set(PegColor.White, {
  color: '#FAFAFA',
  borderColor: '#757575',
  icon: 'BsFillSuitSpadeFill',
  iconColor: '#424242',
});
getPegStyling.set(PegColor.Purple, {
  color: '#9C27B0',
  borderColor: '#4A148C',
  icon: 'BsFillStarFill',
  iconColor: '#DC96E8',
});
getPegStyling.set(PegColor.Pink, {
  color: '#E91E63',
  borderColor: '#880E4F',
  icon: 'BsFillHexagonFill',
  iconColor: '#1C0310',
});
getPegStyling.set(PegColor.Orange, {
  color: '#FF9800',
  borderColor: '#E65100',
  icon: 'BsFillShieldFill',
  iconColor: '#4D1B00',
});
getPegStyling.set(PegColor.Teal, {
  color: '#009688',
  borderColor: '#004D40',
  icon: 'BsFillShiftFill',
  iconColor: '#000000',
});

getPegStyling.set(PegColor.Hidden, {
  color: '#795548',
  borderColor: 'var(--section-divider-border)',
  icon: 'BsFillPatchQuestionFill',
  iconColor: '#E5D4D1',
});

getPegStyling.set(PegColor.Blank, {
  color: 'transparent',
  borderColor: 'var(--blank-peg-border)',
  icon: 'BsFillCircleFill',
  iconColor: 'var(--blank-peg-border)',
});

getPegStyling.set(PegColor.KeyboardBackspace, {
  color: '#795548',
  borderColor: 'var(--section-divider-border)',
  icon: 'BsBackspace',
  iconColor: '#E5D4D1',
});

getPegStyling.set(PegColor.KeyboardEnter, {
  color: '#795548',
  borderColor: 'var(--section-divider-border)',
  icon: 'BsArrowReturnLeft',
  iconColor: '#E5D4D1',
});
