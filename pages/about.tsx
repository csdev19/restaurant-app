import React, { VoidFunctionComponent } from 'react';
import HeaderSection from '../organisms/HeaderSection/HeaderSection';
import PageTemplate from '../templates/PageTemplate/PageTemplate';

const Aboutme: VoidFunctionComponent = () => (
  <PageTemplate title="Acerca de mi | Cristian Sotomayor">
    <HeaderSection />

    <div className="container mx-auto sm:px-0 px-8 pt-40">
      <h1>ACERCA DE MI</h1>

      <div>
        <h3>Llevo desarrollando software profesionalmente hace 3 años</h3>
      </div>

      <div>
        <h3>Me encanta investigar, implementar y enseñar nuevas tecnologias</h3>
      </div>
    </div>
  </PageTemplate>
);

export default Aboutme;
