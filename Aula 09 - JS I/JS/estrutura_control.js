function estrutura_condicional_simples(){
    //condicional simples (SE)
    let idade = prompt('Digite a sua idade')
    if (idade>17){
        alert('Maior de Idade')
    }
}

function estrutura_condicional_composta(){
    //condicional composta (SE E SENÃO)
    let idade = prompt('Digite a sua idade')
    if (idade>17){
        alert('Maior de Idade')
    }else {
        alert('Menor de idade')
    }
}

function estrutura_condicional(){
    //condicional composta (SE, SENÃO SE e SENÃO)
    let idade = prompt('Digite a sua idade')
    if (idade>65){
        alert('Idoso')
    }else if (idade>=18 && idade<65) {
        alert('Adulto')
    }else if (idade>=12 && idade<18){
        alert ('Adolescente')
    }else{
        alert ('Criança')
    }
}

function estrutura_de_caso(){
    let idade = prompt('Digite a sua idade')
    switch(idade){
        case '65':
            alert('Idoso')
        break
        case '18':
            alert('Adulto') 
        break
        case '16':
            alert('Adolescente')
        break
        case '10':
            alert('Criança')
        break
    }

    // em switch case são predefinido valores 
    // não é possível utilizar operadores de comparação e booleanos
}


// estrutura_condicional_simples()
// estrutura_condicional_composta()
// estrutura_condicional()
estrutura_de_caso()