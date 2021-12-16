import React, { Component } from 'react';
import "../common/home.css";
import InputFields from './inputFields';

class Home extends Component {
    state = {
        inputFields: [
            { id: 1, value: 0 },
            { id: 2, value: 3 },
        ]
    }
    
    handleAdd = inputField => {
        
        const inputFields = [...this.state.inputFields, {id: this.state.inputFields.length+1, value:0 }];
        
        this.setState({ inputFields: inputFields });
    };

   
    handleReset = () => {
        const inputFields = this.state.inputFields.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ inputFields: inputFields });
    };

    handleDelete = (inputFieldId) => {
        const inputFields = this.state.inputFields.filter(c => c.id !== inputFieldId);
        this.setState({ inputFields: inputFields });
    };


    

    render() {
        const {onReset, requests, onDelete, onAdd} = this.props;
        return (
            <main>
                <div className="top">
                    <input type="text" />
                    <button className="btn btn-primary" width="50px" height="50px" onClick={() => this.props.onAdd(this.props.request)}>Plus</button>
            </div>
                <div className="inputFields">

                        {requests.map(request=>
                            <InputFields
                            key={request.id}
                            inputFields={this.state.inputFields}
                            onReset={this.handleReset}
                            onDelete={this.handleDelete}
                            onAdd={this.handleAdd}
                        />
                        )}

                    
                </div>
            </main>
        );
    }
}

export default Home;