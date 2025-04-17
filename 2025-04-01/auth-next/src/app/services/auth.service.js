const BASE_URL = "http://localhost:4000/auth";

export const login = async (email, password) => {
    try {
        const request = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email, password)
        });
        const response = await request.json();
        if (request.ok && request.status === 200) {
            console.log("Response: ", response);
            localStorage.setItem('AUTH_TOKEN', response.token);
            return { error: false };
        }

        return { error: true, data: response };
    } catch (error) {

        console.log("Error: ", error);
        return {
            error: true,
            message: error.message || 'Unknow error'
        };
    }
}

export const register = async (email, password, fullName, confirm_password) => {
    try {
        const request = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email, password, fullName, confirm_password)
        });
        const response = await request.json();
        if (request.ok && request.status === 200) {
            console.log("Response: ", response);
            return { error: false };
        }

        return { error: true, data: response };
    } catch (error) {

        console.log("Error: ", error);
        return {
            error: true,
            message: error.message || 'Unknow error'
        };
    }
}