const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{

    let valorkg = document.getElementById('valorkg').value
    let consumo = document.getElementById('consumo').value

   

    let valorAPagar = (valorkg * consumo) / 1000


    valorApagar.textContent = `Valor a Pagar R$${valorAPagar}`
})