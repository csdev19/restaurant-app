import React, { FunctionComponent } from 'react';

type SectionProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const Section: FunctionComponent<SectionProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <section style={style} className={`${className}`}>
      {children}
    </section>
  );
};

export default Section;
