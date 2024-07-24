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
      <Button text='A button' color='blue'/>
      <img 
        src={require('./images/main-food-drink.png')}
        alt='food right drink left'
      />
    </div>
  );
}

export default App;
