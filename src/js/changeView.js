export let viewRoot = async ()=>{
    const divLogin = document.querySelector("#login");
    const divRoot = document.querySelector("#root");
    const divPassword = document.querySelector("#formPassword");

    divLogin.style.display = "none";

    divRoot.style.display = "block";

    divPassword.style.display = "none";

}

export let viewlogin= async ()=>{
    const divLogin = document.querySelector("#login");
    const divRoot = document.querySelector("#root");
    const divPassword = document.querySelector("#formPassword");

    divLogin.style.display = "block";

    divRoot.style.display = "none";
    
    divPassword.style.display = "none";
   
}


export let viewPassword= async ()=>{
    const divLogin = document.querySelector("#login");
    const divRoot = document.querySelector("#root");
    const divPassword = document.querySelector("#formPassword");

    divLogin.style.display = "none";

    divRoot.style.display = "none";
    
    divPassword.style.display = "block";
   
}