import {
    ADD_CUST_NAME, ADD_CUST_EMAIL
} from '../actions/actionTypes'

export default function customer( custInfo = [], action) {
    switch(action.type){
        case ADD_CUST_NAME:
            return [
                ...custInfo,
                {
                    text: action.text,
                    
                }
            ]    

        case ADD_CUST_EMAIL:
            
        default:
            return custInfo
    }
}