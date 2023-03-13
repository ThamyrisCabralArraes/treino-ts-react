import React, { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ title = 'Subtitle', children }: SectionProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Section;
