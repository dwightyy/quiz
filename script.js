var correct = ["a","c","d","b"]
var userAns = ["a"]
var lastAns = []
var opA = "a"
var opB = "b"
var opC = "c"
var opD = "d"
qstList = [10,9,8,7,6,5,4,3,2,1]
var opSelected = false


/* FUNCAO PARA COLOCAR TODAS AS SELECOES DO USUARIO EM UMA LISTA*/
function getAns(op){ 
	userAns[0] = op
	opSelected = true
	console.log(userAns)
	return userAns
	/*userAns.push(op)
	return console.log(userAns);*/
}
function addAns(last){
	lastAns.push(userAns[0])
	console.log(lastAns)
}

/*FUNCAO PARA PASSAR O ULTIMO ELEMENTO DA LISTA DE SELECOES (RESPOSTA FINAL) DO USUARIO
PARA UMA OUTRA LISTA, QUE IRA CONTER SOMENTE A RESPOSTA FINAL DAS QUESTOES.*/
/*function validade(lastOp){ 			  
	lastAns.push(userAns[userAns.length - 1])
	console.log(lastAns)
	return lastAns	
}
*/
/*FUNCAO PARA SUMIR COM A ULTIMA PERGUNTA E COLOCAR A NOVA NA TELA, ATRAVES DA DIMINUICAO DE UMA LISTA*/
function nextQ(qstList, userAns){ 
	if (opSelected === true){
		addAns(lastAns)

		if (qstList.length === 1){
			document.getElementById("paginaPerguntas").style.display = "none"
			document.getElementById('paginaFinal').style.display = "flex"
			return	
		}
		document.getElementById("q"+qstList[qstList.length-1]).style.display = "none"
		document.getElementById("q"+qstList[qstList.length-2]).style.display = "block"
		qstList.pop()
		console.log(qstList	)
		console.log(userAns,"ultima")
		return opSelected = false
	}
}
