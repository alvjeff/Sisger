function gerarNota_aux_transp(){
    //alert("ate aqui funcionando!")
    //console.log('funcionando')

    //cabecçalho
    let cabecalho = "<p></p>Conforme solicitado via Diex Nr 00-Bia C/7º GAC, de 21 de fevereiro de 2024, versando sobre apresentação da Solicitação de Auxílio Transporte e de acordo com a letra 'a' e letra 'b', do item '3', com a letra 'h' do item '4', da Portaria Nr 098 - DGP, de 31 de outurbro de 2001, seja realizada a inclusão no cadastro e o saque atrasado do benefício do auxílio transporte nos códigos NR0095 e  AR0095 em favor dos militares a seguir relacionados desta OM:</p>"

    //colocando a nota
    let nota = document.getElementById('nota')
    nota.style.textAlign = 'justify'
    nota.innerHTML = cabecalho 
    

}