import { ADD_USER, UPDATE_USER } from '../actions';
import {combineReducers} from 'redux';

export default function reducers(users = [], action) {
    switch(action.type) {
        case ADD_USER:
            console.log(users);
            return [
                ...users,
                {
                    name: action.user.name,
                    email: action.user.email,
                    address: action.user.address,
                    city: action.user.city,
                    state: action.user.state,
                    zip: action.user.zip,
                    phone: action.user.phone
                }
            ]

        case UPDATE_USER:
            for(let i = 0; i<users.length; i++) {
                if (users[i].email === action.user.email) {
                    users[i].name = action.user.name;
                    users[i].email = action.user.email;
                    users[i].address = action.user.address;
                    users[i].city = action.user.city;
                    users[i].state = action.user.state;
                    users[i].zip = action.user.zip;
                    users[i].phone = action.user.phone;
                }
            }
            return users

        default:
            return users
    }
}