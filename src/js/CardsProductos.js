

export let MakeCards = async (response)=>{
    
    const cards = document.querySelector(".cards");
    const modal= document.querySelector(".modal");
    const divLogin = document.querySelector("#login");

    divLogin.style.display = "none";

    let cardsTemplade = "";
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }

    response.forEach(p1 => {
        cardsTemplade += `
        <div class="card">
            <div class="card-Content">
                <div class="card-imagen">
                <img src="${p1.imagen}" class="cardImg" alt="ImagenCard"/>
                </div>
                <div class="card-info">
                    <div class="card-contenedor">
                        <h2 class="card-nombre">${p1.nombre}</h2> <br>
                        <h4 class="title2">Precio:</h4> 
                        <p class="card-precio">$${p1.precio}COP</p> <br>
                        <h4 class="title2">altura:</h4>
                        <p class="card-precio">${p1.altura}</p> <br>
                        <h4 class="title2">unidades:</h4>
                        <p class="card-precio">${p1.unidades}</p> <br>
                        <h4 class="title2">descripcion:</h4>
                        <p class="card-precio">${p1.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    `
    });

    cards.insertAdjacentHTML("beforeend", cardsTemplade)
    

    // modal.classList.add('modal--show');
}
