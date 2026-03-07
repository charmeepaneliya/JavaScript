    document.getElementById("form").addEventListener("submit",(e)=>{
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const pwd = document.getElementById("pwd").value;

        const errorMessage = document.getElementById("alert");

        if(!name){
            return(errorMessage.textContent = "name is required");
            
        }
        if(!email){
            return(errorMessage.textContent = "email is required");

        }
       if(pwd.length < 6){
            return(errorMessage.textContent = "password is required");

        }
        errorMessage.textContent = "";
        alert("Form Submitted Successfully");
    })