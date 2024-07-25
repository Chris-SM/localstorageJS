var nome
var codigo
armazenamento = localStorage
localStorage.setItem("6506750","God Of War")
localStorage.setItem("5345533","Halo")
localStorage.setItem("5486588","Crash Bandicot")
localStorage.setItem("6434363","Fifa 15")
localStorage.setItem("6587686","Minecraft")
localStorage.setItem("8653887","Terraria")
localStorage.setItem("8638398","Hell Driver")
localStorage.setItem("8628682","Pokémon")

function busca(){
    codigo = document.getElementById('barra').value
    nome = localStorage.getItem(codigo)
    document.getElementById('Resultados').innerHTML = nome
}

function inserir(){
    nome = document.getElementById('NewGame').value
    codigo = document.getElementById('NewCode').value
    localStorage.setItem(codigo,nome)
    document.getElementById('NewGame').value = ""
    document.getElementById('NewCode').value = ""
    document.getElementById('confere').innerHTML = "Certo"
}

function apaga(){
    if(document.getElementById('confere').innerHTML == "Certo")
    document.getElementById('confere').innerHTML = ""
}