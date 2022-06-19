import React from 'react';
import styled from 'styled-components';
import { Button } from './Components/Button';

const Wrapper = styled.div`

width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

    
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        
        <Button primary>Primary Button</Button>
        <Button >Default Button</Button>
        <Button dashed>Dashed Button</Button>
        <Button text>Text Button</Button>
        <Button link>Link Button</Button>

        </Wrapper>
     
    </div>
  );
}

export default App;
