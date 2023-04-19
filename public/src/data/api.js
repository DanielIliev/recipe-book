const hostname = 'http://localhost:3000';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    // Verify if data is passed to the request
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    // TODO verify user data when the server works with user data

    try {
        const request = await fetch(hostname + url, options);

        if (request.ok == false) {
            const error = new Error('Something went wrong!');
            throw error;
        }

        const data = await request.json();

        return data;

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');