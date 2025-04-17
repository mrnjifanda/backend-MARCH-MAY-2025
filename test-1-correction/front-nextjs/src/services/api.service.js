const baseUrl = 'http://localhost:3001/api';

export const api = async (path, method = 'GET', body = null) => {
    try {
        const options = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }

        if (body) {
            options.body = JSON.stringify(body)
        }

        const request = await fetch(`${baseUrl}/${path}`, options);
        const response = await request.json();
        return response;
    } catch (error) {
        return {
            error: true,
            message: error.message ?? 'Internal Error'
        }
    }
}
