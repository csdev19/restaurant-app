import React, { VoidFunctionComponent } from 'react';
import Container from '@atoms/Container/Container';
import Section from '@atoms/Section';

const PresentationSection: VoidFunctionComponent = () => {
  return (
    <Section className="relative flex bg-red" style={{ height: '800px' }}>
      <Container className="m-auto z-10">
        <div>
          Llevo mas de 3 años trabajando en el sector de la tecnología,
          desarrollando
        </div>
      </Container>
    </Section>
  );
};

export default PresentationSection;
