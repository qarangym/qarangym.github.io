const doc = document
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let obj = JSON.parse(value)
    document.write(`
    <div class="container">
      <h1>${key}</h1>
      <p><code>${obj.name} ${obj.surname}</code></p>
      <p>email:${obj.email} and password:${obj.password}</p>
      <button class="delete-btn" onclick="deleteContainer(this.parentNode)">Delete Content</button>
      <button class="add-btn" onclick="addUser()">Add User</button>
      <button class="edit-btn" onclick="editContainer()">Edit</button>

    </div>
  `);

} 
function deleteContainer(container) {
    // Check if container is provided
    if (container) {
        var key = container.querySelector('h1').textContent;

        // Remove the container from the DOM
        container.parentNode.removeChild(container);

        // Remove the corresponding item from localStorage
        localStorage.removeItem(key);
    } else {
        console.log('Container not found.');
    }
}

function editContainer() {
    var element = document.querySelector('.container');
    key = element.querySelector('h1').textContent;
    let value = localStorage.getItem(key);
    let obj = JSON.parse(value);
    element.innerHTML = `
    <form id="form-${key}">
        <h1>${key}</h1>
        <label for="name">Name:</label>
        <input type="text" id="name-${key}" value="${obj.name}"><br><br>
        <label for="surname">Surname:</label>
        <input type="text" id="surname-${key}" value="${obj.surname}"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email-${key}" value="${obj.email}"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password-${key}" value="${obj.password}"><br><br>
        <button class="submit-btn" onclick="subEdit()">Finish editing</button>
    </form>
    `;
}

function subEdit() {
    const storage = localStorage;
    var data = {
        name: document.getElementById('name-' + key).value,
        surname: document.getElementById('surname-' + key).value,
        password: document.getElementById('password-' + key).value,
        email: document.getElementById('email-' + key).value,
    };
    // Assuming the existence of a check function
    var id = key; // Use the existing key instead of generating a new one
    var jsonData = JSON.stringify(data);
    storage.setItem(id, jsonData);
    // Assuming the existence of a hideForm function
    hideForm();
    alert("User was edited");
}


function addUser() {
        var form = document.createElement('form');
  
        // Create and append the form elements (labels, inputs, and submit button)
        form.innerHTML = `
        <div class="container">

          <label for="name">Name</label><br>
          <input type="text" id="name" name="name" required><br><br>
          <label for="surname">Surname</label><br>
          <input type="text" id="surname" name="surname" required><br><br>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email" required><br><br>
          <label for="password">Password:</label><br>
          <input type="password" id="password" name="password" required><br><br>
          <input type="button" id="submitin" value="Submit" onclick="submitForm()">

          </div>
        `;
        
        // Append the form to the document
        document.getElementById('main').appendChild(form);
}
        function submitForm() {
            const storage = localStorage;
            var data = {
                name: document.getElementById('name').value,
                surname: document.getElementById('surname').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email').value,
            };
            if (!check(data.email)) {
                return alert("This account already exists");
            }
            var id = 'user' + Date.now();
            var jsonData = JSON.stringify(data);
            storage.setItem(id, jsonData);
            hideForm();
            alert("User was add");
        }
      
        function check(mail) {
            const storage = localStorage;
            for (let key in storage) {
                if (!storage.hasOwnProperty(key)) continue;
                var item = JSON.parse(storage.getItem(key));
                if (mail === item.email) {
                    return false;
                }
            }
            return true;
        }
        function hideForm() {
            var formContainer = document.querySelector('.container');
            formContainer.classList.add('hidden');
        }

        function adminValidation() {
            
          }