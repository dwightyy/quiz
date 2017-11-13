const correct = ["b","a","d","b","a","c","a","d","b","b"];
const qstList = [10,9,8,7,6,5,4,3,2,1];
var acertos = 0
var userAns = ["a"];
var lastAns = [];
var opA = "a"
  , opB = "b"
  , opC = "c"
  , opD = "d";
var opSelected = false;

extenso = []

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
	return userAns;
	/*userAns.push(op)
	return console.log(userAns);*/
}
function addAns(last){
	lastAns.push(userAns[0])
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
var count = 1
$(document).ready(function(){
  $("#img1").animate({opacity:1,"left":"710"},2000)
    $("#next").click(function(){
      $("#img"+count).css("display","none");
      count += 1;
      $("#questdiv").animate({opacity:"0"}, 0).delay(100).animate({opacity:"1"}, 2000)
      $(".ops").animate({opacity:"0"}, 0).delay(100).animate({opacity:"1"}, 2000)
      $("#img"+count).animate({opacity:1,"left":"710"},2000)
      
      });
  });

function nextQ(qstList, userAns){
	if (opSelected === true){
		addAns(lastAns)


  	if (qstList.length === 1){
			result = checkAns(correct, lastAns)
			document.getElementById("paginaPerguntas").style.display = "none"
			document.getElementById('paginaFinal').style.display = "flex"
      //abaixo geraçao do grafico
      tamAcertos =  document.getElementById("acertos")
      tamErros = document.getElementById("erros")
      deltaAcertos = 300-(result*30)
      deltaErros = 300-((10-result)*30)
      tamAcertos.style.height = (result*30) + "px"
      tamErros.style.height = ((10-result)*30) + "px"
      tamAcertos.style.top = deltaAcertos + "px"
      tamErros.style.top = deltaErros + "px"
      document.getElementById("acertos").innerHTML = "Acertos: "+result
      document.getElementById("erros").innerHTML = "Erros: " + (10-result)
			return
		}
		document.getElementById("q"+qstList[qstList.length-1]).style.display = "none"
		document.getElementById("q"+qstList[qstList.length-2]).style.display = "block"
		qstList.pop()
		return opSelected = false
	}
}
//FUNCAO PARA GERAR GRAFICO NA PAGINA FINAL
function geraGraph(){
  var altura =  document.getElementById("coluna1")
  document.getElementById("coluna1").style.height = "100px"
  altura.style.top = x + "px"
}



function mostraRespostas(){
  $(document).ready(function(){
    $("#rsp1").append("Starks").fadeIn(500)
    $("#rsp2").append("Robb").fadeIn(1000)
    $("#rsp3").append("Drogon, Viserion e Rhaegal").fadeIn(1500)
    $("#rsp4").append("Ghost").fadeIn(2000)
    $("#rsp5").append("Casa Baratheon").fadeIn(2250)
    $("#rsp6").append("Com ouro derretido").fadeIn(2500)
    $("#rsp7").append("Aço valiriano").fadeIn(2750)
    $("#rsp8").append("Garralonga").fadeIn(3050)
    $("#rsp9").append("Westeros").fadeIn(3250)
    $("#rsp10").append("Tarly").fadeIn(3600)

    $("#mostra").append( result + "acertos").css("color","lightgreen")


  });
}


$(".errada").each(function(index, el) {
  console.log(index + ": " + $( this ).text())
});


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
	}
		/*---------ANSWERS QUESTION3---------*/
	if (qstList[qstList.length-1] === 3){
		document.getElementById("op1").innerHTML = "Drogo, Viserion e Aegon"
		document.getElementById("op2").innerHTML = "Dracarys, Viserys e Drogon"
		document.getElementById("op3").innerHTML = "Drogon, Viserion e Rhaegal"
		document.getElementById("op4").innerHTML = "Aegon, Dracarys e Drogon"
		}
  /*---------ANSWERS QUESTION4---------*/
	if (qstList[qstList.length-1] === 4){
		document.getElementById("op1").innerHTML = "Cão Felpudo"
		document.getElementById("op2").innerHTML = "Ghost"
		document.getElementById("op3").innerHTML = "Lady"
		document.getElementById("op4").innerHTML = "Summer"
	}
  /*---------ANSWERS QUESTION5---------*/
  if (qstList[qstList.length-1] === 5){
    document.getElementById("op1").innerHTML = "Casa Baratheon"
    document.getElementById("op2").innerHTML = "Casa Tully"
    document.getElementById("op3").innerHTML = "Casa Martell"
    document.getElementById("op4").innerHTML = "Casa Lennister"
  }
  /*---------ANSWERS QUESTION6---------*/
  if (qstList[qstList.length-1] === 6){
    document.getElementById("op1").innerHTML = "Envenado por espiões"
    document.getElementById("op2").innerHTML = "Em um duelo contra um dothraki "
    document.getElementById("op3").innerHTML = "Com ouro derretido sobre a cabeça"
    document.getElementById("op4").innerHTML = "Condenado a morte e decapitado"
  }
  /*---------ANSWERS QUESTION7---------*/
  if (qstList[qstList.length-1] === 7){
    document.getElementById("op1").innerHTML = "Aço valiriano"
    document.getElementById("op2").innerHTML = "Aço viriliano"
    document.getElementById("op3").innerHTML = "Ferroamargo"
    document.getElementById("op4").innerHTML = "Aço inoxidavel"
  }
  /*---------ANSWERS QUESTION8---------*/
  if (qstList[qstList.length-1] === 8){
    document.getElementById("op1").innerHTML = "Lamento da Viúva"
    document.getElementById("op2").innerHTML = "Blackfyre"
    document.getElementById("op3").innerHTML = "Gelo"
    document.getElementById("op4").innerHTML = "Garralonga"
  }
  /*---------ANSWERS QUESTION9---------*/
  if (qstList[qstList.length-1] === 9){
    document.getElementById("op1").innerHTML = "Essos"
    document.getElementById("op2").innerHTML = "Westeros"
    document.getElementById("op3").innerHTML = "Sothoryos"
    document.getElementById("op4").innerHTML = "Sunset Sea"
  }
  /*---------ANSWERS QUESTION10---------*/
  if (qstList[qstList.length-1] === 10){
    document.getElementById("op1").innerHTML = "Ball"
    document.getElementById("op2").innerHTML = "Tarly"
    document.getElementById("op3").innerHTML = "Tyrell "
    document.getElementById("op4").innerHTML = "Baelish"
  }

}
