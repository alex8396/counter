function Control({ onSetCount }) { // props로 onSetCount를 받음
    return (
        <div>
            <button onClick={() => onSetCount(-1)}>-1</button>
            <button onClick={() => onSetCount(-10)}>-10</button>
            <button onClick={() => onSetCount(-100)}>-100</button>
            <button onClick={() => onSetCount(0)}>0</button>
            <button onClick={() => onSetCount(100)}>+100</button>
            <button onClick={() => onSetCount(10)}>+10</button>
            <button onClick={() => onSetCount(1)}>+1</button>
        </div>
    );
}

export default Control;
