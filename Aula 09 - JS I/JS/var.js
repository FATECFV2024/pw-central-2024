// TESTE DE VARIAVEIS

//atribuindo valores
let idade = 25
console.log(idade)

//modificando valores
idade = 32
console.log(idade)

// recuperando valores
idade = idade +1
console.log(idade)

// VAR, LET OU CONST

function exemploVAR(){
    var x  = 5
    if(true){
        var x = 10
        console.log(x)
    }
    console.log(x)
}

function exemploLET(){
    let x  = 5
    if(true){
        let x = 10
        console.log(x)
    }
    console.log(x)
}

function exemploCONST(){
    const x  = 5
    // const y  não existe const vazias, é necessário inicializar
    if(true){
        const x = 10
        console.log(x)
    }
    // não podemos re-atribuir/modificar os valores
    x = 15;
    console.log(x)
}
//  TIPOS DE VARIAVEIS EM JS
function tiposVariaveis(){
    // numeros
    let idade = 25
    let peso = 80.55
    console.log(idade, peso)

    //texto
    let nome = 'Francisco'
    //ou
    let nome_ = "João"
    console.log(nome, nome_)
    
    //boolean
    let verdadeiro = true
    let falso = false
    console.log(verdadeiro, falso)

    //Array
    let lista_vazia = []
    let lista = ['laranja','maçã','banana']
    let precos = [1.99,2.99,7.99]
    let mista= ['gol',5,1.99, true, false]
    console.log(lista)
    console.log(precos)
    console.log(mista)

    //Nulo
    let nulo = null;
    console.log(nulo)

    //Desconhecido (undefined)
    let desc
    console.log(desc)

    // objeto vazio
    let objeto ={}
    console.log(objeto)

    //objeto com atributos
    let aluno ={
        nome:'Francisco',
        idade:25,
        situacao: true,
        endereco:{
            rua:'R. Carlos de Carvalho',
            bairro:'São João',
            cidade: 'Ferraz de Vasconcelos',
            uf: 'SP'
        },
        telefone:[11978786565, 11985856262]
    }
    // objetos anônimos não possui métodos de acesso ou de serviço
    // apenas existem no momento da execução
    // podemos ter objetos por dentro de objetos (objeto aninhado)
    console.log(aluno)
    
    // acessando atributos do objeto anônimo
    //acesso direto nome_objeto.nome_atributo
    console.log(aluno.nome)

    //modificar o valor do objeto anônimo
    // acesso direto: nome_objeto.nome_atributo = novoValor
    aluno.nome="Davi"
    console.log(aluno.nome)

}


// chamando as funcoes para a execução

// exemploVAR()
// exemploLET()
// exemploCONST()
tiposVariaveis()