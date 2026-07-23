function voltear(elementoCard) {
    elementoCard.classList.toggle('volteada');

    actualizarContador();
}


function actualizarContador() {
    const tarjetasVolteadas = document.querySelectorAll('.card.volteada').length;
    
    const spanContador = document.getElementById('contador');
    if (spanContador) {
        spanContador.textContent = tarjetasVolteadas;
    }
}

function filtrar(tipo) {
    const btnTodas = document.getElementById('btn-todas');
    const btnVocales = document.getElementById('btn-vocales');

    if (btnTodas && btnVocales) {
        btnTodas.classList.remove('active');
        btnVocales.classList.remove('active');

        if (tipo === 'todas') {
            btnTodas.classList.add('active');
        } else if (tipo === 'vocales') {
            btnVocales.classList.add('active');
        }
    }

    const tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach(card => {
        const tipoCard = card.getAttribute('data-tipo');

        if (tipo === 'todas') {
            card.style.display = 'flex';
        } else if (tipo === 'vocales') {
            if (tipoCard === 'vocal') {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}