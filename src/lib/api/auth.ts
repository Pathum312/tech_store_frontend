import { BACKEND_URL } from '$lib';
import axios from 'axios';

interface loginPayload {
	email: string;
	password: string;
}

interface registerPayload {
	name: string;
	username: string;
	email: string;
	password: string;
	role: string;
	street?: string;
	city?: string;
	state?: string;
	zip?: any;
	country?: string;
}

export const login = async (payload: loginPayload): Promise<any> => {
	const { email, password } = payload;
	const response = await axios.post(`${BACKEND_URL}/auth/login`, { email, password });
	return response;
};

export const logout = async (payload: any): Promise<any> => {};

export const register = async (payload: registerPayload): Promise<any> => {
	const { name, username, email, password, role, street, city, state, zip, country } = payload;
	let data: any = {
		name,
		username,
		email,
		password,
		role,
	};
	if (role === 'CLIENT')
		data['address'] = {
			street,
			city,
			state,
			zip,
			country,
		};
	const response = await axios.post(`${BACKEND_URL}/auth/register`, data);
	return response;
};
