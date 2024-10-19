import { ContactRequestProps } from "../type/type";

export class ContactRequestError extends Error {
    status: number | undefined;

    constructor(message: string, status?: number) {
        super(message);
        this.name = 'ContactRequestError';
        this.status = status;
    }
}

export const contactRequest = async ({ token, data }: ContactRequestProps): Promise<{ success: boolean }> => {
    try {
        const response = await fetch(`${import.meta.env["VITE_API_URL"]}/contact-form-submit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token,
                data,
            }),
        });

        if (!response.ok) {
            throw new ContactRequestError(`HTTP error! status: ${response.status}`, response.status);
        }

        const result = await response.json();

        if (!result.success) {
            throw new ContactRequestError('CAPTCHA verification failed');
        }

        return result;
    } catch (error) {
        if (error instanceof ContactRequestError) {
            throw error; // Re-throw our custom error
        }
        // For network errors or other unexpected issues
        throw new ContactRequestError('Failed to make request', undefined);
    }
};