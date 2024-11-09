function gerarNota_pecuniaria(){

    //essa funcao sera dividida depois

    //atribuicao das variaveis do formulario
    let titulo = '<h3>Compensação Pecuniaria - Ordem de saque</h3><br>'
    let nota = document.getElementById("nota")
    let nome = document.getElementById("nome").value
    let prec = document.getElementById('prec').value
    let cpf = document.getElementById('cpf').value
    let idt = document.getElementById('identidade').value
    let banco = document.getElementById('banco').value


    //textos da nota

    let a = "<p>Por ter sido licenciado ex-officio por término de tempo de serviço em blablabla, concedo a Compensação Pecuniária, tendo em vista esta amparado pelo artigo 1º da Lei nº 7.963, de 21 de dezembro de 1989, conforme descrito abaixo:</p><br>"

    let b = "<p>Tendo completo no dia blablabla, blablabla anos, blalbla mes e blablabla dias de efetivo serviço, conforme discrimintação abaixo e por ter sido licenciado a ex-officio por termino de prorrogação do tempo de serviço, seja sacado o pecúlio (compensação pecuniaria) no valor de blablabla remuneraçõees mensais, o qual deverá ser pago de uma so vez.</p><br>"

    let c = "<p>DADOS DO BENEFICIARIO</p><br>"

    let d = `<p>Nome: ${nome}</p>`
    let e = `<p>Idt: ${idt}</p>`
    let f = `<p>CPF: ${cpf}</p>`
    let g = `<p>PREC: ${prec}</p>`
    let h = `<p>Banco: ${banco} Agencia: ${agencia} conta: ${conta}</p>`



    nota.innerHTML = titulo + a + b + c + d + e + f + g
}

function gerarNota_altera_domic_banc(){

     //atribuicao das variaveis do formulario
    let titulo = '<h3>Atualização de domicílio bancário</h3><br>'
    let nota = document.getElementById("nota")

    //textos da nota
    
    nota.innerHTML = 'ola'
    alert('testando')
}

function fazerLogin(){
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById("senha").value

    if( usuario == 'sgtjefferson' && senha == '123'){
        //alert('Login efetuado com sucesso')
        location.href = 'pagina_inicial.html'
    } else {
        alert("tente de novo")
    }

}

function gerarNota_aux_transp(){
    alert("ate aqui funcionando!")
}

function gerarNota_ocupacao_pnr(){
    
    //variaveis
    let sistema = document.getElementById('sistema').value
    let doc_ref = document.getElementById('doc_ref').value
    //let data_ocup = document.getElementById('data_ocup').value
    let num_pnr = document.getElementById('num_pnr').value
    let vila_militar = document.getElementById('vila_militar').value
    let post_grad = document.getElementById('post_grad').value
    let cpf = document.getElementById('cpf').value
    let nome = document.getElementById('nome').value
    let soldo = document.getElementById('soldo').value
    
    let desc_UA = soldo * 0.035
    let desc_UA_monetario = desc_UA.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    let desc_FEx = soldo * 0.015
    let desc_FEx_monetario = desc_FEx.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    //manipulacao com datas
    /*-----------------------------------------------------------*/
    let inputData = document.getElementById('data_ocup').value
    let data = new Date(inputData)
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()
    let dia = data.getDate() +1
    let data_ocup = `${dia}/${mes}/${ano}`
    
    //codigo para pegar a quantidade de dias do mes
    let dias_do_mes = new Date(ano, mes, 0)
    let ult_dia_mes = dias_do_mes.getDate()
    /*---------------------------------------------------------*/

    //AQUI onde vai se concentrar todo o corpo da nota
    let nota = document.getElementById('nota')
    

    //Formulação da NOTA
    nota.innerHTML = "<p>Conforme publicado no " + doc_ref + ", do 7º GAC, seja feita a implantação dos descontos de PNR referente ao militar abaixo relacionado, por ter ocupado em " + data_ocup + ", o PNR Nr " + num_pnr + ", da Vila Militar " + vila_militar + ":</p><br>"

   // nota.style.textAlign = 'justify' //nao consegui justificar diretamente no css, tentar corrigir isso

    let tabela = 
        "<table>" + 
            "<tr>" + 
                "<th colspan='3'> LANÇAMENTO " + sistema + " </th>" + 
            "</tr>" + 
            "<tr>" + 
                "<th> P/G </th>" + 
                "<th> CPF </th>" + 
                "<th> NOME </th>" + 
            "</tr>" + 
            "<tr>" + 
                "<td>" + post_grad + "</td>" + 
                "<td>" + cpf + "</td>" +
                "<td>" + nome + "</td>" +
            "</tr>" + 
        "</table> <br>"    

    nota.innerHTML += tabela

     //aqui sera feito calculo com datas
     let qtd_dias_ocup_no_mes = ult_dia_mes - dia + 1
     console.log(qtd_dias_ocup_no_mes)
 
     let desc_UA_prop = (desc_UA/ult_dia_mes*qtd_dias_ocup_no_mes)
     let desc_FEx_prop = (desc_FEx/ult_dia_mes*qtd_dias_ocup_no_mes)
     let desc_UA_prop_monetario = desc_UA_prop.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
     let desc_FEx_prop_monetario = desc_FEx_prop.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

     
    //aqui vai o em consequencia
    let consequencia = "Em consequência: <br>" + 
        "- seja realizada a implantação do desconto em favor da UA 3,5%, no valor de " + desc_UA_monetario + ";<br>" + 
        "- seja realizada a implantação do desconto em favor do Fundo do ExércitoUA 1,5%, no valor de " +       desc_FEx_monetario + ";<br>" +
        "- seja realizada a Despesa a anular do desconto atrasado em favor da UA 3,5% no valor de " + desc_UA_prop_monetario + ", referente ao período de " + dia + " a " + ult_dia_mes + " de " + mes_extenso(mes) + " de " + ano + ";<br>" + 
        "- seja realizada a Despesa a anular de desconto atrasado em favor do Fundo do Exército 1,5% no valor de " + desc_FEx_prop_monetario + " referente ao período de " + dia + " a " + ult_dia_mes + " de " + mes_extenso(mes) + " de " + ano + "; e<br>"
        "- A Divisão de Pagamento e interessados tomem conhecimento e providências." 
    
    nota.innerHTML += consequencia

    

   

}

function mes_extenso(mes){
    const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return MESES[mes - 1]
}

//funcão para SIPPES E SIAPPES
function verificarSistema(){
    let sistema = document.getElementById('sistema').value
    let label_cpf = document.getElementById('label_cpf').innerHTML
    //console.log(sistema)
    if( sistema == 'SIPPES'){
        //console.log(sistema, label_cpf)
        label_cpf = 'CPF: '
        console.log(sistema, label_cpf)
    } else {
        label_cpf = 'PREC'
        console.log(sistema, label_cpf)
    }
}