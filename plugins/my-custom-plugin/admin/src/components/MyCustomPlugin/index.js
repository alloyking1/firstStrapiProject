
import React, { Component } from 'react';
const axios = require('axios');

class App extends Component {
    constructor(props){
        super(props);
        this.state = {emailAddress: '', emailBody: ''};
    }

    handleChange = (event) => {
        
        axios.post('http://localhost:1337/email/create', {
            emailAddress: this.state.emailAddress,
            emailBody: this.state.emailBody
        }).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
            
        strapi.notification.success('Email sent successfully!');
        event.preventDefault();
    }

    bindEmailEvent = (event) => {
        this.setState({emailAddress: event.target.value});
    }

    bindBodyEvent = (event) => {
        this.setState({emailBody:event.target.value})
    }
    
    render() {
        return (
            <div className="App container pt-5">
                <h2>My Email list plugin</h2>
                <p>{this.state.value}</p>

                <form onSubmit={this.handleChange}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" value={this.state.emailAddress} onChange={this.bindEmailEvent} placeholder="name@example.com"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" value={this.state.emailBody} onChange={this.bindBodyEvent} rows="3"></textarea>
                        
                    </div>
                    <button type="submit" class="btn btn-primary p-3">Send Email</button>
                </form>
                
            </div>
        );
    }
}

export default App;