import { ReactNode } from 'react';

interface GroupProps {
  label?: string;
  children: ReactNode | ReactNode[];
  id: string;
}

export const Group = ({ label, children, id }: GroupProps) => {
  return (
    <div>
      <label htmlFor={id}>
        <h2>{label}</h2>
      </label>
      <div id={id}>
        {children}
      </div>
    </div>
  );
};
