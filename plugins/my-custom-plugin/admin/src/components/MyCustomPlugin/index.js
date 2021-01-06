import React, { Component } from 'react'

class MycustomPlugin extends Component {
    state = {
        file: null,
        type: null,
        options: {
            filename: null
        }
    };

    onChangeImportFile = file => {
        file &&
        this.setState({
            file,
            type: file.type,
            options: { ...this.state.options, filename: file.name }
        });
        console.log(this.state)
    }

    render(){
        // return <div><input name="file_input" accept=".csv" type="file" /></div>
        return <input onChange={
            ({target:{files}}) => files && this.onChangeImportFile(files[0])} name="file_input" accept=".csv" type="file" />;
        
    }

}
export default MycustomPlugin