
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title= "TextUtils" home ="home" about="About"/>
    <TextForm title="Enter the text below"/>
    </>
  );
}

export default App;
