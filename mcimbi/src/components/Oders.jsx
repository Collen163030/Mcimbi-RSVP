import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBookings } from './Bookings';
import postReducer from '../reducer/postReducer';


class Oders extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        this.props.getBookings();
    }

    render() {
        let filteredItems = this.props.items
        console.log("I'm filtered Items", filteredItems)
        return (
            <div className="Ticket-container">
                {filteredItems.map(item =>
                    <div key={item.id} className="Ticket-wrapper">
                            <strong><label>{item.name}  {item.surname}</label></strong><br />
                           <label><strong>{item.event}</strong>: {item.email}</label>
                    </div>
                )}
    
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    items: state.bookings.items,
})

const mapDispatchToProps = dispatch => ({
    getBookings: () => {
        dispatch(getBookings())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Oders);