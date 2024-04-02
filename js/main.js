const formulario = document.querySelector('#formulario');
let deudas = []

function mostrarError(msj){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = msj
    mensajeError.classList.add('error')
    const modal = document.querySelector('#content')
    modal.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove();
    },2500)
}

function agregardeuda(evt) {
    evt.preventDefault()
    const deuda = document.querySelector("#deuda").value;
    deuda === '' && mostrarError("No puede ingresar un item vacío")
    
    
}

formulario.addEventListener('submit' , agregardeuda);