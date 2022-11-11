const form = document.getElementById('atividade')
const tabela = document.querySelector('tbody')
const nm = parseInt(prompt('declare uma nota minima de aprovação (entre 1 e 10)'))
const f = !((!isNaN(nm)) && (nm >= 1 && nm <= 10))
console.log(`nota minima: ${nm} esta entre 1-10`)
if (f) {
    alert('erro:"o numero deve ser inteiro e estar entre 1 e 10"')
    location.reload()
}
let notas = []
console.log(form)
form.addEventListener('submit',function (e) {
    e.preventDefault()
    add_linha()
    mediar()
})
function add_linha () {
    const input_nome = document.getElementById('input-nome').value
    const input_nota = document.getElementById('input-nota').value
    let st = input_nota >= nm ? "aprovado" : "reprovado"
    let icon = ''
    if (input_nota == 10) {
        icon = 'estrela.webp'
    } else if (input_nota >= nm) {
        icon = 'aprovado.png'
    } else {
        icon = 'reprovado.png'
    }
    const msg_alt = input_nota >= nm ? `o exercicio ${input_nome}, foi ${st}, parabaramens.` : `o exercicio ${input_nome}, foi ${status} por ${10-input_nota} pontos.`
    const nota_m = document.getElementById("nota-media")
    let linha = tabela.innerHTML
    linha += `<tr>
    <td>${input_nome}</td>
    <td>${input_nota}</td>
    <td>${100/10*input_nota}%</td>
    <td><img src="images/${icon}" alt="${msg_alt}"></td>
</tr><br>`
    notas.push(parseInt(input_nota))
    tabela.innerHTML = linha
}
function mediar () {
    let sum = 0
    
    for (let c = 0;c < notas.length; c++) {
        console.log(`${sum} ${notas} ${notas[c]}`)
        sum += notas[c]
        
    } 
    let med = sum / notas.length
    const status = med >= nm
    const pre_span = document.getElementById('por')
    pre_span.innerHTML = 100/(notas.length*10)*sum
    const status_ret = document.getElementById('resultado')
    const nota_media = document.getElementById('nota-media')
    nota_media.innerHTML = med
    if (med == 10) {
        status_ret.className = 'perfeito'
        status_ret.innerHTML = 'aprovado!!!'
    } else if (med >= nm) {
        status_ret.className = 'aprovado'
        status_ret.innerHTML = 'aprovado!!'
        
    } else {
        status_ret.className = 'reprovado'
        status_ret.innerHTML = 'reprovado!'
    }
}