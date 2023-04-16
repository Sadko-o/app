import React from 'react';
import Head from './components/navbar';
import Sidebar from './components/sidebar';
import Content from './components/content';
import logo from '../src/assets/stpLogo.svg';
import './index.sass'

function App() {
  return (
    <div className="App">
      <img src={logo} alt='' className='logo'/>
      <Head />
      <div className='main'>
        <Sidebar/>
        <div className='content'>
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default App;
