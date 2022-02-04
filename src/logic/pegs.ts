import { PegColor } from 'models';

export type PegStyling = {
  color: string;
  icon?: string;
  iconColor?: string;
};

export const getPegStyling = new Map<PegColor, PegStyling>();
getPegStyling.set(PegColor.Red, {
  color: '#D50000',
  icon: 'BsFillSuitHeartFill',
  iconColor: '#000000',
});
getPegStyling.set(PegColor.Green, {
  color: '#00C853',
  icon: 'BsFillSquareFill',
  iconColor: '#000000',
});
getPegStyling.set(PegColor.Yellow, {
  color: '#FFD600',
  icon: 'BsFillTriangleFill',
  iconColor: '#000000',
});
getPegStyling.set(PegColor.Blue, {
  color: '#304FFE',
  icon: 'BsFillSuitClubFill',
  iconColor: '#000000',
});
getPegStyling.set(PegColor.Black, {
  color: '#212121',
  icon: 'BsFillSuitDiamondFill',
  iconColor: '#FFFFFF',
});
getPegStyling.set(PegColor.White, {
  color: '#FAFAFA',
  icon: 'BsFillSuitSpadeFill',
  iconColor: '#000000',
});
getPegStyling.set(PegColor.Purple, {
  color: '#D500F9',
  icon: 'BsFillStarFill',
  iconColor: '#000000',
});
getPegStyling.set(PegColor.Pink, {
  color: '#E91E63',
  icon: 'BsFillHexagonFill',
  iconColor: '#000000',
});
getPegStyling.set(PegColor.Orange, {
  color: '#FF6D00',
  icon: 'BsFillShieldFill',
  iconColor: '#000000',
});
getPegStyling.set(PegColor.Teal, {
  color: '#00BFA5',
  icon: 'BsFillShiftFill',
  iconColor: '#000000',
});

getPegStyling.set(PegColor.Hidden, {
  color: '#5D4037',
  icon: 'BsFillPatchQuestionFill',
  iconColor: '#000000',
});
getPegStyling.set(PegColor.KeyboardAction, { color: '#5D4037' });
