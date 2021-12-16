import React, { Component } from 'react';

import Home from './home';

class HomeWrapper extends Component {
    state = {
        requests: [
            { id: 1, value:0},
            { id: 2, value:0},
        ]
    }

    handleAdd = (request) => {
        
        const requests = [...this.state.requests, {id: this.state.requests.length+1, value:0 }];
        this.setState({ requests: requests });
    };

    handleReset = () => {
        const requests = this.state.requests.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ requests: requests });
    };

    handleDelete = (requestId) => {
        const requests = this.state.requests.filter(c => c.id !== requestId);
        this.setState({ requests: requests });
    };

    render() { 
        return (
            <Home
                    requests={this.state.requests}
                    onReset={this.handleReset}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    
                />
        );
    }
}
 
export default HomeWrapper;