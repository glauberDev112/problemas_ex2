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
    const status = input_nota >= 7 ? "aprovado" : "reprovado"
    const msg_alt = input_nota >= 7 ? `o exercicio ${input_nome}, foi ${status}, parabaramens.` : `o exercicio ${input_nome}, foi ${status} por ${10-input_nota} pontos.`
    const nota_m = document.getElementById("nota-media")
    let linha = tabela.innerHTML
    linha += `<tr>
    <td>${input_nome}</td>
    <td>${input_nota}</td>
    <td><img src="images/${status}.png" alt="${msg_alt}"></td>
</tr><br>`
    notas.push(parseInt(input_nota))
    tabela.innerHTML = linha
}
function mediar () {
    let sum = 0
    
    for (let c = 0;c > notas.length; c++) {
        sum = sum + notas[c]
    } 
    let med = sum / notas.length
    console.clear()
    console.log(notas)
    console.log(med)
    console.log(sum)
}