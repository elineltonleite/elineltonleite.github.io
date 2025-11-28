let papel   = document.getElementById('papel')
let tesoura = document.getElementById('tesoura')
let pedra   = document.getElementById('pedra')
let jogador = ""
let maquina = ""

let  j = 0
let  c = 0
let empates = 0

pedra.onclick = function(){
   jogador = "pedra"
   jokenpo(jogador)
}
papel.onclick = function(){
    jogador="papel"
    jokenpo(jogador)
}
tesoura.onclick = function(){
    jogador="tesoura"
    jokenpo(jogador)
}

function jokenpo(jogador){   
    let resultado =""
    let vencedor =""
    
    opcoes = ['pedra', 'papel', 'tesoura']
    indiceAleatorio = Math.floor(Math.random() * opcoes.length)
    computador = opcoes[indiceAleatorio]

    if(jogador == computador){
        vencedor = "Empate"
        empates += 1
    }else{
        
        if(jogador == "pedra" && computador == "tesoura"){
            vencedor = "Jogador ganhou!!"
            j += 1
        }else if (jogador == "pedra" && computador == "papel"){
            vencedor = "Computador ganhou!!"
            c +=1
        }else if (jogador == "tesoura" && computador == "papel"){
            vencedor = "Jogador ganhou!!"
            j += 1
        }else if (jogador == "tesoura" && computador == "pedra"){
            vencedor = "Computador ganhou!!"
            c +=1
        }else if (jogador == "papel" && computador == "pedra"){
            vencedor = "Jogador ganhou!!"
            j += 1
        }else if (jogador == "papel" && computador == "tesoura"){
            vencedor = "Computador ganhou!!"
            c +=1
        }    
    }
    document.getElementById("jogadorPlacar").innerHTML= j
    document.getElementById("jogadorOpcao").innerHTML= jogador
    document.getElementById("computadorPlacar").innerHTML= c
    document.getElementById("computadorOpcao").innerHTML= computador
    total = empates + c + j
    resultado += `<h1 class="h1Vencedor">${vencedor}</h1>` + `Total de Jogadas:${total} `+`<p>Empates: ${empates}</p>`
    document.getElementById("resultado").innerHTML = resultado
}

