import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='allContent'>
        <div className='content'>
          <MainContent title = "Mon 1er article" description = "Sujet de mon article" text = "hdjbfhgsbdfkghblshgbdfhbgdlsfhgbdhlsfbghfbghdfbgdfhbglhdfbghjdfb  gbdfbhfb gdf   bfdhgb fhg bdfhjbg hfbg hfbg dfhbg df bdkjf gbdfbg dhfbghdfb hfdbg bhb dfgn dkjfgndfjn gjdfng kjdfngkjfen kjgfndfg"/>
          <MainContent title = "Mon 2eme article" description = "Sujet de mon article" text = "hdjbfhgsbdfkghblshgbdfhbgdlsfhgbdhlsfbghfbghdfbgdfhbglhdfbghjdfb  gbdfbhfb gdf   bfdhgb fhg bdfhjbg hfbg hfbg dfhbg df bdkjf gbdfbg dhfbghdfb hfdbg bhb dfgn dkjfgndfjn gjdfng kjdfngkjfen kjgfndfg"/>
        </div>
        <div className="sideContent">
        <SideContent/>
        </div>
      </div>
      <Footer tech = "React" society = "Le Reacteur" name = "Clément"/>
    </div>
  );
}

export default App;
