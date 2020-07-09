import React, { Component } from 'react';
import { connect } from 'react-redux';
import getBookings from './Bookings';
import postReducer from '../reducer/postReducer';


class Oders extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount(){
        this.props.getBookings();
    }

    render() {
        let filteredItems = this.props.items
        console.log(filteredItems)
        return (
            <div>
                {filteredItems.map(item => 
                    <div key={item.id}>
                        <div>
                        <label>Name:</label>{item.name}
                        </div>
                    </div>
                    )}
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