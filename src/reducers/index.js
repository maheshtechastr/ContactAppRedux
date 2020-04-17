'';
import {ADD_CONTACT, DELETE_CONTACT} from '../actions/types';
import {} from '../actions/index';
import { combineReducers } from 'redux';

const initialState = {
	contactList:[],
	message:'Empty List',
}

const contacts = (state = initialState, action) => {
	switch(action.type){
		case ADD_CONTACT:
			return {
				...state,
				contactList: state.contactList.concat(action.data)
			};
		case DELETE_CONTACT:
			return {
				...state,
				contactList: state.contactList.re(action.data)
			};
		default:
			return initialState;
	}
}

// Combine all the reducers
export default combineReducers({
    contacts: contacts
});

