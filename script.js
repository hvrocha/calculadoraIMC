function calcular(){
    var p = document.getElementById('txtp')
    var m = document.getElementById('txtm')
    var res = document.getElementById('res')

    if (p.value.length == 0 || m.value.length == 0 ){
        alert('[ERRO] Preencha com atenção todos os dados')
    } else {
        var p = Number(p.value)
        var m = Number(m.value)
        var r = p / (m*m)
        
        res.innerHTML = ` ${r.toFixed(1)} <br> `
   
    if (r < 18.5 ){
        res.style.color = 'yellow'
        res.innerHTML += 'Você esta abaixo do Peso'
        res.innerHTML += '\u{1F615}'
        res.innerHTML += '<p>Procure se alimentar melhor e praticar exercícios!</p>'
    } else if ( r > 18.5 && r < 24.9 ){
        res.style.color = 'green'
        res.innerHTML += 'O Seu peso está normal ' 
        res.innerHTML += '\u{1F604}'
        res.innerHTML += '<p> Parabéns, mantenha-se sempre saudável!! </p>'
    } else if ( r > 24.9 && r < 29.9 ){
        res.style.color = 'yellow'
        res.innerHTML += 'Você está sobrepeso'
        res.innerHTML += '\u{1F61F}'
        res.innerHTML += '<p>Tenha cuidado, se cuide melhor e pratique exercícios</p>'
    } else {
        res.style.color = 'red'
        res.innerHTML += 'Você está com Obesidade'
        res.innerHTML += '\u{1F628}'
        res.innerHTML += '<p>É importante buscar orientação médica e nutricional para o seu caso</p>'
    }
    }

}