import React, { useRef, useState } from 'react';
import { isPropertySignature } from 'typescript';

interface Props {
    text: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}




export const RequestField: React.FC<Props> = ({text, handleChange}) =>{
    const [form, setForm] = useState({
        inputValue: ''
      })
    
      const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
      }
    
      const showState = () => {
        console.log(form)
      }


    const inputRef = useRef<HTMLInputElement >(null);
    return (
        <div>
            <input type="text" ref={inputRef} name='inputValue' placeholder={text} onChange={changeHandler}/>
            <button onClick={showState}>ShowState</button>
        </div>
    );
}
