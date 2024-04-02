const formulario = document.querySelector('#formulario');
const listaDeudas = document.querySelector('#lista-deudas')
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
    
    const objDeuda = {
        id: Date.now(),
        texto: deuda
    }
    
    deudas.push(objDeuda);
    formulario.reset();
    createHTML();
    
}

function createHTML(){
    clearDeudas();
    deudas.forEach(item => {
        const btnClear = document.createElement('a');
        btnClear.classList.add('limpiar-comentario');
        btnClear.textContent= '❌'
        const li = document.createElement('li');
        li.textContent = item.texto;
        li.setAttribute('id', item.id)
        li.appendChild(btnClear)
        listaDeudas.appendChild(li)
    })

    sincronizarStorage()
}

function sincronizarStorage(){
    localStorage.setItem('deudas', JSON.stringify(deudas))
}

function clearDeudas(){
    while(listaDeudas.firstChild){
        listaDeudas.removeChild(listaDeudas.firstChild)
    }
}

function borrarItem(evt){
    evt.preventDefault()
    console.log(evt.target.parentElement.id)
    const id = evt.target.parentElement.id;
    
    deudas = deudas.filter(deuda => deuda.id != id);
    createHTML()
}
formulario.addEventListener('submit' , agregardeuda);
listaDeudas.addEventListener('click', borrarItem);

document.addEventListener('DOMContentLoaded', () => {
    deudas = JSON.parse(localStorage.getItem('deudas')) || []
    createHTML()
} )