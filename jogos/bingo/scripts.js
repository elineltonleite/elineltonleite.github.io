window.onload = function(){
	document.getElementById('num-sorteado').innerHTML='00'
}

 var historico=[] 



function resultado(){
	numSorteado = parseInt(Math.floor(Math.random() * 99)+1)
	
	if(historico.includes(numSorteado)){
		numSorteado = parseInt(Math.floor(Math.random() * 99)+1)
		resultado()
	}
	
	historico.push(numSorteado)
	//console.log(historico)
	
	montarQuadro(historico)
	document.getElementById('num-sorteado').innerHTML= numSorteado

 }
document.getElementById("btn-sortear").onclick = resultado


var writeHtml ="", i;
var letras =['B','I','N','G','O'];
for(i = 0; i < 5; i++){
	writeHtml += '<div class="bola cor-'+i+'"><div class="letras">'+letras[i]+ '</div></div>';
}
document.getElementById("topo").innerHTML=writeHtml;

function montarQuadro(result){
	var num = ""
	
	for(j = 1; j <= 99; j++){
		
		if(result.includes(j)){
			bg = "red"
		}else{
			bg ="#cecece;color:black"
		}
	
		if(j<10){
			num +='<div class="bola-menor" style="background:'+bg+'"><div class="numero">0'+j+ '</div></div>';
		}else{
			num +='<div class="bola-menor" style="background:'+bg+'"><div class="numero">'+j+ '</div></div>';
		}	
	
	}
	document.getElementById("quadro").innerHTML=num;
}
montarQuadro()


