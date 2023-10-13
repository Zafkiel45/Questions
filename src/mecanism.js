const ContainerMain = document.querySelectorAll('.ContainerResposta');
const ContainerChildren = document.querySelectorAll('.ContainerChildren');
const ContainerHidden = document.querySelectorAll('.ContainerHidden');
const Button = document.querySelectorAll('.button');

Button.forEach((button, index) => {
    button.addEventListener('click', () => {
            ContainerHidden[index].classList.toggle('visibleee')
            ContainerMain[index].classList.toggle('mainContainer')
            Button[index].classList.toggle('translate')
    })
})
