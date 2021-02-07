
import React, { Component } from 'react';
const axios = require('axios');

class App extends Component {
    constructor(props){
        super(props);
        this.state = {value: '', data: '', data2:''};
    }

    async handleChange (event) {

        this.value = await strapi.plugins.email.services.email.send({
            to: 'alloyking1@gmail.com',
            from: 'admin@strapi.io',
            subject: 'testing email',
            text: `i am testing this email sending feature`,
        });

        console.log("email sent")

        //   this.data = await axios.get('http://localhost:1337/article-categories/count');
        // this.data2 = await axios.get('http://localhost:1337/my-custom-plugin/email');

        //   await console.log(this.data);
    }
    
    render() {
        return (
            <div className="App container pt-5">
                <h2>My Email list plugin</h2>
                <p>{this.state.value}</p>

                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        
                    </div>
                    <button type="submit" class="btn btn-primary">Send Email</button>
                </form>
                
            </div>
        );
    }
}

export default App;