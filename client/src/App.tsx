import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Button from './components/button/button.component';



function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className='mainButtons'>
        <Button text='Specialty Drinks' color='green'/>
        <Button text='Delicious Food' color='blue'/>
      </div>
    </div>
  );
}

export default App;
