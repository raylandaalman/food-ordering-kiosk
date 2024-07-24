import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import MainButtons from './components/mainButtons/mainButtons.component';



function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <MainButtons />
      <img 
        src={require('./images/main-food-drink.png')}
        alt='food right drink left'
      />
    </div>
  );
}

export default App;
