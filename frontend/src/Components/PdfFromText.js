import React from 'react';
import axios from 'axios';

class Pdftext extends React.Component{
    constructor(){
        super();
        this.state = {content:''};
        this.updateState=this.updateState.bind(this);
        this.createPdf=this.createPdf.bind(this);
    }
    updateState(event){
        this.setState({[event.target.name]:event.target.value});
    }
    createPdf(){
        console.log(this.state);
        var payload=this.state;
        axios.post('http://localhost:9001/users',payload)
        .then(res=>{
            alert(res.body);
        })
        .catch(err=>{
            alert(err);
        })
    }
    render(){
        var {content}=this.state;
        return(
            <div>
                <h1>Welcome to my website.... Create PDF in a click!!!!</h1><br/><br/>
                <h3>Please enter your HTML content:</h3><br /><br />
                <form onSubmit={this.createPdf}>
                    <textarea placeholder="Enter HTML Text" rows='10' onChange={this.updateState} name='content' value={content}></textarea><br /><br />
                    <input type='submit' value='convert to pdf'></input>
                </form>
                <h1>{this.state.content}</h1>
            </div>
        )
    }
}

export default Pdftext;