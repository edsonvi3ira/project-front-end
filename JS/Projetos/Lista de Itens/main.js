//Construção da conexão do Javascript e HTML
// Encapsulando os elementos 

// Filtro de pesquisa
const filter = document.getElementById('filter')
// Formulário para Adicionar itens
const form = document.getElementById('addForm')
// Lista de itens
const list = document.getElementById('items')

filter.addEventListener('keyup', function(){
    // alert('VI VOCÊ DIGITANDO...')
});

form.addEventListener('submit', function(){
    alert('Enviado com sucesso!!')
})

list.addEventListener('click', function(){
    alert('Item excluído')
})