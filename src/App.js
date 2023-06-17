import './App.css';
import Navbar from './component/Navbar';
import TextBox from './component/TextBox';

function App() {
  return (
    <>
    <Navbar companyName="Toodle" homeName="Home" />
    <TextBox textboxHeading="Enter your text here" />
    </>
  );
}

export default App;
