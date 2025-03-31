const box = document.getElementById("box_img")

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

    const bot = document.getElementById("tabuleiro-bot")
    const player = document.getElementById("tabuleiro-player")

    delet_card("tabuleiro-bot")
    delet_card("tabuleiro-player")

    create()








    
    function random_card(){

        const container = document.getElementById("random_card")

        const aleatorio = Math.floor(Math.random()*3)

        const carta = document.createElement("img")
        const card1 = "img/papel-vermelho.png"
        const card2 = "img/pedra-vermelho.png"
        const card3 = "img/tesoura-vermelho.png"

        switch(aleatorio){
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

        carta.setAttribute("id", aleatorio)
        carta.setAttribute("class", "menor")

        container.appendChild(carta)

    }

    const papel = document.querySelectorAll('.card-0')
    const pedra = document.querySelectorAll(".card-1")
    const tesoura = document.querySelectorAll(".card-2")

    for(let paper of papel){
        paper.addEventListener("click", ()=>{
            delet_card("random_card")

            const carta = document.createElement("img")
            carta.src = "img/papel-azul.png"
            document.getElementById("random_card").appendChild(carta)
            carta.setAttribute("class", "menor")

            paper.remove()

            random_card()

        })
    }

    for(let stone of pedra){
        stone.addEventListener("click", ()=>{
            delet_card("random_card")

            const carta = document.createElement("img")
            carta.src = "img/pedra-azul.png"
            document.getElementById("random_card").appendChild(carta)
            carta.setAttribute("class", "menor")

            stone.remove()

            random_card()
        })
    }//for of pedra

    for(let scissors of tesoura){
        scissors.addEventListener("click", ()=>{
            delet_card("random_card")

            const carta = document.createElement("img")
            carta.src = "img/tesoura-azul.png"
            document.getElementById("random_card").appendChild(carta)
            carta.setAttribute("class", "menor")

            scissors.remove()

            random_card()
        })
    }//for of tesoura

})