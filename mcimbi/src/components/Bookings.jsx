import axios from 'axios';
import FETCH_POSTS from '../actions/types';

export  const getBookings = () => {
    return async dispatch => {
        try {

            const data = await axios.get("https://jsonplaceholder.typicode.com/users");
            const bookings = await data;

            console.log("I'm data", bookings)
            dispatch({
                type: FETCH_POSTS,
                payload: [...bookings.data]
            })
        }
        catch(e){
            console.log(e)
        }
    }
}

export default {getBookings}