import { BACKEND_URL } from '$lib';
import axios from 'axios';

interface Category {
	id: string;
	name: string;
	description: string;
}

export const fetchCategories = async (): Promise<string[]> => {
	// The userData is saved as a string the session strorage.
	// So we have to parse it back to a json object.
	const data = sessionStorage.getItem('userData');
	const userData = JSON.parse(`${data}`);
	const response = await axios.get(`${BACKEND_URL}/categories`, {
		headers: { Authorization: userData.token },
	});
	// We are only sending the names of the categories.
	let categories: string[] = [];
	// So loop through the array and only get the names of the categories.
	response.data.forEach((category: Category) => {
		categories = [...categories, category.name];
	});
	return categories;
};
