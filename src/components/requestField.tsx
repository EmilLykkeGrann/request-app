import React, { useRef, useState } from 'react';
import axios from 'axios';

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

function makeUrl(endpoint: string, variable1: string, variable2:string){

  // let total:string = endpoint +"?"+ variable1 + "&" + variable2;
  let total:string = endpoint ;
  return total;
}

function sendRequest(endpoint:string ) {
  let boom = axios.get("https://api.dev.lunarway.com/mitid/authenticate/parameters");
  console.log(boom);
}



export const RequestField: React.FC<Props> = ({text, handleChange}) =>{
    const [form, setForm] = useState({
        inputValue: ''
      });
    
      const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
      }
    

      const showState = () => {
        console.log(inputDivs);
        console.log(variable1.variable1 + " og " + variable2.variable2);
      }

      const [variable1, setVariable1] = useState({
        variable1: ''
      });
      const variable1Handler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVariable1({ ...variable1, [event.currentTarget.name]: event.currentTarget.value })
      }

      const [variable2, setVariable2] = useState({
        variable2: ''
      })
      const variable2Handler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVariable2({ ...variable2, [event.currentTarget.name]: event.currentTarget.value })
      }
    
    const inputRef = useRef<HTMLInputElement >(null);

    const [inputDivs, dispatch] = React.useReducer(DivsReducer, []);

    return (
        <div>
          

            <input type="text" ref={inputRef} name='inputValue' placeholder={text} onChange={changeHandler}/>
            <button className="btn btn-primary btn-sm distance" onClick={showState}>ShowState</button>

            <button className="btn btn-primary btn-sm distance"
            onClick={()=>{
                dispatch({type: "add", text: form.inputValue});
            }}
            >
                +
            </button>
            <button className="btn btn-primary btn-sm distance"
            onClick={()=>{
                dispatch({type: "remove", idx: inputDivs.length-1});
                
            }}
            >
                -
            </button>
            <br />
            <br />
            <input type="text"  name='variable1' onChange={variable1Handler}/>
            <br />
            <br />
            <input type="text"  name='variable2'  onChange={variable2Handler}/>

            {inputDivs.map(fields =>{
              return (
                <div className='field'>
                  <input type="text" key={fields.id} id={fields.id.toString()} placeholder={makeUrl(fields.text,variable1.variable1, variable2.variable2)}/>
                  <button className="btn btn-primary btn-sm distance" onClick={()=> sendRequest(makeUrl(fields.text,variable1.variable1, variable2.variable2))}>
                    Send request
                  </button>
                </div>
              );
            })}
            
            
        </div>
    );
}
function setTotalReactPackages(total: any): any {
  throw new Error('Function not implemented.');
}

function componentDidMount() {
  throw new Error('Function not implemented.');
}

