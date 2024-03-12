import React from 'react';
import Main from './Layouts/Main';
import { Home } from '../src/Templates/Home'; // Importa o componente Home nomeado

function App() {
  return (
    <Main>
      <Home />
    </Main>
  );
}

export default App;
