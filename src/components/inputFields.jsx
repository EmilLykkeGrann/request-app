import React, { Component } from 'react';
import InputField from './inputField';
//30 min

class InputFields extends Component {
    render() { 
        const {onReset, inputFields, onDelete, onIncrement, onAdd} = this.props;
        return (
            <div>
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                <div className="test">
                    <div className="test">
                        {inputFields.map(inputField=>
                        <InputField 
                        key={inputField.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
                        inputField={inputField}
                        onAdd={onAdd}
                        />
                    )}
                    </div>
                    <button className="btn btn-primary btn-sm m-2" onClick={() => this.props.onAdd(this.props.inputField)}>plus</button>
                </div>
            </div>
        );
    }
}
 
export default InputFields;