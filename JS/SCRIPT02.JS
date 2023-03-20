const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    //criar referencia do elemento da pagina 
   let innome = document.getElementById('innome')
   let invalor = document.getElementById('invalor')
   let outnome = document.getElementById('outnome')
   let outvalor = document.getElementById('outvalor')

   //obter os conteudos dos campos 
   let nome = innome.value
   let valor = Number(invalor.value)


    //loicada aplicaçao 
    let entrada = valor * 0.5  
    let parcela = entrada / 12


    //saida de dados
    outnome.textContent = `Veiculo ${nome}` //crase
    outvalor.textContent = `entrada de:  ${entrada}` //crase
    parcelas.textContent = `12x de: ${parcela.toFixed(2)}`

})

