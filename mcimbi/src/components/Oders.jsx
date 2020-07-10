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
        console.log("items", this.props.items)
    }

    render() {
        let filteredItems = this.props.items
        console.log("I'm filtered Items", filteredItems)
        return (
            <div>
                {filteredItems.map(item =>
                    <div key={item.id}>   
                            <strong>{item.name}  {item.surname}</strong><br />
                            <label><strong>{item.event}</strong></label><br/>
                            <label>{item.email}</label><br/>
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