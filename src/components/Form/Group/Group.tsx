import { ReactNode } from 'react';

interface GroupProps {
  label?: string;
  children: ReactNode | ReactNode[];
}

export const Group = ({ label, children }: GroupProps) => {
  return (
    <div>
      <label>
        <h2>{label}</h2>
        <div>{children}</div>
      </label>
    </div>
  );
};
