
const numerosBingo = Array.from({ length: 75 }, (_, i) => i + 1); 
const numerosJaSorteados = []; 


function obterLetra(numero) {
  if (numero <= 15) return 'B';
  if (numero <= 30) return 'I';
  if (numero <= 45) return 'N';
  if (numero <= 60) return 'G';
  return 'O';
}

function atualizarRestantes() {
    const restantes = numerosBingo.length;
    document.getElementById('restantes').textContent = `Números restantes: ${restantes}`;
}


function atualizarNumerosSorteados() {
    const container = document.getElementById('numerosSorteados');
    if (numerosJaSorteados.length === 0) {
        container.innerHTML = `<strong>Números já sorteados:</strong> Nenhum número sorteado ainda.`;
    } else {
        container.innerHTML = `<strong>Números já sorteados:</strong> ${numerosJaSorteados.join(', ')}`;
    }
}


function sortearNumero() {
    if (numerosBingo.length === 0) {
        document.getElementById('sorteado').textContent = "Todos os números já foram sorteados!";
        document.getElementById('btnSortear').disabled = true;
        return null;
    }
    const indiceAleatorio = Math.floor(Math.random() * numerosBingo.length);
    const numeroSorteado = numerosBingo.splice(indiceAleatorio, 1)[0];
    numerosJaSorteados.push(numeroSorteado);
    const letra = obterLetra(numeroSorteado);
    return `${letra}${numeroSorteado}`;
}


document.getElementById('btnSortear').addEventListener('click', () => {
    const sorteio = sortearNumero();
    if (sorteio !== null) {
        document.getElementById('sorteado').textContent = `Sorteado: ${sorteio}`;
        atualizarRestantes();
        atualizarNumerosSorteados();
    }
});


atualizarRestantes();
atualizarNumerosSorteados();
