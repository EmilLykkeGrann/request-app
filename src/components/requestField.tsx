
import React, { useRef, useState } from 'react';



interface Props {
    text: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type Actions = 
    | {type: "add"; text: string}
    | {
      type: "remove";
      idx: number;
    }

interface Divs{
  id: number;  
  text: string;
    
}

type State = Divs[];

const DivsReducer = (state: State, action: Actions) =>{
    switch(action.type){
      case "add":
        return [...state, {id: state.length+1, text: action.text}];
      case "remove":
        return state.filter((_,i)=> action.idx !== i);
      default:
        return state;
    }
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

    const [inputDivs, dispatch] = React.useReducer(DivsReducer, []);

    return (
        <div>
          

            <input type="text" ref={inputRef} name='inputValue' placeholder={text} onChange={changeHandler}/>
            <button onClick={showState}>ShowState</button>

            <button
            onClick={()=>{
                dispatch({type: "add", text: form.inputValue})
            }}
            >
                +
            </button>
            <button
            onClick={()=>{
                dispatch({type: "remove", idx: inputDivs.length-1})
            }}
            >
                -
            </button>
            {JSON.stringify(inputDivs)}
        </div>
    );
}
