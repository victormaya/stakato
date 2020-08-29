new SimpleSlide({
  slide: 'slide-cursos', // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  time: 5000, // tempo de transição dos slides
  pauseOnHover: false, // pausa a transição automática
});

if (window.SimpleAnime) {
  new SimpleAnime();
}