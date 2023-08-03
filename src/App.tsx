import './App.scss';
import './reset.scss';
import InputBlock from './components/InputBlock';
import LocomotiveBlocks from './components/LocomotiveBlocks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <InputBlock />
        <LocomotiveBlocks />
        <Footer />
    </div>
  );
};

export default App;
