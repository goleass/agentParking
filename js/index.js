const analisaMatriz = () => {
    // pega a tabela pelo id
    let table = document.getElementById('matriz')

    let matriz = []

    // percorre celula / coluna
    for (var i = 0, row; row = table.rows[i]; i++) {
        let linha = []
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        for (var j = 0, col; col = row.cells[j]; j++) {
            linha[col.id] = { pago: null }
            //   console.log(col.id,col.innerHTML)
            //   console.log(col.innerHTML)
        }
        matriz.push(linha)
    }
    return matriz[0]
}

const agenteFiscal = (posicao, matriz) => {
    const nomeAgente = 'F'

    let celula = matriz[posicao]
    let posicaoAtual = posicao

    for (let i = 0; i < 2; i++) {
        document.getElementById(posicaoAtual).innerHTML = 'F'
        
        if (document.getElementById(posicaoAtual).innerHTML == 'V') { // veículo não verificado
            document.getElementById(posicaoAtual).innerHTML = 'VF'// marcar célula com 'VF'

            if (celula.pago === false) { // veículo irregular
                console.log('veículo irregular')
                document.getElementById(posicaoAtual).innerHTML = 'VIF'
                //move
                document.getElementById(posicaoAtual).innerHTML = 'VI'
            }
            else {
                console.log('move') // funcao para mover o agente    
            }
        }
        else {
            console.log('move') // funcao para mover o agente    
        }

    }
}

document.getElementById('1.1').innerHTML = 'V'
// document.getElementById('2.0').innerHTML = 'F'

let matriz = analisaMatriz()

matriz['1.1'] = { pago: false }

agenteFiscal('2.1', matriz)

const moverAgenteFiscal = (posicao, matriz) => {
    cima = (parseFloat(posicao) - 1).toFixed(1)
    var posAtual = posicao

    console.log(document.getElementById(cima).innerHTML)
    let sair = false

    for (let index = 0; index < 5; index++) {
        if (document.getElementById(cima).innerHTML === 'V') {
            console.log('veiculo')
            document.getElementById(cima).innerHTML = 'VF'
            document.getElementById(posAtual).innerHTML = ''
            index = 5
            return cima
        } else {
            direita = (parseFloat(posAtual) + 0.1).toFixed(1)
            document.getElementById(direita).innerHTML = 'F'
            
            cima = (parseFloat(direita) - 1).toFixed(1)
            document.getElementById(posAtual).innerHTML = ''
            posAtual = direita
        }
    }
}

// console.log(moverAgenteFiscal('2.0', matriz))