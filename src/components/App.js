import React, { useState } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import ScoreBoard from './ScoreBoard';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom'; 

  const Main = styled.div`
    width: 100%;
    height: 100vh;
`;

const App = () => {

  const [mode, setMode] = useState('light')

    const toggleMode = () => {
        if ( mode === 'light' )
            setMode('dark')
        else
            setMode('light')   
    }

  return (
    <>
      <Main className={`bg-${mode === 'light' ? 'light' : 'dark'} text-${ mode==='light' ? 'dark' : 'light'}`}>
        <Navbar mode={ mode } toggleMode = { toggleMode } />
        <Switch>
          <Route exact path="/" component={ () => <Login mode={ mode } />} />
          <Route exact path="/score@board$card&records" component={ () => <ScoreBoard mode={ mode } /> } />
        </Switch>
      </Main>
    </>
  )
}

export default App;
