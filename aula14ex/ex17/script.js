function tabuada() {

    //alert('Funciona')    

    var num = document.getElementById("txtnumero")
    var sel = document.getElementById("seltab")

    //alert(`[num.value.length] - ${num.value.length}`)    

    sel.innerHTML = ''

    if (num.value.length == 0) {
        alert('[ERRO] - Preencha um número!')
    } else {
        var n = Number(num.value)

        for(var i = 0; i <= 10 ; i++) {

//            também funciona - solução do StackOverflow                
//            sel.options[i] = new Option(`${n} * ${i} = ${n*i}`, i);

            let item = document.createElement("option")
            item.text = `${n} * ${i} = ${n*i}`
            item.value = `tab${n}`
            sel.appendChild(item)
        }

    }
    
}