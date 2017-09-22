const correct = ["b","c","d","b","a","c","a","e","b","b"];
const qstList = [10,9,8,7,6,5,4,3,2,1];
var acertos = 0
var userAns = ["a"];
var lastAns = [];
var opA = "a"
  , opB = "b"
  , opC = "c"
  , opD = "d";
var opSelected = false;



function checkAns(correct, userAns){
	var i = 0
	while (i < correct.length){
  if (correct[i] === userAns[i]){
		acertos++
  }
  i++;
	}
	return acertos
}


/* FUNCAO PARA COLOCAR TODAS AS SELECOES DO USUARIO EM UMA LISTA*/
function getAns(op){
	userAns[0] = op;
	opSelected = true;
	console.log(userAns);
	return userAns;
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
			result = checkAns(correct, lastAns)

			document.getElementById("paginaPerguntas").style.display = "none"
			document.getElementById('paginaFinal').style.display = "block"
      //abaixo geraçao do grafico
      tamAcertos =  document.getElementById("acertos")
      tamErros = document.getElementById("erros")
      deltaAcertos = 300-(result*30)
      deltaErros = 300-((10-result)*30)
      tamAcertos.style.height = (result*30) + "px"
      tamErros.style.height = ((10-result)*30) + "px"
      tamAcertos.style.top = deltaAcertos + "px"
      tamErros.style.top = deltaErros + "px"
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
//FUNCAO PARA GERAR GRAFICO NA PAGINA FINAL
function geraGraph(){
  var altura =  document.getElementById("coluna1")
  document.getElementById("coluna1").style.height = "100px"
  altura.style.top = x + "px"
}
/*---------ANSWERS QUESTION1---------*/
	document.getElementById("op1").innerHTML = "Boltons"
	document.getElementById("op2").innerHTML = "Starks"
	document.getElementById("op3").innerHTML = "Mormonts"
	document.getElementById("op4").innerHTML = "Karstarks"
function opsss(){
	/*---------ANSWERS QUESTION2---------*/
	if (qstList[qstList.length-1] === 2){
		document.getElementById("op1").innerHTML = "Robb"
		document.getElementById("op2").innerHTML = "Sansa"
		document.getElementById("op3").innerHTML = "Jon"
		document.getElementById("op4").innerHTML = "Arya"
		console.log(qstList[qstList.length-1])
	}
		/*---------ANSWERS QUESTION2---------*/
	if (qstList[qstList.length-1] === 3){
		document.getElementById("op1").innerHTML = "Drogo, Viserion e Aegon"
		document.getElementById("op2").innerHTML = "Dracarys, Viserys e Drogon"
		document.getElementById("op3").innerHTML = "Drogon, Viserion e Rhaegal"
		document.getElementById("op4").innerHTML = "Aegon, Dracarys e Drogon."
		}
}
	console.log(qstList[qstList.length-1])
