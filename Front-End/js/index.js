
// version: 0.2
// async function handleAction(action, params = {}) {
//     let url = 'http://localhost:3000/api/';
//     const form = document.getElementById('form');

//     // Define a URL baseada na ação
//     switch (action) {
//         case 'register':
//             url += 'register';
//             form.style.display = 'block';
//             break;
//         case 'login':
//             url += 'login';
//             form.style.display = 'block';
//             break;
//         case 'getUsers':
//             url += 'users';
//             form.style.display = 'none';
//             break;
//         case 'getUser':
//             url += `users/${params.id}`;
//             form.style.display = 'none';
//             break;
//         case 'updateUser':
//             url += `users/${params.id}`;
//             form.style.display = 'block';
//             break;
//         case 'deleteUser':
//             url += `users/${params.id}`;
//             form.style.display = 'none';
//             break;
//         default:
//             console.error('Ação não reconhecida');
//             return;
//     }

//     if (form.style.display === 'block') {
//         form.onsubmit = async (e) => {
//             e.preventDefault();
//             const formData = new FormData(form);
//             const data = Object.fromEntries(formData);

//             let options = {
//                 method: action === 'register' || action === 'login' || action === 'updateUser' ? 'POST' : 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             };

//             if (action === 'deleteUser') {
//                 options.method = 'DELETE';
//                 delete options.body;
//             }

//             try {
//                 const response = await fetch(url, options);
//                 const result = await response.json();
//                 console.log(result);
//             } catch (error) {
//                 console.error('Erro:', error);
//             }
//         };
//     } else {
//         try {
//             const response = await fetch(url);
//             const result = await response.json();
//             console.log(result);
//         } catch (error) {
//             console.error('Erro:', error);
//         }
//     }
// }




// version: 0.1
document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            full_name: document.getElementById('full_name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    });
    const data = await response.json();
    console.log(data);
});

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: document.getElementById('loginEmail').value,
            password: document.getElementById('loginPassword').value
        })
    });
    const data = await response.json();

    if (data.token) {
        // Armazenar o token no localStorage
        localStorage.setItem('token', data.token);

        // Armazenar os dados do usuário no localStorage
        localStorage.setItem('user', JSON.stringify(data.user));

        // Exibe a mensagem de sucesso (da API)
        console.log(data.message);
    }
});

document.getElementById('getUserForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: 'GET',
    });
    const data = await response.json();
    console.log(data);
});

document.getElementById('deleteUserForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const userId = document.getElementById('deleteUserId').value;
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: 'DELETE',
    });
    console.log('Usuário excluído:', response.status);
});
