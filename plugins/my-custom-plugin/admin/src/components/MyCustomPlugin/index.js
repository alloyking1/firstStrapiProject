
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    async handleChange (event) {   
        // this.setState({value: event.target.value});

        await strapi.plugins['email'].services.email.send({
        to: 'alloyking1@gmail.com',
        from: 'admin@strapi.io',
        subject: 'testing email',
        text: `i am testing this email sending feature`,
      });

      await console.log("email sent");
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
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                
            </div>
        );
    }
}

export default App;