import axios from 'axios';
import { FETCH_POSTS, NEW_POST } from '../actions/types';

export const getBookings = () => {
    return async dispatch => {
        try {

            const data = await axios.get("http://localhost:3002/test");
            const bookings = await data;
            dispatch({
                type: "FETCH_POSTS",
                payload: [...bookings.data]
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const addBooking = (name, surname, email) => {
    return async dispatch => {
        try {
            console.log("adding from action", name, surname, email)
            const {data} = await axios.post("http://localhost:3002/test",  {name, surname, email} )
            dispatch({
                type: NEW_POST,
                payload: data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

// export default {getBookings}