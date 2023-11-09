const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')


const ValidateInput = ({target}) => {
   if(target.value.length > 2){
    button.removeAttribute('disabled');

   }else{
    button.setAttribute('disabled', '' )
   }
}

const handleSubmit = (event) => {
    event.preventDefault()

    localStorage.setItem('Player', input.value);
    //redirecionando para o jogo

    window.location ='/paginas/game.html'
}


input.addEventListener('input', ValidateInput);

form.addEventListener('submit', handleSubmit);





