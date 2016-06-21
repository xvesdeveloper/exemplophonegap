var cont=0;


function calcular()
{
	//PEGA OS VALORES DO FORMULARIO
	var v1 = Number(document.formSoma.valor1.value);
	var v2 = Number(document.formSoma.valor2.value);

	//SOMA OS VALORES
	var soma = v1 + v2;

	//APRESENTA O RESULTADO
	alert("A soma dos valores eh: "+soma);
}

function cadastrar()
{
	if(localStorage.getItem('cont')==null) //CASO NÃO EXISTA NENHUM CONTATO GRAVADO
	{
		cont = 0; // ZERA O CONTADOR
	}
	else //CASO CONTRARIO
	{
		cont = Number(localStorage.getItem('cont')); //BUSCA A QUANTIDADE DE CONTATOS GRAVADOS
	}
	//PEGA OS VALORES DO FORMULARIO
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var telefone = document.getElementById("telefone").value;

	//INCREMENTAR O CONTADOR
	cont++;

	//GRAVA OS DADOS NO LOCALSTORAGE
	localStorage.setItem('cont',cont); //GRAVA O CONTADOR TAMBEM
	localStorage.setItem('nome'+cont,nome);
	localStorage.setItem('email'+cont,email);
	localStorage.setItem('telefone'+cont,telefone);

	//MOSTRA MENSAGEM
	alert("Dados gravados com sucesso");

	//CARREGA A PAGINA
	document.location.reload(true);

}


function listar()
{
	cont = Number(localStorage.getItem('cont'));
	for (var i = 1; i <= cont; i++)
	{
	//BUSCA OS ITENS GRAVADOS E ARMAZENADOS EM VARIAVEIS
	var nome = localStorage.getItem('nome'+i);
	var email = localStorage.getItem('email'+i);
	var telefone = localStorage.getItem('telefone'+i);

	//ESCREVE OS DADOS LISTADOS DENTRO DA DIV RESULTADO
	document.getElementById("resultado").innerHTML += "<br> Nome: "+nome+ "<br>E-mail: "+email+ "<br>Telefone: "+telefone;

	}
}