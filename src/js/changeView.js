export let viewRoot = async ()=>{
    const divLogin = document.querySelector("#login");
    const divRoot = document.querySelector("#root");

    divLogin.style.display = "none";

    divRoot.style.display = "block";
   
}

export let viewlogin= async ()=>{
    const divLogin = document.querySelector("#login");
    const divRoot = document.querySelector("#root");

    divLogin.style.display = "block";

    divRoot.style.display = "none";
   
}