const grid = document.querySelector('.grid');

const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')



const cards_caracter = [
/*'card-1',
'card-2',
'card-3',
'card-4',
'card-5',
'card-6',
'card-7',
'card-8',
'card-9',
'card-10'
*/
'beth',
'jerry',
'jessica',
'morty',
'pessoa-passaro',
'pickle-rick',
'rick',
'summer',
'meeseeks',
'scroopy',

];



const createElement = (tag, className) => {
    const element =document.createElement(tag);
    element.className = className;
    return element;
}

let firsCard = '';
let segundaCard = '';



const checkEndGame = () => {
    const disabled = document.querySelectorAll('.disabled-card')  //procura por todos os elementos que possuem essa classe

    if(disabled.length == 20){
        clearInterval(this.loop)
        alert(`Parabéns, ${spanPlayer.innerHTML} você ganhou! e o seu tempo foi: ${timer.innerHTML}`)
        window.location ='/paginas/fim.html'
      
    }
}




const checkCards = () => {
    const firsCaracter = firsCard.getAttribute('data-character');
    const segundaCaracter = segundaCard.getAttribute('data-character');


    if(firsCaracter == segundaCaracter) {           //checando se são iguais

        firsCard.firstChild.classList.add('disabled-card')
        segundaCard.firstChild.classList.add('disabled-card')

        firsCard = '';   //resetando para poder clicar em outras cartas
        segundaCard = '';

        checkEndGame(); //função para ver se acabou o jogo

    }else{
        setTimeout(() => {
            firsCard.classList.remove('reveal-card');
            segundaCard.classList.remove('reveal-card')

            firsCard = '';
             segundaCard = '';
        },600)

        

    }

}



const revealcard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')){
        return
    }

    if(firsCard == ''){
        target.parentNode.classList.add('reveal-card');
        firsCard = target.parentNode;

    } else if (segundaCard =='') {
        target.parentNode.classList.add('reveal-card'); //revela a carta
        segundaCard = target.parentNode; //atribui ela na variavel

        checkCards(); //checando se as duas são iguais
    }

  
}


const createCard = (cards_caracter) => {

    const card = createElement('div', 'card');  // adiciona o elemento 
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back')

    card.classList = 'card' // adiciona a classe ao elemento
    front.classList = 'face front'
    back.classList = 'face back'

    front.style.backgroundImage = `url('../images/${cards_caracter}.png')`;

    card.appendChild(front);  //adiciona o front como filho de card
    card.appendChild(back);

    card.addEventListener('click', revealcard )
    card.setAttribute('data-character', cards_caracter)

    return card;
}


const loadGame = () => {

    const duplicateCard = [...cards_caracter, ...cards_caracter]

    const shuffleArray = duplicateCard.sort( () => Math.random() - 0.5)


    shuffleArray.forEach((cards_caracter) => {

        const card = createCard(cards_caracter)
        grid.appendChild(card)
    });


   
}


const startTime = () => {
   
    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;

    },1000)
}

window.onload = () =>{


    spanPlayer.innerHTML = localStorage.getItem('Player');

    startTime();  //time
    loadGame();    //inicia o jogo
}





