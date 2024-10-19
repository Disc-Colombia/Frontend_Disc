import { DemoRequestProps } from "../type/type";

export class DemoRequestError extends Error {
    status: number | undefined;

    constructor(message: string, status?: number) {
        super(message);
        this.name = 'DemoRequestError';
        this.status = status;
    }
}

export const demoRequest = async ({ token, data }: DemoRequestProps): Promise<{ success: boolean }> => {
    try {
        const response = await fetch(`${import.meta.env["VITE_API_URL"]}/request-demo-info`, {
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
            throw new DemoRequestError(`HTTP error! status: ${response.status}`, response.status);
        }

        const result = await response.json();

        if (!result.success) {
            throw new DemoRequestError('CAPTCHA verification failed');
        }

        return result;
    } catch (error) {
        if (error instanceof DemoRequestError) {
            throw error; // Re-throw our custom error
        }
        // For network errors or other unexpected issues
        throw new DemoRequestError('Failed to make request', undefined);
    }
};