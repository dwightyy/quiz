var correct = ["a","c","d","b"]
var userAns = []
var lastAns = []
var opA = "a"
var opB = "b"
var opC = "c"
var opD = "d"
qstList = [10,9,8,7,6,5,4,3,2,1]


/* FUNCAO PARA COLOCAR TODAS AS SELECOES DO USUARIO EM UMA LISTA*/
function getAns(op){ 
	userAns.push(op)
	return console.log(userAns);
}


/*FUNCAO PARA PASSAR O ULTIMO ELEMENTO DA LISTA DE SELECOES (RESPOSTA FINAL) DO USUARIO
PARA UMA OUTRA LISTA, QUE IRA CONTER SOMENTE A RESPOSTA FINAL DAS QUESTOES.*/
function validade(lastOp){ 			  
	lastAns.push(userAns[userAns.length - 1])
	console.log(lastAns)
	return lastAns	
}

/*FUNCAO PARA SUMIR COM A ULTIMA PERGUNTA E COLOCAR A NOVA NA TELA, ATRAVES DA DIMINUICAO DE UMA LISTA*/
function nextQ(qstList){ 
	if (qstList.length === 1){
		document.getElementById("paginaPerguntas").style.display = "none"
		document.getElementById('paginaFinal').style.display = "flex"
		return	
	}
	document.getElementById("q"+qstList[qstList.length-1]).style.display = "none"
	document.getElementById("q"+qstList[qstList.length-2]).style.display = "block"
	qstList.pop()
	console.log(qstList	)
	return qstList
}
