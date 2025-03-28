const box = document.getElementById("box_img")

function create(){

    function create_card(id){

        let numero = []

        for(let i = 0; i<3; i++){
            let num = Math.floor(Math.random()*3)
            numero.push(num)
        }


        const name = document.getElementById(id)
    
        const carta = document.createElement("img")

        for(let escolha of numero){
            const card1 = "img/papel-azul.png"
            const card2 = "img/pedra-azul.png"
            const card3 = "img/tesoura-azul.png"

            switch(escolha){
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
        }
    
        name.appendChild(carta)

    }

    create_card("tabuleiro-bot")
    create_card("tabuleiro-player")
}

box.addEventListener("click", ()=>{

    for(let i = 0; i < 3; i++){
        create()
    }

})