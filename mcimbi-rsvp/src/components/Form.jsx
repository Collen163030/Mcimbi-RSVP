import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            surname: "",
        }
    }
    onSubmit = () => {

        console.log("I'm state", this.state)
        // window.location.reload();

    }

    handleBack = () => {
        window.location.reload();
    }
    render() {
        // const {info}=this.state
        return (
            <div className="form" >
                <button onClick={this.handleBack}>
                    <i class="fa fa-arrow-circle-left"></i>
                </button>
                <p>Kindly fill in the form to book your space:</p>
                <form className="Form-container" >
                    <br />
                    <input type="text" name="name" id="name" placeholder="First Name"
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <br />
                    <input type="text" name="surname" id="surname" placeholder="Surname"
                        onChange={(e) => this.setState({ surname: e.target.value })}
                    />
                    <br />
                    <input type="email" name="email" id="email" placeholder="email"
                        onChange={(e) => this.setState({ email: e.target.value })}
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