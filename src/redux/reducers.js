import { combineReducers } from 'redux'

// const user = (state = [], action) => {
//     switch(action.type) {
//         case 'SET_USER':
//             console.log( action.type)
//             console.log( action.value)
//             const newState = [...state, action.value]
//             console.log(newState)
//             return newState
//         default: return state
// }}
const user = (state = null) => state;
const reservations = (state = null) => state;
const parks = (state = null) => state;
export default combineReducers({ user, reservations, parks })