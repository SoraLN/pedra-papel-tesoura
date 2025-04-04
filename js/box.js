const box = document.getElementById("box_img")

let ponto_player = 0
let ponto_bot = 0
let empate = 0

let ponto_player_final = 0
let ponto_bot_final = 0

function delet_card(id){

    const container = document.getElementById(id)

    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

function create(){

    function create_card(id){

        let numero = []

        for(let i = 0; i<3; i++){
            let num = Math.floor(Math.random()*3)
            numero.push(num)
        }

        const name = document.getElementById(id)

        let num = 0

        for(let i = 0; i < 3; i++){

            const carta = document.createElement("img")

            const card1 = "img/papel-azul.png"
            const card2 = "img/pedra-azul.png"
            const card3 = "img/tesoura-azul.png"

            switch(numero[num]){
                case 0:
                    carta.src = card1
                break;

                case 1:
                    carta.src = card2
                break;

                case 2:
                    carta.src = card3
                break;
            }

            name.appendChild(carta)

            carta.setAttribute("class", "card-" + numero[num])

            num++

            if(id == "tabuleiro-bot"){
                carta.src = "img/carta-virada.png"
                carta.removeAttribute("class")
            }
        }
    }

    create_card("tabuleiro-bot")
    create_card("tabuleiro-player")
}

box.addEventListener("click", ()=>{
delet_card("random_card")

document.getElementById("ponto_bot").innerHTML = 0
document.getElementById("ponto_player").innerHTML = 0
document.getElementById("empate").innerHTML = 0
ponto_bot = 0
ponto_player = 0
empate = 0

    const bot = document.getElementById("tabuleiro-bot")
    const player = document.getElementById("tabuleiro-player")

    delet_card("tabuleiro-bot")
    delet_card("tabuleiro-player")

    create()

    /*--------------- CODIGO DAS CARTAS ----------------------------*/

    let aleatorio = Math.floor(Math.random()*3)

    function random_card(){

        const container = document.getElementById("random_card")

        const carta = document.createElement("img")
        const card0 = "img/papel-vermelho.png"
        const card1 = "img/pedra-vermelho.png"
        const card2 = "img/tesoura-vermelho.png"

        switch(aleatorio){
            case 0:
                carta.src = card0
            break;

            case 1:
                carta.src = card1
            break;

            case 2:
                carta.src = card2
            break;
        }

        carta.setAttribute("id", aleatorio)
        carta.setAttribute("class", "menor")

        container.appendChild(carta)

    }

    const delet_card_bot = (()=>{
        const bot = document.getElementById("tabuleiro-bot")
        bot.removeChild(bot.firstChild)
    })

    function function_card(id, id2){
        delet_card("random_card")

        const carta = document.createElement("img")
        carta.src = `img/${id}-azul.png`
        document.getElementById("random_card").appendChild(carta)
        carta.setAttribute("class", "menor")

        id2.remove()

        random_card()

        delet_card_bot()
    }

    const att_ponto = (()=>{
        const bot = document.getElementById("ponto_bot")
        const player = document.getElementById("ponto_player")
        const empate_div = document.getElementById("empate")

        bot.innerHTML = ponto_bot
        player.innerHTML = ponto_player
        empate_div.innerHTML = empate
    })

    function pontos_final(){

        const tabuleiro = document.getElementById("tabuleiro-bot")

        function create_text(mensagem,clase){ //AQUI
            delet_card("random_card")
            const text = document.createElement("p")
            document.getElementById("random_card").appendChild(text)

            text.innerHTML = mensagem
            text.classList.add(clase)
        }

            if(tabuleiro.children.length == 0){

                setTimeout(()=>{
                    
                    if(ponto_bot > ponto_player){
                        create_text("!! PERDEU !!", "perdeu")
                        ponto_bot_final++
                        document.getElementById("ponto_bot_total").innerHTML = ponto_bot_final
            
                    }else if(ponto_player > ponto_bot){
                        create_text("!! VENCEU !!", "ganhou")
                        ponto_player_final++
                        document.getElementById("ponto_player_total").innerHTML = ponto_player_final
            
                    }else{
                        create_text("DEU EMPATE:)", "empatou")
                    } 

                }, 2000)
            }
    }       

    const papel = document.querySelectorAll('.card-0')
    const pedra = document.querySelectorAll(".card-1")
    const tesoura = document.querySelectorAll(".card-2")

    for(let paper of papel){
        paper.addEventListener("click", ()=>{

            function_card("papel",paper)

            if(aleatorio == 0){
               empate++

            }else if(aleatorio == 1){
                ponto_player++

            }else if(aleatorio == 2){
                ponto_bot++
            }
        att_ponto()
        pontos_final()
        })
    }// For papel

    for(let stone of pedra){
        stone.addEventListener("click", ()=>{

            function_card("pedra",stone)

            if(aleatorio == 0){
                ponto_bot++
 
             }else if(aleatorio == 1){
                 empate++
 
             }else if(aleatorio == 2){
                 ponto_player++
             }
        att_ponto()
        pontos_final()
        })
    }// For pedra

    for(let scissors of tesoura){
        scissors.addEventListener("click", ()=>{

            function_card("tesoura",scissors)

            if(aleatorio == 0){
                ponto_player++
 
             }else if(aleatorio == 1){
                 ponto_bot++
 
             }else if(aleatorio == 2){
                 empate++
             }
        att_ponto()
        pontos_final()
        })
    }// For tesoura

})

//Falta apenas fazer a sincronia de quem ganhou a partida