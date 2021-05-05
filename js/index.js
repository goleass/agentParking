
// pega a tabela pelo id
let table = document.getElementById('matriz')

let matriz = []

// percorre celula / coluna
for (var i = 0, row; row = table.rows[i]; i++) {
    let linha = []
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
        linha[col.id] = { tipo:col.innerHTML,valor:null }
    //   console.log(col.id,col.innerHTML)
    //   console.log(col.innerHTML)
    }  
    matriz.push(linha)
 }

const agenteFiscal = (posicao,[matriz]) => {
    const nomeAgente = 'F'
    console.log(matriz['1.1'])
    // const celula = document.getElementById(posicao).innerHTML
    // if (celula) { // célula não está vazia
    //     if(celula == 'V'){
    //         console.log('verificar')
    //     }
    //     else{
    //         console.log('move') // funcao para mover o agente
    //     }
    // }

    // document.getElementById(posicao).innerHTML = 'F'
}

const [t] = matriz
t['1.1'] = {tipo: 'V', valor:1}
document.getElementById('1.0').innerHTML = 'V'
agenteFiscal('1.0', matriz)