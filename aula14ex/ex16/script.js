
function contar() {

    var inicio = window.document.getElementById("txtinicio")
    var fim = window.document.querySelector("input#txtfim")
    var passo = window.document.querySelector("input#txtpasso")
    var res = window.document.querySelector("div#res")

    res.innerHTML = ''

    if(inicio.value.length == 0  || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Impossivel Contar'
     } else {

        let ii = Number(inicio.value) 
        let fi = Number(fim.value)
        let pa = Number(passo.value)

        if (pa <= 0) {
            window.alert(`[ERRO] - passo 0 é inválido - considerando passo = 1`)
            pa = 1
        } 
                 
        if(ii < fi) {
            for(var i = ii; i <= fi; i += pa){
                res.innerHTML += String(i)+'👉'    
            }
        } else {
            for(var i = ii; i >= fi; i -= pa){
                res.innerHTML += String(i)+'👉'    
            }    
        }
        res.innerHTML += '🏁'
        
    }
}