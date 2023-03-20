const btn = document.getElementById('btn')
btn.addEventListener('click' ,()=>{

    let nomefilme = document.getElementById("nomefilme").value
    let tempomin = document.getElementById('tempomin').value

    let titulo = nomefilme
    let horas = Math.floor(tempomin/60)
    let minutos = tempomin % 60

    filme.textContent = `${titulo}`
    tempo.textContent = `${horas} hora(s) e ${minutos} minutos`
})