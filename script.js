var correct = ["a","c","d","b"]
var userAns = []
var lastAns = []
var opA = "a"
var opB = "b"
var opC = "c"
var opD = "d"

function getAns(op){
	userAns.push(op)
	return console.log(userAns);
}
function validade(lastOp){
	lastAns.push(userAns[userAns.length - 1])
	console.log(lastAns)
	return lastAns	
}
window.load = function certas(){
	return document.getElementById(respostas).innerHTML = lastAns.length
}