export type ContactFormData = {
	firstName: string;
	email: string;
	organization: string | null;
	website: string | null;
	subject: string | null;
	message: string;
	sendACopy: boolean;
};
