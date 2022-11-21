// Recuperar ou criar os dados, caso não exista algum no local storage
function leiaDados(){
    let strDados = localStorage.getItem('db');
    let dados = {};
    if(strDados){
        dados=JSON.parse(strDados);
    }
    else {
        dados={contas:[
            {
                nome: "Rodrigo",
                idCliente: 1,
                nBanco: 111,
                nAgencia: 1111,
                nConta: 111111
            },
            {
                nome: "Maria",
                idCliente: 3,
                nBanco: 333,
                nAgencia: 3333,
                nConta: 333333
            },
            {
                nome: "José",
                idCliente: 4,
                nBanco: 444,
                nAgencia: 4444,
                nConta: 444444
            },
            {
                nome: "Thaís",
                idCliente: 2,
                nBanco: 222,
                nAgencia: 2222,
                nConta: 222222
            }
        ],
        lancamentos:[
            {
                idCliente: 1,
                data: {dia: 1,
                    mes: 10,
                    ano: 22},
                descricao: "Verdemar",
                valor: -760.73
            },
            {
                idCliente: 1,
                data: {dia: 2,
                    mes: 10,
                    ano: 22},
                descricao:"Spotify",
                valor: -34.90
            },
            {
                idCliente: 1,
                data: {dia: 3,
                    mes: 10,
                    ano: 22},
                descricao: "Salário do mês OUT",
                valor: 12341.61
            },
            {
                idCliente: 2,
                data: {dia: 5,
                    mes: 10,
                    ano: 22},
                descricao: "Salário do mês OUT",
                valor: 2347.29
            },
            {
                idCliente: 4,
                data: {dia: 5,
                    mes: 10,
                    ano: 22},
                descricao: "COPASA",
                valor: -40.69
            },
            {
                idCliente: 1,
                data: {dia: 5,
                    mes: 10,
                    ano: 22},
                descricao: "Parcela OUT - PUC-MG",
                valor: -1698.87
            },
            {
                idCliente: 4,
                data: {dia: 5,
                    mes: 10,
                    ano: 22},
                descricao:"Envio PIX",
                valor: -300.00
            },
            {
                idCliente: 3,
                data: {dia: 7,
                    mes: 10,
                    ano: 22},
                descricao: "Salário do mês OUT",
                valor: 5891.05
            },
            {
                idCliente: 4,
                data: {dia: 7,
                    mes: 10,
                    ano: 22},
                descricao: "Salário do mês OUT",
                valor: 1710.98
            },
            {
                idCliente: 3,
                data: {dia: 8,
                    mes: 10,
                    ano: 22},
                descricao: "Carrefuor",
                valor: -579.83
            },
            {
                idCliente: 4,
                data: {dia: 8,
                    mes: 10,
                    ano: 22},
                descricao: "Ingresso Cinema",
                valor: -12.50
            },
            {
                idCliente: 2,
                data: {dia: 8,
                    mes: 10,
                    ano: 22},
                descricao: "Supermercado",
                valor: -275.57
            },
            {
                idCliente: 3,
                data: {dia: 9,
                    mes: 10,
                    ano: 22},
                descricao: "Crédito PIX",
                valor: 96.00
            },
            {
                idCliente: 3,
                data: {dia: 9,
                    mes: 10,
                    ano: 22},
                descricao: "Crédito PIX",
                valor: 96.00
            },
            {
                idCliente: 3,
                data: {dia: 9,
                    mes: 10,
                    ano: 22},
                descricao: "Crédito PIX",
                valor: 96.00
            },
            {
                idCliente: 3,
                data: {dia: 9,
                    mes: 10,
                    ano: 22},
                descricao: "Crédito PIX",
                valor: 96.00
            },
            {
                idCliente: 3,
                data: {dia: 10,
                    mes: 10,
                    ano: 22},
                descricao: "Crédito PIX",
                valor: 96.00
            },
            {
                idCliente: 3,
                data: {dia: 10,
                    mes: 10,
                    ano: 22},
                descricao: "Crédito PIX",
                valor: 96.00
            },
            {
                idCliente: 3,
                data: {dia: 11,
                    mes: 10,
                    ano: 22},
                descricao: "CEMIG",
                valor: -48.11
            },
            {
                idCliente: 1,
                data: {dia: 11,
                    mes: 10,
                    ano: 22},
                descricao: "Bancorbras",
                valor: -109.99
            },
            {
                idCliente: 4,
                data: {dia: 14,
                    mes: 10,
                    ano: 22},
                descricao: "Ifood",
                valor: -47.48
            },
            {
                idCliente: 4,
                data: {dia: 16,
                    mes: 10,
                    ano: 22},
                descricao: "UBER",
                valor: -16.90
            },
            {
                idCliente: 2,
                data: {dia: 17,
                    mes: 10,
                    ano: 22},
                descricao: "Plano de saúde cooperativo",
                valor: 40.00
            },
            {
                idCliente: 2,
                data: {dia: 21,
                    mes: 10,
                    ano: 22},
                descricao: "UBER",
                valor: -19.90
            },
            {
                idCliente: 2,
                data: {dia: 21,
                    mes: 10,
                    ano: 22},
                descricao: "UBER",
                valor: -19.90
            },
            {
                idCliente: 2,
                data: {dia: 21,
                    mes: 10,
                    ano: 22},
                descricao: "MILA Volkswagen",
                valor: -320.49
            },
            {
                idCliente: 4,
                data: {dia: 22,
                    mes: 10,
                    ano: 22},
                descricao: "UBER",
                valor: -19.90
            },
            {
                idCliente: 2,
                data: {dia: 25,
                    mes: 10,
                    ano: 22},
                descricao:"YouTube Music Premium",
                valor: -16.90
            },
            {
                idCliente: 1,
                data: {dia: 26,
                    mes: 10,
                    ano: 22},
                descricao: "UBER",
                valor: -29.50
            },
            {
                idCliente: 1,
                data: {dia: 26,
                    mes: 10,
                    ano: 22},
                descricao: "UBER",
                valor: -33.90
            },
            {
                idCliente: 1,
                data: {dia: 26,
                    mes: 10,
                    ano: 22},
                descricao: "Volvo Euroville",
                valor: -729.89
            },
            {
                idCliente: 3,
                data: {dia: 27,
                    mes: 10,
                    ano: 22},
                descricao:"Amazon",
                valor: -69.90
            },
            {
                idCliente: 4,
                data: {dia: 27,
                    mes: 10,
                    ano: 22},
                descricao: "Supermercados BH",
                valor: -137.48
            },
            {
                idCliente: 1,
                data: {dia: 2,
                    mes: 11,
                    ano: 22},
                descricao:"Spotify",
                valor: -34.90
            },
            {
                idCliente: 1,
                data: {dia: 3,
                    mes: 11,
                    ano: 22},
                descricao: "Salário do mês NOV",
                valor: 12341.61
            },
            {
                idCliente: 2,
                data: {dia: 4,
                    mes: 11,
                    ano: 22},
                descricao: "Salário do mês NOV",
                valor: 2347.29
            },
            {
                idCliente: 3,
                data: {dia: 7,
                    mes: 11,
                    ano: 22},
                descricao: "Salário do mês NOV",
                valor: 5891.05
            },
            {
                idCliente: 4,
                data: {dia: 7,
                    mes: 11,
                    ano: 22},
                descricao: "Salário do mês NOV",
                valor: 1710.98
            },
            {
                idCliente: 1,
                data: {dia: 5,
                    mes: 11,
                    ano: 22},
                descricao: "Parcela NOV - PUC-MG",
                valor: -1698.87
            },
            {
                idCliente: 2,
                data: {dia: 8,
                    mes: 11,
                    ano: 22},
                descricao: "COPASA",
                valor: -98.03
            },
            {
                idCliente: 1,
                data: {dia: 10,
                    mes: 11,
                    ano: 22},
                descricao: "Verdemar",
                valor: -691.74
            },
            {
                idCliente: 1,
                data: {dia: 11,
                    mes: 11,
                    ano: 22},
                descricao: "CEMIG",
                valor: -1230.81
            },
            {
                idCliente: 1,
                data: {dia: 11,
                    mes: 10,
                    ano: 22},
                descricao: "Bancorbras",
                valor: -129.99
            },
            {
                idCliente: 1,
                data: {dia: 25,
                    mes: 11,
                    ano: 22},
                descricao:"YouTube Music Premium",
                valor: -16.90
            }
        ]};
        localStorage.setItem('db', JSON.stringify(dados));
    }
    return dados;
}

