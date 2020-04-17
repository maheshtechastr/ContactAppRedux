'';
import {ADD_CONTACT, DELETE_CONTACT} from './types.js';

export const createContact = (contact) => {
	return {
		type : ADD_CONTACT,
		contact : contact
	}
}


