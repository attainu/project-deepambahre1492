import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe'


class ContactForm extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
    name: '',
    email: '',
    contactNo: '',
    feedback: ''
	}
  }
  iframe() {
    return {
      __html: this.props.iframe
    }
  }
  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:5000/api/contact", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent. Thank you"); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }
  resetForm(){
    
     this.setState({name: "", email: "", contactNo: "", feedback: ""})
  }
  

  render() {
	return(
        <div className="form" id="ContactUs">
            <div className="row justify">
                <div className="col-md-5">
               
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.211910527454!2d75.9200777142773!3d22.75751573189443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d5e3df3b7c5%3A0x6e889108b14d5ce5!2sbcm%20planet!5e0!3m2!1sen!2sin!4v1601317387492!5m2!1sen!2sin"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
                
                </div>
                <div className="col-md-5 col-md-offset-1">      
        <div className="form--title">
            <h1>Contact Form</h1>
        </div>

        <Form className="form--contact" onSubmit={this.handleSubmit.bind(this)} method="POST">

            <Form.Group controlId="formBasicEmail">
                <Form.Control 
                    type="name" 
                    placeholder="Enter your name"  
                    value={this.state.name} 
                    onChange={this.onNameChange.bind(this)} 
                />   
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Control 
                    type="email" 
                    placeholder="Enter your email"  
                    value={this.state.mail} 
                    onChange={this.onEmailChange.bind(this)} 
                />   
            </Form.Group>

            <Form.Group controlId="formBasicContact">
                <Form.Control 
                    type="number" 
                    placeholder="Enter your Contact Number"  
                    value={this.state.contactNo} 
                    onChange={this.onContactNoChange.bind(this)} 
                />   
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control 
                    as="textarea" 
                    rows="3" 
                    placeholder="How can we help you ?"
                    value={this.state.feedback} 
                    onChange={this.onfeedbackChange.bind(this)} 
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
      </Form>
      </div>
            </div>
        </div>
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }
  onContactNoChange(event) {
    this.setState({contactNo: event.target.value})
    }

onfeedbackChange(event) {
	this.setState({feedback: event.target.value})
  }
}



export default ContactForm;