
// Interface para utilizar a API
export const apiRequest = async (path, method = 'GET', body) => {

    // Verifica se o token existe
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3000/api/' + path, {
        body: JSON.stringify(body),
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: token ? token : '',
        },
    });

    return await response.json();
};
