
const numerosBingo = Array.from({ length: 90 }, (_, i) => i + 1);


function obterLetra(numero) {
    if (numero <= 18) return 'B';
    if (numero <= 36) return 'I';
    if (numero <= 54) return 'N';
    if (numero <= 72) return 'G';
    return 'O';
}


function atualizarRestantes() {
    const restantes = numerosBingo.length;
    document.getElementById('restantes').textContent = `Números restantes: ${restantes}`;
}


function sortearNumero() {
    if (numerosBingo.length === 0) {
        document.getElementById('sorteado').textContent = "Todos os números já foram sorteados!";
        document.getElementById('btnSortear').disabled = true;
        return null;
    }
    const indiceAleatorio = Math.floor(Math.random() * numerosBingo.length);
    const numeroSorteado = numerosBingo.splice(indiceAleatorio, 1)[0];
    const letra = obterLetra(numeroSorteado);
    return `${letra}${numeroSorteado}`;
}


document.getElementById('btnSortear').addEventListener('click', () => {
    const sorteio = sortearNumero();
    if (sorteio !== null) {
        document.getElementById('sorteado').textContent = `Sorteado: ${sorteio}`;
        atualizarRestantes();
    }
});


atualizarRestantes();

