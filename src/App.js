import {useState, useEffect} from 'react';
import './App.css';
import Viewer from './Viewer';
import Controller from './Control';

function App() {
  var [count,setCount] = useState(0);
  var handleSetCount = (value) => {
    setCount(count + value);
  }

  const reset = () => {
    setCount(0);
  };

  useEffect( ()=>{console.log('업데이트')},[count]);

  useEffect( () => {
      console.log('Component unmounted');
      return () => {
        console.log('Component unmounted');
    };
  },[]);


  return (
    <div className="App">
      <Viewer count={count}/>
      <Controller handleSetCount={handleSetCount} reset={reset}/>
      <hr/>
    </div>
  );
}

export default App;