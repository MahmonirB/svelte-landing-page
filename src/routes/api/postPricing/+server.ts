import axios from 'axios';
import { BASE_URL } from '../../../constants';

interface BodyData {
	interval: 'monthly' | 'yearly';
}

export const postPricing = async ({ data }: { data: BodyData }) => {
	try {
		const response = await axios.post<BodyData>(BASE_URL, { interval: data.interval });

		const responseData = response.data;

		return {
			status: 200,
			data: {
				responseData
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'Internal Server Error'
			}
		};
	}
};
