function saludar(e){
    console.log(e)
    console.log("Hola desde un evento");
}

function cambiarColor(){
    document.body.style.backgroundColor = 'green';
}

function capturarTexto(e){
    console.log(e.value)
}

let prueba = document.querySelector('#prueba');
/* prueba.addEventListener('click', (e) => {
    console.log(e)
}) */
prueba.addEventListener('click', saludar)


let btn = document.createElement('button')
btn.textContent = 'Enviar'
btn.addEventListener('dblclick', (e) => {
    console.log(e.target)
    e.target.textContent = 'Enviando datos...'
})

document.body.appendChild(btn)

let lista = document.querySelector('#lista')

for(let i = 1; i <= 6; i++){
    let li = document.createElement('li');
    li.textContent = 'Item ' + i;
    li.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'gray'
    })
    li.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = ''
    })
    lista.appendChild(li);
}

let btn2 = document.querySelector('.btn.btn-primary.btn-sm');
//btn2.textContent = 'Texto desde Javascript';

btn2.addEventListener('click', (e) => {
    let button = e.target;
    button.classList.add('shadow')
    button.classList.remove('btn-primary')
    button.classList.add('btn-danger')
})

let display = document.querySelector('.display');
let input = document.querySelector('#console');
let num = document.querySelector('.num');
input.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'green'
})

input.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
    e.target.style.color = ''
})

input.addEventListener('keyup', (e) => {
    display.innerHTML = e.target.value;
    num.innerHTML = 140 - e.target.value.length
})


let form = document.querySelector('form');
let search = document.querySelector('#search');
let invalidFB = document.querySelector('.invalid-feedback')

search.addEventListener('keyup', (evento) => {
    if (evento.target.value.includes('fuck')){
        evento.target.value = evento.target.value.replace('fuck', '****')
    }
})

form.addEventListener('submit', (evento) => {
    console.log(this)
    evento.preventDefault()


    if(search.value === ''){
        search.classList.add('is-invalid')
        invalidFB.innerHTML = "El campo no puede estar vacio"
    } else if (search.value.includes('fuck')){
        search.classList.add('is-invalid')
        search.value = search.value.replace('fuck', 'f**k')
    } else if (search.value.length > 10){
        search.classList.add('is-invalid')
        invalidFB.innerHTML = "El campo no puede sobrepasar los 50 caracteres"
    } else {
        evento.target.submit()
    }

})