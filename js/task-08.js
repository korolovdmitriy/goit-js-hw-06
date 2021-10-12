const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
    event.preventDefault();
    const dataFormResult = {};
    
    if (event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === '') return alert('все поля должны быть заполнены.');
 
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        dataFormResult[name] = value;
        
    });
    
    console.log(dataFormResult);
    loginForm.reset();
}