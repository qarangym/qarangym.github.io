function check(mail) {
    for (let key in storage) {
        if (!storage.hasOwnProperty(key)) continue; // To avoid iterating over non-own properties
        var item = JSON.parse(storage.getItem(key));
        if (mail === item.email) {
            return false;

        }
    }
    return true;
}
function findkey(mail) {
    for (let key in storage) {
        if (!storage.hasOwnProperty(key)) continue; // To avoid iterating over non-own properties
        var item = JSON.parse(storage.getItem(key));
        if (mail === item.email) {
            return key;
        }
    }
}



document.getElementById('signinf').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var email = document.getElementById('emailin').value; // Use document instead of submit
  var password = document.getElementById('passwordin').value; // Use document instead of submit
  document.getElementById('loginError').textContent = '';
  if (!check(email)) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      let obj = JSON.parse(value);
      if (obj.password === password && obj.email===email) {
        var data = { email: email, name:obj.name,surname:obj.surname}; // Define the data object if it's not already defined
        var url = 'cab.html?' + new URLSearchParams(data);
        window.location.href = url;
      }
      
    }
  }{ 
   
    document.getElementById('loginError').textContent = 'Invalid email or password';
      }
});
