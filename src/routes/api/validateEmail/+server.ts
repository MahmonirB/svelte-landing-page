import { validateEmail } from "../../../utils/validateEmail";

interface BodyData {
	email: string;
}

export const validateEmailService = async ({ data }: { data: BodyData }): Promise<unknown> => {
	try {
        if (!data?.email) throw new Error('Bad request');

        return new Promise(resolve => resolve({
            status: 200,
            body: {
                isValidEmail: validateEmail(data.email),
            }
        }));
    } catch (error) {
        return {
            status: 500,
            body: {
                error: 'Internal Server Error'
            }
        };
    }
};
