import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Button from '../../components/button/button.component';

import './home.styles.scss';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className='mainButtons'>
        <Button text='Specialty Drinks' color='green'/>
        <Button text='Delicious Food' color='blue'/>
      </div>
    </div>
  )
}

export default Home;
