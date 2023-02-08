import { useState } from 'react';

const UseStateGotcha = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            console.log('clicked the button');
            console.log(`inside handler, before setState: ${value}`)
            setValue((oldValue)=> {
                console.log(`inside setValue: ${oldValue + 1}`)
                return oldValue+1
            });
            console.log(`inside handler, after setState: ${value}`)
        }, 3000)
    }
    console.log(`in render: ${value}`)
    return (
        <div>
            <h1>{value}</h1>
            <button className='btn' onClick={handleClick}>
                increase
            </button>
        </div>
    );
};

export default UseStateGotcha;
