import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBooking, getBookings } from './Bookings'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            surname: "",
            event: ""
        }
    }
    onSubmit = (name, email, surname, event) => {
        const { items } = this.props
        for (var i in items) {
            if (items[i].name === name) {
                return alert("Oops the name is taken.. try a different one")
            }
        }
            if (this.state.name <= 0) {
                return alert("Please enter name")
            }
            if(this.state.surname <= 0){
                return alert("Please enter surname")
            }
            if(this.state.email <= 0){
                return alert("Please enter email address")
            }
            if(this.state.event <=0){
                return alert("Please enter an event")
            }
        this.props.addBooking(name, email, surname, event)
        this.setState({
            ...this.state,
            name: "",
            email: "",
            surname: "",
            event: ""
        })
        this.props.getBookings()

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBack = () => {
        window.location.reload();
    }

    render() {
        const { email, name, surname, event } = this.state
        return (
            <div className="form" >
                <button onClick={this.handleBack}>
                    <i class="fa fa-arrow-circle-left"></i>
                </button>
                <p>Kindly fill in the form to book your space:</p>
                <form className="Form-container" >
                    <br />
                    <label>Name</label><br />
                    <input type="text" name="name" id="name" placeholder="First Name"
                        onChange={this.onChange}
                        value={name}
                    />
                    <br />
                    <label>Surname</label><br />
                    <input type="text" name="surname" id="surname" placeholder="Surname"
                        onChange={this.onChange}
                        value={surname}
                    />
                    <br />
                    <label>Email</label><br />
                    <input type="email" name="email" id="email" placeholder="email"
                        onChange={this.onChange}
                        value={email}
                        aria-describedby="emailHelp"
                    />
                    <br />
                    <input type="text" name="event" id="event" placeholder="Event name"
                    onChange={this.onChange} value={event}/>
                </form>
                <button onClick={() => this.onSubmit(name, surname, email, event)} className="Submit">
                    <i class="fa fa-send-o">Sumbit</i>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.bookings.items,
})

const mapDispatchToProps = dispatch => ({
    addBooking: (name, surname, email, event) => {
        dispatch(addBooking(name, surname, email, event))
    },
    getBookings: () => {
        dispatch(getBookings())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);