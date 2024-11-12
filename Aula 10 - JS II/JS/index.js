// selecionamos os elementos do HTML
const titulo = document.getElementById('titulo')  //selecionamos elementos com id
const texto = document.querySelector('.texto') //selecionamos elementos
const botao = document.getElementById('botao') 
console.log(titulo, texto, botao)

//selecionando elementos que não existe
const texto1 = document.querySelector('texto1')
const botao1 = document.getElementById('botao1')
console.log(texto1, botao1)

// inserindo um evento no botao
botao.addEventListener('click',()=>{
    alert('Sou um evento externo')
})


//Manipulando conteudos e Estilos 

//alterar o conteudo textual
titulo.textContent = 'Aula com DOM em JS'

texto.innerHTML = "<strong>Texto adicionado pelo o JS</strong>"

//alterando estilos

titulo.style.color = "blue"

texto.style.fontSize = "20px"

//MANIPULANDO ELEMENTOS
//criando um elemento
const novoParagrafo = document.createElement('p')

//adicionando conteúdo no novo elemento
novoParagrafo.textContent = "Meu novo paragrafo"

//adicionando um novo elemento no Body
document.body.appendChild(novoParagrafo)


const div = document.getElementById('textoInicio')
console.log(div)

div.appendChild(novoParagrafo)

//alterando um elemento

//removendo um elemento

// exemplo para MouseOver e MouseOut
let meuDIV = document.getElementById('meuDIV')

meuDIV.addEventListener('mouseover',()=>{
    meuDIV.style.backgroundColor = 'blue'
})

meuDIV.addEventListener('mouseout', ()=>{
    meuDIV.style.backgroundColor = 'brown'
})

let entrada = document.getElementById('entrada')

//exemplo keyup: quando a tecla é liberada
entrada.addEventListener('keyup', (e)=>{
    console.log('Tecla liberada: '+e.key)
})

//exemplo keydown: quando a tecla é pressionada
entrada.addEventListener('keydown', (e)=>{
    alert('Tecla pressionada: '+e.key)
})

//exemplo change: quando o valor do input é alterado

let entrada2 = document.getElementById('entrada2')

entrada2.addEventListener('change', (e)=>{
    alert('Valor alterado: '+e.target.value)
})


//exemplo submit: quando o formulário é submetido
let meuForm = document.getElementById('meuForm')

meuForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let ent_nome = document.getElementById('ent_nome')
    alert('O nome é: '+ ent_nome.value)
    alert('Formulário submetido')
})




