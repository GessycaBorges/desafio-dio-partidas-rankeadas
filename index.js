const vitorias = 150;
const derrotas = 20;
let nivel;

function saldoDeRankeadas (vitorias, derrotas) {
    return vitorias - derrotas;
}

const saldoVitorias = saldoDeRankeadas(vitorias, derrotas);

switch (true) {
    case saldoVitorias <= 10 :
        nivel = "Ferro"
    break;

    case saldoVitorias <= 20 :
        nivel = "Bronze"
    break;
    
    case saldoVitorias <= 50 :
        nivel = "Prata"
    break;
        
    case saldoVitorias <= 80 :
        nivel = "Ouro"
    break;

    case saldoVitorias <= 90 :
        nivel = "Diamante"
    break;

    case saldoVitorias <= 100 :
        nivel = "Lendário"
    break;

    case saldoVitorias >= 101 :
        nivel = "Imortal"
    break;
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);