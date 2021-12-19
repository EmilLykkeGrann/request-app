import * as React from 'react';
import { RequestField } from './requestField';
import "../common/home.css"

const Home: React.FC = () =>{
    return (
        <div className='HomeDiv'>
            <RequestField text="Placeholder" 
            
            handleChange={e =>{
                
            }}
            
            />
        </div>
    );
}

export default Home;