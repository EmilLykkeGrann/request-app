import React, { Component } from 'react';

class InputField extends Component {
    render() { 
        return (
            <div >
                <input id={this.props.inputField.id} placeholder={this.props.inputField.value}/>
                {/* <button onClick={() => this.props.onDelete(this.props.inputField.id)}>Slet</button> */}
                
            </div>
        );
    }
}
 
export default InputField;