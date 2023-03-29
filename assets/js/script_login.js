
let larguraTela = window.innerWidth;
let colunaImagem = document.querySelector('.col-4');

window.addEventListener('resize', ()=>{
    location.reload();
});

if (larguraTela <= 734) {

    colunaImagem.classList.remove('col-4');
    colunaImagem.classList.add('col');
} else {

    colunaImagem.classList.add('col-4');
}


