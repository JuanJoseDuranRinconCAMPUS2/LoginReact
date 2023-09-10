

export let modalError = async (response)=>{
    
    const modalError = document.querySelector(".modal_Info");
    const closeModal = document.querySelector('.modal__close');
    const modal= document.querySelector(".modal");

    while (modalError.firstChild) {
            modalError.removeChild(modalError.firstChild);
    }

    let p1 = response
    let responseAPI = p1.data;
    const modalE = `
        <h2 className="modal__title">Error sending data</h2>
        <h4>${p1.status}</h4>
        <h4>${p1.statusText}</h4>
        <img src="https://www.lavoz.com.ar/resizer/9DvCUG7gefuQi8BuK1Vk2X0oAsA=/1023x323/smart/storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif" className="modal__img" alt="Imagen del modal" width="100%"/>
        <p className="modal__paragraph">${responseAPI.message}</p>
        <p className="modal__paragraph">Please try again</p>
    `

    modalError.insertAdjacentHTML("beforeend", modalE)
   
    modal.classList.add('modal--show');
}