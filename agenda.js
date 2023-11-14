const form = document.getElementById('form-contatos')
const nomeCompleto = []
const email = []
const telefone = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()
})

function adicionarLinha(){
    const inputNomeCompleto = document.getElementById('nome-contato')
    const inputEmail = document.getElementById('e-mail')
    const inputTelefone = document.getElementById('telefone')

    let repetido = ''
    if(nomeCompleto.includes(inputNomeCompleto.value)){
        repetido = 'nome'
    }else{
        if(email.includes(inputEmail.value)){
            repetido = "email"
        }else{
            if(telefone.includes(inputTelefone.value)){
                repetido = "telefone"
            }
        }
    }
    
    switch(repetido){
        case 'nome':
            alert(`O contato ${inputNomeCompleto.value} já existe.`)
            break;
        case 'email':
            alert(`O e-mail ${inputEmail.value} já existe.`)
            break;
        case 'telefone':
            alert(`O telefone ${inputTelefone.value} já existe.`)
            break;
        default:
            nomeCompleto.push(inputNomeCompleto.value)
            email.push(inputEmail.value)
            telefone.push(inputTelefone.value)

            let linha = '<tr>'
            linha += `<td>${inputNomeCompleto.value}</td>`
            linha += `<td>${inputEmail.value}</td>`
            linha += `<td>${inputTelefone.value}</td>`
            linha += '</tr>'
        
            linhas += linha
            break
    }


    inputNomeCompleto.value = ''
    inputEmail.value = ''
    inputTelefone.value = ''

    
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}