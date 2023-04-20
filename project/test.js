username = "Taco";
password = "Tacocat";
form = document.getElementById("login-form");
form.addEventListener("submit", (event) =>
{
    writtenUsername = document.getElementById("username-input").value;
    writtenPassword = document.getElementById("password-input").value;
    if(writtenUsername == username && writtenPassword == password)
    {
        event.preventDefault();
        window.location.href = "./loggedin.html"
    }
    else if(writtenUsername == username && writtenPassword != password)
        {
            event.preventDefault();
            alertCredentials = document.getElementById("wrong-credentials");
            alertCredentials.innerHTML = "<p>Password is Incorrect</p>";
            alertCredentials.style.display = "block";
            alertCredentials.style.border = "1px solid red"
            alertCredentials.style.color = "red";

        }
    else if(writtenUsername != username && writtenPassword == password)
        {
            event.preventDefault();
            alertCredentials = document.getElementById("wrong-credentials");
            alertCredentials.innerHTML = "<p>Username is Incorrect</p>";
            alertCredentials.style.display = "block";
            alertCredentials.style.border = "1px solid red"
            alertCredentials.style.color = "red";
        }
    else if(writtenUsername != username && writtenPassword != password)
    {
        event.preventDefault();
        alertCredentials = document.getElementById("wrong-credentials");
        alertCredentials.innerHTML = "<p>Both Credentials are Incorrect</p>";
        alertCredentials.style.display = "block";
        alertCredentials.style.border = "1px solid red"
        alertCredentials.style.color = "red";
    }
    setInterval(() => {alertCredentials.style.display = "none";}, 10000);
});
