const formulario = document.querySelector(".login-form")

formulario.addEventListener("submit", function (alerta){
    alerta.preventDefault();

    const mail = formulario.elements.email;
    const passw = formulario.elements.password;
    
    if (mail.value.trim() === "" || passw.value.trim() === "") {
        alert("Todos los espacios deben ser rellenados");
    } else {
        const user = {
            email: mail.value,
            password: passw.value,
        };

        loginForm.reset()
    }
});