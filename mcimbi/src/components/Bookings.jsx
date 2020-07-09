import axios from 'axios';
import { FETCH_POSTS, NEW_POST } from '../actions/types';

export const getBookings = () => {
    return async dispatch => {
        try {

            const data = await axios.get("https://jsonplaceholder.typicode.com/users");
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

export const addBooking = (name, email) => {
    return async dispatch => {
        try {
            const data = await axios.post("http://localhost:3002/computer", { name, email })
            dispatch({
                type: "NEW_POST",
                payload: data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export default getBookings