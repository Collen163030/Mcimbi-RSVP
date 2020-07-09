import React, { Component } from 'react';
import { connect } from 'react-redux';
import getBookings from './Bookings'
import postReducer from '../reducer/postReducer'
class Oders extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <h1>Posts</h1>
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