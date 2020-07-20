import {makeRequest} from './authHelpers.js';
import Auth from './auth.js';

// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
//     });

document.querySelector('form').onsubmit = login
function login(e) {
    e.preventDefault();

    const auth = new Auth();

    auth.login(getPosts);

    async function getPosts() {
        const posts = await makeRequest('posts', 'GET', null, auth.token)

        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            `
            document.getElementById('posts').appendChild(postDiv);
        })
    }
}


document.getElementById('createSubmit').addEventListener('click', () => {
    createPost();
  });
  async function createPost() {
    const form = document.forms.postForm;
    console.dir(form);
    if (form.title.validity.valid && form.content.validity.valid) {
      myErrors.clearError();
      const data = {
        title: form.title.value,
        content: form.content.value
      };
      try {
        const res = await makeRequest('posts', 'POST', data, myAuth.token);
        console.log('Post create:', data);
        form.title.value = '';
        form.content.value = '';
        getPosts();
      } catch (error) {
        myErrors.handleError(error);
      }
    } else {
      myErrors.displayError({ message: 'Title and Content are required' });
    }
  }
  
  