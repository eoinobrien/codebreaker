import classnames from 'classnames';
import { ChangeEvent, ReactNode } from 'react';
import styles from './Switch.module.css';

interface SwitchProps {
  id: string;
  value: number;
  options: (string | ReactNode)[];
  shortLabels?: boolean;
  onChange: (newValue: number) => void;
}

export const Switch = ({
  id,
  value,
  options,
  shortLabels = false,
  onChange,
}: SwitchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value));
  };

  var switchClasses = classnames(styles.switch, {
    [styles.noColumns]: shortLabels,
  });

  return (
    <div className={switchClasses}>
      {options.map((option, index) => {
        var labelDivClass = classnames(styles.labelDiv, {
          [styles.checked]: value === index,
        });
        return (
          <div key={index} className={labelDivClass}>
            <input
              type="radio"
              id={`${id}-${index}`}
              name={id}
              value={index}
              onChange={handleChange}
              checked={value === index}
            />
            <label htmlFor={`${id}-${index}`} className={styles.label}>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};
