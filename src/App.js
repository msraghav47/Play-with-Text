import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import FORM from './Components/FORM';
import About from './Components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  function showAlert(message,type)
  {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  function toggleMode()
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#163460';
      showAlert("Dark mode enabled !","success")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled !","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text Analyse" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container'>
      <Routes>
          <Route path="About" element={<About  mode={mode}/>} />
          <Route path="/" element={ <FORM  mode={mode} showAlert={showAlert} />} />
        </Routes>
    </div>
    </Router>
    </>
  )
};
export default App;
