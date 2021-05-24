let num = [5,8,2,3]

console.log(num)
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do verto é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)

let pos1 = num.indexOf(4)
console.log(`O valor 4 esta na posição ${pos1}`) // retorna -1 caso não tenha o valor no array