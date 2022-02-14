import React from 'react';
import classnames from 'classnames';
import { getIcon } from 'components/PegIconChooser';
import { getPegStyling } from 'logic';
import { PegColor } from 'models';
import styles from './Peg.module.css';

interface PegProps {
  color: PegColor;
  as?: string;
  size?: 'medium' | 'small';
  showIcon?: boolean;
  ariaLabel?: string;
  className?: string;
}

export const Peg = ({
  color,
  as = 'div',
  size = 'medium',
  showIcon = false,
  ariaLabel,
  className,
}: PegProps) => {
  var pegClasses = classnames(className, styles.peg, {
    [styles.small]: size === 'small',
  });

  let pegStyling = getPegStyling.get(color);

  return React.createElement(
    as,
    {
      className: pegClasses,
      style: {
        backgroundColor: pegStyling?.color ?? '#000',
        borderColor: pegStyling?.borderColor ?? '#333',
      },
      'aria-label': ariaLabel,
    },
    size !== 'small' && showIcon && getIcon(color, showIcon),
  );
};
