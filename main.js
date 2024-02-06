function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;


for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    const tecla = listaDeTeclas[cont];    
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');        
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

// listaDeTeclas;