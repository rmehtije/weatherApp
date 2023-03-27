import { useState } from 'react';

function StandartComponent ({ firstName, lastName }) {
    console.log('standartComponent render');
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

    return (
        <div className="flex">
            <div>firstName: {firstName}</div>
            <div>lastName: {lastName}</div>
            <div>Count: {count}</div>
            <button onClick={() => setShow(!show)}>Trigger show</button>
            {show ? <ChildComponent count={count} setCount={setCount} /> : null}
        </div>
    );
}

StandartComponent.defaultProps = {
    lastName: "Mehtijev",
};

function ChildComponent({ count, setCount }) {
    console.log('ChildComponent');
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default StandartComponent;
