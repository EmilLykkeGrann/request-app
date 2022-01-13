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


var i = 0;


export const RequestField: React.FC<Props> = ({text, handleChange}) =>{

    const [form, setForm] = useState({
        inputValue: ''
      });
    
      const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
      }
    
      // const changeHandlerText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        
      //   dispatch({type: "remove", idx: inputDivs.length-1});
      //   dispatch({type: "add", text: form.inputValue});
      // }
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

  
    async function sendRequest(endpoint:string ) {
      var base ="";
      if(i == 0){
        base = "https://api.dev.lunarway.com/mitid/authenticate/parameters?enableAppSwitch=true";
      } else{
        base = endpoint;
      }
      
      // const base = "https://google.com";
       const res = await fetch(base,{
         headers : {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
            // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization",
          "X-OS": 'ios',
            "X-AppVersion": '2.4.0',
            "X-DeviceId": 'deviceForAPITest',
            "X-Language": 'da',
            "X-AppID": 'com.lunarway.app.internal.debug'
         }
       });
      
      
       var final = await res.json();
       console.log(final)
       dispatch({type: "add", text: final.url});
       i++;
      }



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
            <div id="inputDivs_div">
            {inputDivs.map(fields =>{
              return (
                <div className='field'>
                  <textarea key={fields.id} id={fields.id.toString()} placeholder={makeUrl(fields.text,variable1.variable1, variable2.variable2)} />
                  <button className="btn btn-primary btn-sm distance" onClick={()=> sendRequest(makeUrl(fields.text,variable1.variable1, variable2.variable2))}>
                    Send request
                  </button>
                </div>
              );
            })}
            </div>
            
            
            
        </div>
    );
}

