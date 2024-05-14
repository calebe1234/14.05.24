
class Tabuleiro {
    constructor (cor, x, y, linha, coluna, altura, largura, nome) {
        this.cor = cor;
        this.x = x;
        this.y = y;
        this.linha = linha;
        this.coluna = coluna;
        this.altura = altura;
        this.largura = largura;
        this.nome = nome;
    }
}

class Peca {
    constructor (cor, linha, coluna, altura, largura, nome, img) {
        this.cor = cor;
        this.linha = linha;
        this.coluna = coluna;
        this.altura = altura;
        this.largura = largura;
        this.nome = nome;
        this.img = img;
    }
}

const cor1 = "#fff"; // branco
const cor2 = "#000"; // preto
const medida = "px"; // unidade de medida em pixel
const larguraCelulaPadrao = 100;
const alturaCelulaPadrao = 100;
const larguraPecaPadrao = 50;
const alturaPecaPadrao = 50;
const linhas = ["1","2","3","4","5","6","7","8"];
const colunas = ["a","b","c","d","e","f","g","h"];
const totalCelulas = linhas.length * colunas.length;

var pecas = [];

pecas[0] = new Peca(cor2, linhas[0], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_1", './torrecinza.webp');
pecas[1] = new Peca(cor2, linhas[0], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_2", './torrecinza.webp');
pecas[2] = new Peca(cor2, linhas[0], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_1", './cavalocinza.webp');
pecas[3] = new Peca(cor2, linhas[0], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_2", './cavalocinza.webp');
pecas[4] = new Peca(cor2, linhas[0], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_1", './bispocinza.png');
pecas[5] = new Peca(cor2, linhas[0], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_2", './bispocinza.png');
pecas[6] = new Peca(cor2, linhas[0], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rei_preto", './reicinza.webp');
pecas[7] = new Peca(cor2, linhas[0], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rainha_preto", './rainhacinza.webp');
pecas[8] = new Peca(cor2, linhas[1], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_1", './peaocina.webp');
pecas[9] = new Peca(cor2, linhas[1], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_2", './peaocina.webp');
pecas[10] = new Peca(cor2, linhas[1], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_3", './peaocina.webp');
pecas[11] = new Peca(cor2, linhas[1], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_4", './peaocina.webp');
pecas[12] = new Peca(cor2, linhas[1], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_5", './peaocina.webp');
pecas[13] = new Peca(cor2, linhas[1], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_6", './peaocina.webp');
pecas[14] = new Peca(cor2, linhas[1], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_7", './peaocina.webp');
pecas[15] = new Peca(cor2, linhas[1], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_8", './peaocina.webp');

pecas[16] = new Peca(cor1, linhas[7], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_1", './torreazul1.png');
pecas[17] = new Peca(cor1, linhas[7], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_2", './torreazul1.png');
pecas[18] = new Peca(cor1, linhas[7], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_1", './cavaloazul.png');
pecas[19] = new Peca(cor1, linhas[7], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_2", './cavaloazul.png');
pecas[20] = new Peca(cor1, linhas[7], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_1", './bispoazul1.png');
pecas[21] = new Peca(cor1, linhas[7], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_2", './bispoazul1.png');
pecas[22] = new Peca(cor1, linhas[7], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rei_branco", './reiazul.png');
pecas[23] = new Peca(cor1, linhas[7], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rainha_branco", './rainhaazul.png');
pecas[24] = new Peca(cor1, linhas[6], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_1", './peaoazul.png');
pecas[25] = new Peca(cor1, linhas[6], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_2", './peaoazul.png');
pecas[26] = new Peca(cor1, linhas[6], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_3", './peaoazul.png');
pecas[27] = new Peca(cor1, linhas[6], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_4", './peaoazul.png');
pecas[28] = new Peca(cor1, linhas[6], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_5", './peaoazul.png');
pecas[29] = new Peca(cor1, linhas[6], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_6", './peaoazul.png');
pecas[30] = new Peca(cor1, linhas[6], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_7", './peaoazul.png');
pecas[31] = new Peca(cor1, linhas[6], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_8", './peaoazul.png');

var celula = [];
var numCelula = 0;
var corAtual = cor1;
var posicaoSuperior = 0;

for (let l = 0; l < linhas.length; l++) {
    let posicaoEsquerda = 0;
    if (corAtual == cor1) {
        corAtual = cor2;
    } else {
        corAtual = cor1;
    }
    for (let c = 0; c < colunas.length; c++) {
        celula[numCelula] = new Tabuleiro(corAtual, posicaoSuperior, posicaoEsquerda, linhas[l], colunas[c], alturaCelulaPadrao, larguraCelulaPadrao, "celula_" + colunas[c] + "_" + linhas[l]);
        posicaoEsquerda += larguraCelulaPadrao;

        if (corAtual == cor1) {
            corAtual = cor2;
        } else {
            corAtual = cor1;
        }

        numCelula++;
    }
    posicaoSuperior += alturaCelulaPadrao;
}

var divsCelulas = [];


console.log(pecas);

for (let c = 0; c < celula.length; c++) {
    divsCelulas[c] = document.createElement("div");
    divsCelulas[c].id = celula[c].nome;
    divsCelulas[c].style.backgroundColor = celula[c].cor;
    divsCelulas[c].style.position = "absolute";
    divsCelulas[c].style.top = celula[c].x + medida;
    divsCelulas[c].style.left = celula[c].y + medida;
    divsCelulas[c].style.height = celula[c].altura + medida;
    divsCelulas[c].style.width = celula[c].largura + medida;

    if (celula[c].cor == cor1) {
        divsCelulas[c].style.color = cor2;
    } else {
        divsCelulas[c].style.color = cor1;
    }
    divsCelulas[c].style.display = "grid";
    divsCelulas[c].style.alignItems = "center";

    for (let p = 0; p < pecas.length; p++) {
        if (celula[c].linha == pecas[p].linha && celula[c].coluna == pecas[p].coluna) {
            let peca_tmp = document.createElement("img");
            peca_tmp.src = pecas[p].img;
            peca_tmp.width = pecas[p].largura;
            peca_tmp.height = pecas[p].altura;
            peca_tmp.style.marginLeft = "auto";
            peca_tmp.style.marginRight = "auto";
            peca_tmp.id = pecas[p].nome;
            divsCelulas[c].appendChild(peca_tmp);
        } else {

        }
    }

    document.body.appendChild(divsCelulas[c]);
}
