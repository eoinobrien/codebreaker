import { PegColor } from 'models';

export type PegStyling = {
  color: string;
  icon?: string;
};

export const getPegStyling = new Map<PegColor, PegStyling>();
getPegStyling.set(PegColor.Red, {
  color: '#D50000',
  icon: 'BsFillSuitHeartFill',
});
getPegStyling.set(PegColor.Green, {
  color: '#00C853',
  icon: 'BsFillSquareFill',
});
getPegStyling.set(PegColor.Yellow, {
  color: '#FFD600',
  icon: 'BsFillTriangleFill',
});
getPegStyling.set(PegColor.Blue, {
  color: '#304FFE',
  icon: 'BsFillSuitClubFill',
});
getPegStyling.set(PegColor.Black, {
  color: '#212121',
  icon: 'BsFillSuitDiamondFill',
});
getPegStyling.set(PegColor.White, {
  color: '#FAFAFA',
  icon: 'BsFillSuitSpadeFill',
});
getPegStyling.set(PegColor.Purple, {
  color: '#D500F9',
  icon: 'BsFillStarFill',
});
getPegStyling.set(PegColor.Pink, {
  color: '#E91E63',
  icon: 'BsFillHexagonFill',
});
getPegStyling.set(PegColor.Orange, {
  color: '#FF6D00',
  icon: 'BsFillShieldFill',
});
getPegStyling.set(PegColor.Teal, { color: '#00BFA5', icon: 'BsFillShiftFill' });

getPegStyling.set(PegColor.Hidden, {
  color: '#5D4037',
  icon: 'BsFillPatchQuestionFill',
});
getPegStyling.set(PegColor.KeyboardAction, { color: '#5D4037' });
