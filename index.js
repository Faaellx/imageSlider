// Buscar os elementos 

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slides = document.querySelectorAll('.slide');

//configuração do autoplay
const auto = true;
//intervalo de transição
const intervalo = 5000;
// temporizador
let slideInterval;

// eventos
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);


function nextSlide () {
    //localizando classe atual
    const atual = document.querySelector('.atual');
    //remover a classe atual do elemento selecionado
    atual.classList.remove('atual');

    // verificar se existe um proximo elemento
    if (atual.nextElementSibling) {
        atual.nextElementSibling.classList.add('atual');
    } else {
        slides[0].classList.add('atual')
    }
}

function prevSlide() {
      //localizando classe atual
      const atual = document.querySelector('.atual');
      //remover a classe atual do elemento selecionado
      atual.classList.remove('atual');

      if (atual.previousElementSibling) {
        atual.previousElementSibling.classList.add('atual');
      } else {
        slides[slides.length-1].classList.add('atual');
      }
}

// controle do autoplay
if (auto) {
    //ativa a funcao next() a cada tempo de intervalo
    slideInterval = setInterval(nextSlide, intervalo)
}