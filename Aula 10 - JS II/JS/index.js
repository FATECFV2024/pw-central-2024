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





