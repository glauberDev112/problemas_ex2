const form = document.getElementById('atividade')
const tabela = document.querySelector('tbody')
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
    let st = input_nota >= 7 ? "aprovado" : "reprovado"
    let icon = ''
    if (input_nota == 10) {
        icon = 'estrela.webp'
    } else if (icon >= 7) {
        icon = 'aprovado.png'
    } else {
        icon = 'reprovado.png'
    }
    const msg_alt = input_nota >= 7 ? `o exercicio ${input_nome}, foi ${st}, parabaramens.` : `o exercicio ${input_nome}, foi ${status} por ${10-input_nota} pontos.`
    const nota_m = document.getElementById("nota-media")
    let linha = tabela.innerHTML
    linha += `<tr>
    <td>${input_nome}</td>
    <td>${input_nota}</td>
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
    const status = med >= 7
    
}