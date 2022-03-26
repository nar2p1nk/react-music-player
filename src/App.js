import './App.css';
import {
  BsArrowBarRight,
  BsArrowBarLeft,
  BsFillPauseFill,
  BsFillPlayBtnFill} from 'react-icons/bs';
import {useState} from 'react';

function App() {
  const [status,setStatus] = useState(true);

  const changeStatus=()=>{
    setStatus(!status)
  };
  return (
    <div className="App">
      <h1>welcome to react</h1>
      <div>
        <h1>
          <BsArrowBarLeft/>
          {
            status === true
          ? <BsFillPlayBtnFill onClick={changeStatus}/>
          : <BsFillPauseFill onClick={changeStatus}/>
          }
          <BsArrowBarRight/>
        </h1>
      </div>
    </div>
  );
}

export default App;
