

export let modalError = async (response)=>{
    
    const modalError = document.querySelector(".modal_Info");
    const closeModal = document.querySelector('.modal__close');
    const modal= document.querySelector(".modal");

    while (modalError.firstChild) {
            modalError.removeChild(modalError.firstChild);
    }

    let p1 = response
    let responseAPI = p1.data;
    let errorElements = null;

    if (responseAPI.errors) {
        errorElements = responseAPI.errors.map(error => `
        <h4>Error Type: ${error.type}</h4>
        <p>Value: ${error.value}</p>
        <p>Message: ${error.msg}</p>
    `).join('');
    }
   
    const modalE = `
        <h2 className="modal__title">Error sending data</h2>
        <h4>${p1.status}</h4>
        <h4>${p1.statusText}</h4>
        <img src="https://www.lavoz.com.ar/resizer/9DvCUG7gefuQi8BuK1Vk2X0oAsA=/1023x323/smart/storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif" className="modal__img" alt="Imagen del modal" width="100%"/>
        <h4>Errores de credenciales:</h4>
        <p className="modal__paragraph">${(responseAPI.message) ? responseAPI.message : "No errors in credentials"}</p>
        <h4>Errores por validacion:</h4>
       ${(errorElements) ? errorElements : "No validation errors"}
        <p className="modal__paragraph">Please try again</p>
    `

    modalError.insertAdjacentHTML("beforeend", modalE)
   
    modal.classList.add('modal--show');
}

export let modalSendUser = async (response)=>{
    
    const modalUser = document.querySelector(".modal_Info");
    const modal= document.querySelector(".modal");

    while (modalUser.firstChild) {
        modalUser.removeChild(modalUser.firstChild);
    }

    let p1 = response
    let responseAPI = p1.data;

    const modalU = `
        <h2 className="modal__title">User successfully created!</h2>
        <h4>${p1.status}</h4>
        <h4>${p1.statusText}</h4>
        <img src="https://64.media.tumblr.com/174efc47788507c5dbf84b597dddcee2/tumblr_o7b4bgHu6L1qciqqno3_640.gif" className="modal__img" alt="Imagen del modal" width="100%"/>
        <h4>Message:</h4>
        <p className="modal__paragraph">${(responseAPI.message) ? responseAPI.message : "No errors in credentials"}</p>
        <p className="modal__paragraph">Remember your username and password</p>
    `

    modalUser.insertAdjacentHTML("beforeend", modalU)
   
    modal.classList.add('modal--show');
}

export let modalSendEmail = async (response)=>{
    
    const modalUser = document.querySelector(".modal_Info");
    const modal= document.querySelector(".modal");

    while (modalUser.firstChild) {
        modalUser.removeChild(modalUser.firstChild);
    }

    let p1 = response

    const modalU = `
        <h2 className="modal__title">verification code!</h2>
        <h4>hello dear user:</h4>
        <h4>${p1.usuario}</h4>
        <img src="https://i.gifer.com/QHTn.gif" className="modal__img" alt="Imagen del modal" width="100%"/>
        <h4>Message:</h4>
        <p className="modal__paragraph">You have requested a password recovery, your verification code has been sent to the email ${p1.email}, remember to check your spam folder if you can't find the email.</p>
        <p className="modal__paragraph">The code in the mail is valid for 15 minutes!</p>
    `

    modalUser.insertAdjacentHTML("beforeend", modalU)
   
    modal.classList.add('modal--show');
}