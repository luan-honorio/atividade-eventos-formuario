const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{

    let nome = document.getElementById('nome').value
    let preco = parseFloat(document.getElementById('preco').value)


    let medicamento = nome
    let desconto = (preco + preco) - 0.20 


    nomeMedicamento.textContent = `Promoçao de ${medicamento}`
    valorDesconto.textContent = `Leve 2 por apenas R$${desconto}`

})