import React, { Component } from 'react';
// import Events from './Events'
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            surname: ""
        }
    }
    onSubmit = () => {
        
        console.log("I'm state", this.state)
    }
    onChange = (e) => {
        
        this.setState({[e.target.name]: e.target.value})
    }

    handleBack = () => {
        window.location.reload();
    }
    render() {
        const {email, name, surname}=this.state
        return (
            <div className="form" >
                <button onClick={this.handleBack}>
                    <i class="fa fa-arrow-circle-left"></i>
                </button>
                <p>Kindly fill in the form to book your space:</p>
                <form className="Form-container" >
                    <br />
                    <label>Name</label><br/>
                    <input type="text" name="name" id="name" placeholder="First Name"
                        onChange={this.onChange}
                    value={name}
                    />
                    <br />
                    <label>Surname</label><br/>
                    <input type="text" name="surname" id="surname" placeholder="Surname"
                        onChange={this.onChange}
                    value={surname}
                    />
                    <br />
                    <label>Email</label><br/>
                    <input type="email" name="email" id="email" placeholder="email"
                        onChange={this.onChange}
                    value={email}
/>
                    <br />
                </form>
                <button onClick={this.onSubmit} className="Submit">
                    <i class="fa fa-send-o">Sumbit</i>
                </button>
            </div>
        );
    }
}

Form.propTypes = {

};

export default Form;