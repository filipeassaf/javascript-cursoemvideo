function verificar() {

var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'homem'

            if(idade < 10){
                //criança
                img.setAttribute('src','imagens/bebe-m.jpg')
            } else if(idade < 21){
                //Jovem       
                img.setAttribute('src','imagens/jovem-m.jpg')  
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','imagens/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src','imagens/idoso-m.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'mulher'

            if(idade < 10){
                //criança
                img.setAttribute('src','imagens/bebe-f.jpg')
            } else if(idade < 21){
                //Jovem       
                img.setAttribute('src','imagens/jovem-f.jpg')  
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','imagens/adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src','imagens/idoso-f.jpg')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }


}