const titulo = document.getElementById("titulo")
const botao1 = document.getElementById("btn1")
botao1.addEventListener("click", function() {

    titulo.textContent = "JavaScript é Incrível!"
})

const botao2 = document.getElementById("btn2")
const inputTexto = document.getElementById("inputTexto")
const mensagem = document.getElementById("mensagem")

botao2.addEventListener("click", function() {
     let msg =  inputTexto.value 
     mensagem.textContent = `Olá ${msg}`
})

const caixa = document.getElementById("caixa")
caixa.addEventListener("mouseover", function(){
    caixa.style.backgroundColor = "RED"
})
caixa.addEventListener("mouseout", function(){
    caixa.style.backgroundColor = "blue"
})

const botao3 = document.getElementById("btn3")
const lista = document.getElementById("lista")

botao3.addEventListener("click", function() {
    let novoItem = document.createElement("li")
    novoItem.textContent =  "Novo Item"
    lista.appendChild(novoItem)
})

const botao4 = document.getElementById("btn4")

botao4.addEventListener("click", function() {
    if(caixa.style.display == 'none'){
        caixa.style.display = 'block'
    }else{
        caixa.style.display = 'none'
    }
})