/* Seletor de Clientes - INÍCIO */
function imprimaSeletorClientes(){
    let seletor = document.querySelector("#seletor-cliente");
    let strHtml = `<label class="input-group-text" for="inputGroupSelect01">Nome</label>
    <select class="form-select" id="inputGroupSelect01"></select>`;
    seletor.innerHTML = strHtml;
    imprimaNomeClientes();
}
function imprimaNomeClientes(){
    let dados = leiaDados();
    let seletorNomes = document.querySelector("#inputGroupSelect01");
    let strHtml = `<option selected>Selecione o nome do Cliente</option>`;
    for(let i=0; i < dados.contas.length; i++){
        strHtml += `<option>${dados.contas[i].nome}</option>`
    }
    seletorNomes.innerHTML = strHtml;
}
/* Seletor de Clientes - FIM */

/* Tabela dos Extratos - INÍCIO */
function imprimaTabelaExtrato(){
    let objDados = leiaDados();
    let tabela = document.querySelector("#tabela-extrato");
    let strHtml = `<thead>
        <tr class="table-secondary">
        <th scope="col">data</th>
        <th scope="col">Descrição</th>
        <th scope="col">Valor (R$)</th>
        </tr>
    </thead>
    <tbody class="corpo-tabela-extrato"></tbody>`;
    tabela.innerHTML = strHtml;
    imprimaLinhasTabelaExtrato();
}
function imprimaLinhasTabelaExtrato(){
    let dados = leiaDados();
    let corpoTabela = document.querySelector(".corpo-tabela-extrato");
    let strHtml = ``;
    let nomeSeletor = document.querySelector("#inputGroupSelect01").value;
    let ERRO = nomeSeletor == "Selecione o nome do Cliente";
    if(ERRO){
        alert("Selecione o cliente que deseja consultar o extrato!");
    }
    else{
        let idCliente = idClienteNome(dados , nomeSeletor);
        let saldo = 0;
        for(let i = 0; i < dados.lancamentos.length; i++){
            if(dados.lancamentos[i].idCliente == idCliente){
                if(dados.lancamentos[i].valor > 0 ){ //Adiciona uma linha com o valor em verde
                    strHtml += `<tr>
                        <td>${dados.lancamentos[i].data.dia}/${dados.lancamentos[i].data.mes}/${dados.lancamentos[i].data.ano}</td>
                        <td>${dados.lancamentos[i].descricao}</td>
                        <td class="table-success">${dados.lancamentos[i].valor}</td>
                    </tr>`;
                    saldo += dados.lancamentos[i].valor;
                }
                else { //Adiciona uma linha com o valor em vermelho
                    strHtml += `<tr>
                        <td>${dados.lancamentos[i].data.dia}/${dados.lancamentos[i].data.mes}/${dados.lancamentos[i].data.ano}</td>
                        <td>${dados.lancamentos[i].descricao}</td>
                        <td class="table-danger">${dados.lancamentos[i].valor}</td>
                    </tr>`;
                    saldo += dados.lancamentos[i].valor;
                }
            }
        }
        if(saldo > 0 ){
            strHtml += `<tr>
                <td colspan="2" class="table-secondary">Saldo</td>
                <td class="table-success">${saldo.toFixed(2)}</td>
            </tr>`;
        }
        else{
            strHtml += `<tr>
                <td colspan="2" class="table-secondary">Saldo</td>
                <td class="table-danger">${saldo.toFixed(2)}</td>
            </tr>`;
        }
    }
    corpoTabela.innerHTML = strHtml;
}
/* Tabela dos Extratos - FIM */

/* Recupera o id do cliente selecionado no local storage */
function idClienteNome(dados,nomeSeletor){
    let i = 0;
    while(dados.contas[i].nome != nomeSeletor) i++;
    let id = dados.contas[i].idCliente;
    return id;
}

//Configuração dos botões
document.querySelector("#conferir-extrato").addEventListener('click', imprimaTabelaExtrato);