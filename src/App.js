import { useState } from 'react';
import './App.css';
import Viewer from './Viewer';
import Control from './Control';

function App() {
  const [count, setCount] = useState(0);

  const onSetCount = (value) => {
     // value가 0일 경우 count를 0으로 설정
    setCount(value === 0 ? 0 : count + value);
  };

  return (
    <div className="App">
      <Viewer count={count} /> {/* count 값을 올바르게 전달 */}
      <Control onSetCount={onSetCount} /> {/* onSetCount를 props로 전달 */}
    </div>
  );
}

export default App;
