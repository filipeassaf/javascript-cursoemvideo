let num = document.getElementById("num")
let sel = document.getElementById("sel")
let res = document.getElementById("res")
let numeros = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) == -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    
    let opt = document.createElement("option")

    if(!isNumero(num.value) || !inLista(num.value,numeros)) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        numeros.push(Number(num.value))
        opt.innerHTML = `Valor ${numeros[numeros.length-1]} adicionado`
        sel.appendChild(opt)
        res.innerHTML = ''
    }

    num.value = ''
    num.focus()

}

function finalizar(){     
        
    if(numeros.length == 0) {
        window.alert("Preencha um número primeiro!")
    } else {    

        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for(let pos in numeros){

            soma += numeros[pos]

            if(numeros[pos] > maior)
                maior = numeros[pos]
            if(numeros[pos] < menor)
                menor = numeros[pos]           

        }   
        
        media = soma/total

        res.innerHTML = `<p>Ao todo temos ${total} cadastrados</p>`

        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`

        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`

        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`

        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}