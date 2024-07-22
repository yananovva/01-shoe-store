import './Input.css';
import {useState} from "react";

function Input() {
    const [inputData, setInputData] = useState('');
    const inputChange = (event) => {
        setInputData(event.target.value);
    }
    return (
        <input className='search'
               placeholder="Search by title"
               type="text"
               value={inputData}
               onChange={inputChange}>
        </input>
    );
}

export default Input;