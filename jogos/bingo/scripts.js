window.onload = function(){
	document.getElementById('num-sorteado').innerHTML='00'
	qtdBolas  = prompt('Informe o total de bolas')
}

var historico=[] 
function resultado(){
	
	numSorteado = parseInt(Math.floor(Math.random() * qtdBolas)+1)
	
	if(historico.includes(numSorteado)){
		resultado()
	}else{
	
		historico.push(numSorteado)
		//console.log(historico)
		montarQuadro(historico)
		document.getElementById('num-sorteado').innerHTML= numSorteado
		
		if(historico.length >= qtdBolas){
			document.getElementById('inf').innerHTML= 'Todas as bolas já foram chamadas <button id="btn-refresh" onclick="recarregar()">Reset</button>'
		}
	}

 }
document.getElementById("btn-sortear").onclick = resultado

function recarregar(){window.location.reload()}

var writeHtml ="", i;
var letras =['B','I','N','G','O'];
for(i = 0; i < 5; i++){
	writeHtml += '<div class="bola cor-'+i+'"><div class="letras">'+letras[i]+ '</div></div>';
}
document.getElementById("topo").innerHTML=writeHtml;

function montarQuadro(result){
	var num = ""
	
	for(j = 1; j <= qtdBolas; j++){
		
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
	
	n1= result[result.length -1]
	n2= result[result.length -2]
	n3= result[result.length -3]
	n4= result[result.length -4]
	n5= result[result.length -5]
	if(n2==undefined){
		n2="-"
	}
	if(n3==undefined){
		n3="-"
	}
	if(n4==undefined){
		n4="-"
	}
	if(n5==undefined){	
		n5="-"
	}
	
	document.getElementById('painel').innerHTML=
	'<div class="bola-menor bol-sup">'+n5+'</div><div class="bola-menor bol-sup">'+n4+'</div><div class="bola-menor bol-sup"> '+n3+'</div><div class="bola-menor bol-sup"> '+n2+'</div><div class="bola-menor bol-sup-chamada"> '+n1+'</div>'

}
montarQuadro()


